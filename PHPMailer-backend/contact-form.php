<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

// Allow Cross-Origin Requests for seamless AJAX integration
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Preflight accepted"]);
    exit;
}

// Set Default Timezone to Indian Standard Time (IST)
date_default_timezone_set('Asia/Kolkata');

// ==========================================
// SMTP & Email Configuration
// ==========================================
// You can set these environment variables or update the fallback default values below:
$email_host       = getenv('PRESTINIT_SMTP_HOST')     ?: 'smtp.office365.com';
$email_username   = getenv('PRESTINIT_SMTP_USERNAME') ?: 'info@prestinit.in';
$email_password   = getenv('PRESTINIT_SMTP_PASSWORD') ?: ''; // Provide your SMTP password or set in ENV
$email_port       = (int) (getenv('PRESTINIT_SMTP_PORT') ?: 587);
$email_encryption = getenv('PRESTINIT_SMTP_ENCRYPTION') ?: 'tls';

// Receivers & Senders
$admin_email      = getenv('PRESTINIT_ADMIN_EMAIL') ?: 'info@prestinit.in';
$from_email       = getenv('PRESTINIT_FROM_EMAIL')  ?: ($email_username ?: 'info@prestinit.in');
$from_name        = 'Prestin IT Solutions';

// Initialize Response
$response = ["status" => "error", "message" => "Invalid request method."];

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode($response);
    exit;
}

// Support both JSON body and standard Form POST
$rawInput = file_get_contents("php://input");
$postData = json_decode($rawInput, true);

if (!is_array($postData)) {
    $postData = $_POST;
}

// Sanitize inputs
function cleanInput($value) {
    return trim(strip_tags($value ?? ''));
}

function escapeHtml($value) {
    return htmlspecialchars($value ?? '', ENT_QUOTES, 'UTF-8');
}

function displayValue($value) {
    $value = trim($value ?? '');
    return $value !== '' ? nl2br(escapeHtml($value)) : '<span style="color:#94a3b8;font-style:italic;">Not provided</span>';
}

// Extract form data
$name    = cleanInput($postData['name'] ?? '');
$email   = cleanInput($postData['email'] ?? '');
$phone   = cleanInput($postData['phone'] ?? '');
$service = cleanInput($postData['service'] ?? 'IT Solutions');
$subject = cleanInput($postData['subject'] ?? 'New Contact Inquiry');
$message = cleanInput($postData['message'] ?? '');
$company = cleanInput($postData['company'] ?? '');
$budget  = cleanInput($postData['budget'] ?? '');

// Validation
if (empty($name) || empty($email) || (empty($message) && empty($subject))) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Please fill in all required fields (Name, Email, Subject, and Message)."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Please provide a valid email address."]);
    exit;
}

// Helper: Configure SMTP Settings on a PHPMailer instance
function configureSMTP(PHPMailer $mail, $host, $username, $password, $port, $encryption, $fromEmail, $fromName) {
    $mail->isSMTP();
    $mail->Host       = $host;
    $mail->SMTPAuth   = !empty($username) && !empty($password);
    $mail->Username   = $username;
    $mail->Password   = $password;
    $mail->Port       = (int) $port;

    $encLower = strtolower($encryption);
    if ($encLower === 'ssl') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }

    $mail->setFrom($fromEmail, $fromName);
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';

    // SSL options for high compatibility across various server setups
    $mail->SMTPOptions = [
        'ssl' => [
            'verify_peer'       => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true
        ]
    ];
}

// Helper: Attach Prestin IT Logo
function attachPrestinLogo(PHPMailer $mail) {
    $possiblePaths = [
        dirname(__DIR__) . '/src/assets/logo/logo.png',
        dirname(__DIR__) . '/public/favicon-l.png',
        dirname(__DIR__) . '/public/favicon.png',
        isset($_SERVER['DOCUMENT_ROOT']) ? $_SERVER['DOCUMENT_ROOT'] . '/src/assets/logo/logo.png' : '',
    ];

    foreach ($possiblePaths as $path) {
        if (!empty($path) && file_exists($path)) {
            $mail->addEmbeddedImage($path, 'prestinitLogo', 'logo.png');
            return 'cid:prestinitLogo';
        }
    }

    // Fallback online logo URL
    return 'https://prestinit.in/assets/logo/logo.png';
}

// Build Data Rows for Table
$detailRows = [
    'Full Name'     => $name,
    'Email Address' => $email,
];

if (!empty($phone))   { $detailRows['Phone Number'] = $phone; }
if (!empty($company)) { $detailRows['Company / Org'] = $company; }
if (!empty($service)) { $detailRows['Service Focus'] = $service; }
if (!empty($budget))  { $detailRows['Project Budget'] = $budget; }
if (!empty($subject)) { $detailRows['Subject'] = $subject; }
if (!empty($message)) { $detailRows['Message'] = $message; }

function renderTableRows($rows) {
    $html = '';
    $total = count($rows);
    $current = 0;

    foreach ($rows as $label => $val) {
        $current++;
        $border = ($current === $total) ? '' : 'border-bottom:1px solid #E2E8F0;';
        $html .= "
            <tr>
                <td style='width:32%; padding:14px 18px; color:#0052CC; font-weight:700; background-color:#F8FAFC; border-right:1px solid #E2E8F0; {$border} font-family:\"Sora\",\"Segoe UI\",sans-serif; font-size:13.5px;'>
                    " . escapeHtml($label) . "
                </td>
                <td style='padding:14px 18px; color:#0F172A; background-color:#FFFFFF; {$border} font-family:\"Segoe UI\",sans-serif; font-size:14px;'>
                    " . displayValue($val) . "
                </td>
            </tr>
        ";
    }
    return $html;
}

$tableHTML = renderTableRows($detailRows);
$submittedAt = date('Y-m-d h:i A');

// ==========================================
// Build Admin HTML Email Template
// ==========================================
function buildAdminEmailTemplate($logoSrc, $tableHTML, $submittedAt, $name, $subject) {
    $safeName = escapeHtml($name);
    $safeSubject = escapeHtml($subject);

    return "
<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>New Contact Submission - Prestin IT Solutions</title>
</head>
<body style='margin:0; padding:0; background-color:#F1F5F9; color:#334155; font-family:\"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, sans-serif;'>
<table width='100%' cellpadding='0' cellspacing='0' role='presentation' style='background-color:#F1F5F9; padding:40px 16px;'>
<tr>
<td align='center'>
<table width='600' cellpadding='0' cellspacing='0' role='presentation' style='width:100%; max-width:600px; background-color:#FFFFFF; border-radius:20px; border:1px solid #E2E8F0; box-shadow:0 12px 30px rgba(0, 82, 204, 0.08); overflow:hidden;'>

    <!-- Header Banner -->
    <tr>
        <td style='background:linear-gradient(135deg, #050E1F 0%, #081B3B 100%); padding:36px 40px; text-align:left;'>
            <table width='100%' cellpadding='0' cellspacing='0' role='presentation'>
                <tr>
                    <td>
                        <img src='{$logoSrc}' alt='Prestin IT Solutions' height='42' style='display:block; height:42px; width:auto; margin-bottom:20px;'>
                        <div style='display:inline-block; background:rgba(0, 180, 216, 0.15); border:1px solid rgba(0, 180, 216, 0.4); color:#00B4D8; border-radius:999px; padding:5px 14px; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em;'>
                            &#10022; NEW INQUIRY SUBMISSION
                        </div>
                        <h1 style='margin:14px 0 6px 0; color:#FFFFFF; font-size:24px; font-weight:800; font-family:\"Sora\",\"Segoe UI\",sans-serif; letter-spacing:-0.02em;'>
                            {$safeSubject}
                        </h1>
                        <p style='margin:0; color:#94A3B8; font-size:14px;'>
                            Submitted by <strong style='color:#FFFFFF;'>{$safeName}</strong> on {$submittedAt} IST
                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

    <!-- Body Details -->
    <tr>
        <td style='padding:36px 40px; background-color:#FFFFFF;'>
            <h3 style='margin:0 0 16px 0; color:#0F172A; font-size:16px; font-weight:700; font-family:\"Sora\",\"Segoe UI\",sans-serif;'>
                Contact Form Details
            </h3>

            <!-- Details Table -->
            <table width='100%' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:separate; border-spacing:0; border:1px solid #E2E8F0; border-radius:14px; overflow:hidden;'>
                {$tableHTML}
            </table>

            <p style='margin:24px 0 0 0; color:#94A3B8; font-size:12.5px; line-height:1.5;'>
                This email was automatically generated from the Prestin IT Solutions website contact portal.
            </p>
        </td>
    </tr>

    <!-- Branded Footer -->
    <tr>
        <td style='background:linear-gradient(135deg, #0052CC 0%, #0099FF 100%); padding:24px 30px; text-align:center; color:#FFFFFF; font-size:13px; font-weight:600; font-family:\"Sora\",\"Segoe UI\",sans-serif;'>
            Prestin IT Solutions | Engineering Next-Gen Enterprise Software & Cloud Infrastructure
        </td>
    </tr>

</table>
</td>
</tr>
</table>
</body>
</html>
    ";
}

// ==========================================
// Build User Confirmation HTML Email Template
// ==========================================
function buildUserEmailTemplate($logoSrc, $tableHTML, $name, $service) {
    $safeName = escapeHtml($name);
    $safeService = escapeHtml($service);

    return "
<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>Thank You for Contacting Prestin IT Solutions</title>
</head>
<body style='margin:0; padding:0; background-color:#F8FAFC; color:#334155; font-family:\"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, sans-serif;'>
<table width='100%' cellpadding='0' cellspacing='0' role='presentation' style='background-color:#F8FAFC; padding:40px 16px;'>
<tr>
<td align='center'>
<table width='600' cellpadding='0' cellspacing='0' role='presentation' style='width:100%; max-width:600px; background-color:#FFFFFF; border-radius:20px; border:1px solid #E2E8F0; box-shadow:0 12px 35px rgba(0, 82, 204, 0.08); overflow:hidden;'>

    <!-- Header Banner -->
    <tr>
        <td style='background:linear-gradient(135deg, #050E1F 0%, #081B3B 100%); padding:40px 40px 32px 40px; text-align:left;'>
            <img src='{$logoSrc}' alt='Prestin IT Solutions' height='45' style='display:block; height:45px; width:auto; margin-bottom:24px;'>
            <div style='display:inline-block; background:rgba(16, 185, 129, 0.15); border:1px solid rgba(16, 185, 129, 0.4); color:#34D399; border-radius:999px; padding:5px 14px; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em;'>
                &#10004; INQUIRY RECEIVED
            </div>
            <h1 style='margin:16px 0 8px 0; color:#FFFFFF; font-size:26px; font-weight:800; font-family:\"Sora\",\"Segoe UI\",sans-serif; letter-spacing:-0.02em;'>
                We've Received Your Inquiry
            </h1>
            <p style='margin:0; color:#CBD5E1; font-size:15px; line-height:1.5;'>
                Thank you for choosing Prestin IT Solutions as your technology partner.
            </p>
        </td>
    </tr>

    <!-- Content Area -->
    <tr>
        <td style='padding:36px 40px; background-color:#FFFFFF;'>
            <p style='margin:0 0 16px 0; font-size:15px; color:#0F172A; font-weight:600;'>
                Dear {$safeName},
            </p>

            <p style='margin:0 0 20px 0; font-size:14.5px; color:#475569; line-height:1.65;'>
                Thank you for reaching out regarding <strong style='color:#0052CC;'>{$safeService}</strong>. We have successfully logged your submission, and a dedicated Technical Solutions Lead has been assigned to evaluate your requirements.
            </p>

            <div style='background-color:#EEF2FF; border-left:4px solid #0052CC; border-radius:8px; padding:16px 20px; margin-bottom:28px;'>
                <p style='margin:0; font-size:14px; color:#1E1B4B; font-weight:600; line-height:1.5;'>
                    &#9200; Commitment: Our technical team will review your inquiry and respond within <strong>24 business hours</strong>.
                </p>
            </div>

            <!-- Summary Table Header -->
            <h4 style='margin:0 0 12px 0; color:#0F172A; font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; font-family:\"Sora\",\"Segoe UI\",sans-serif;'>
                Summary of Submitted Information
            </h4>
            
            <table width='100%' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:separate; border-spacing:0; border:1px solid #E2E8F0; border-radius:12px; overflow:hidden; margin-bottom:28px;'>
                {$tableHTML}
            </table>

            <!-- Office Locations Block -->
            <h4 style='margin:0 0 12px 0; color:#0F172A; font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; font-family:\"Sora\",\"Segoe UI\",sans-serif;'>
                Our Offices & Contact Details
            </h4>

            <table width='100%' cellpadding='0' cellspacing='0' role='presentation' style='background-color:#F8FAFC; border:1px solid #E2E8F0; border-radius:12px; padding:16px 20px;'>
                <tr>
                    <td style='vertical-align:top; width:50%; padding-right:10px;'>
                        <p style='margin:0 0 4px 0; color:#0052CC; font-weight:700; font-size:13px;'>Hyderabad (Corporate HQ)</p>
                        <p style='margin:0; color:#64748B; font-size:12px; line-height:1.5;'>
                            Unit No.407, 4th Floor, Jain Sadguru Images Capital Park, Madhapur, Hyderabad-81
                        </p>
                    </td>
                    <td style='vertical-align:top; width:50%; padding-left:10px;'>
                        <p style='margin:0 0 4px 0; color:#10B981; font-weight:700; font-size:13px;'>Bangalore Office</p>
                        <p style='margin:0; color:#64748B; font-size:12px; line-height:1.5;'>
                            2nd Cross, near Ayyappa Temple, Kempapura, Hebbal, Bangalore-560024
                        </p>
                    </td>
                </tr>
                <tr>
                    <td colspan='2' style='padding-top:12px; border-top:1px dashed #CBD5E1; margin-top:10px;'>
                        <p style='margin:0; color:#475569; font-size:12.5px;'>
                            <strong>Phone:</strong> +91 91001 20409 &nbsp;|&nbsp; <strong>Email:</strong> info@prestinit.in
                        </p>
                    </td>
                </tr>
            </table>

            <p style='margin:28px 0 0 0; color:#475569; font-size:14px; line-height:1.5;'>
                Warm regards,<br>
                <strong style='color:#0F172A;'>Prestin IT Solutions Team</strong>
            </p>
        </td>
    </tr>

    <!-- Footer -->
    <tr>
        <td style='background-color:#050E1F; padding:24px 30px; text-align:center; color:#94A3B8; font-size:12px;'>
            &copy; " . date('Y') . " Prestin IT Solutions. All rights reserved.<br>
            <a href='https://prestinit.in' style='color:#00B4D8; text-decoration:none; font-weight:600;'>www.prestinit.in</a>
        </td>
    </tr>

</table>
</td>
</tr>
</table>
</body>
</html>
    ";
}

// Send Emails
try {
    $mail = new PHPMailer(true);
    
    // Check if SMTP credentials are set
    $useSMTP = !empty($email_username) && !empty($email_password);
    
    if ($useSMTP) {
        configureSMTP($mail, $email_host, $email_username, $email_password, $email_port, $email_encryption, $from_email, $from_name);
        $mail->SMTPKeepAlive = true; // Keep SMTP connection open for multiple sends
    } else {
        $mail->isMail(); // Fallback to standard PHP mail engine if password not configured
        $mail->setFrom($from_email, $from_name);
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
    }

    // ----------------------------------------------------
    // 1. Send Admin Email Notification to info@prestinit.in
    // ----------------------------------------------------
    $adminSent = false;
    $adminError = '';

    try {
        $adminLogoSrc = attachPrestinLogo($mail);
        $adminMailBody = buildAdminEmailTemplate($adminLogoSrc, $tableHTML, $submittedAt, $name, $subject);
        
        $mail->addAddress($admin_email, 'Prestin IT Admin');
        $mail->addReplyTo($email, $name);
        $mail->Subject = "New Contact Inquiry: {$subject} - {$name}";
        $mail->Body    = $adminMailBody;
        $mail->AltBody = "New Inquiry received from {$name} ({$email}):\n\nSubject: {$subject}\nService: {$service}\nPhone: {$phone}\nMessage:\n{$message}";

        $mail->send();
        $adminSent = true;
    } catch (Exception $eAdmin) {
        $adminError = $eAdmin->getMessage();
        // Native mail fallback for admin email
        $headers  = "MIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\n";
        $headers .= "From: {$from_name} <{$from_email}>\r\nReply-To: {$name} <{$email}>\r\n";
        $adminSent = @mail($admin_email, "New Contact Inquiry: {$subject} - {$name}", $adminMailBody, $headers);
    }

    // ----------------------------------------------------
    // 2. Send User Auto-Confirmation Email to Submitter
    // ----------------------------------------------------
    $userSent = false;
    $userError = '';

    try {
        $mail->clearAllRecipients();
        $mail->clearReplyTos();
        $mail->clearAttachments();

        $userLogoSrc = attachPrestinLogo($mail);
        $userMailBody = buildUserEmailTemplate($userLogoSrc, $tableHTML, $name, $service);

        $mail->addAddress($email, $name);
        $mail->addReplyTo($admin_email, $from_name);
        $mail->Subject = "Thank you for contacting Prestin IT Solutions";
        $mail->Body    = $userMailBody;
        $mail->AltBody = "Dear {$name},\n\nThank you for reaching out to Prestin IT Solutions regarding {$service}. We have received your inquiry and our technical lead will contact you within 24 business hours.\n\nPrestin IT Solutions Team\nhttps://prestinit.in";

        $mail->send();
        $userSent = true;
    } catch (Exception $eUser) {
        $userError = $eUser->getMessage();
        // Native mail fallback for user confirmation email
        $headers  = "MIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\n";
        $headers .= "From: {$from_name} <{$from_email}>\r\nReply-To: {$from_name} <{$admin_email}>\r\n";
        $userSent = @mail($email, "Thank you for contacting Prestin IT Solutions", $userMailBody, $headers);
    }

    if ($useSMTP) {
        $mail->SmtpClose();
    }

    // Success response
    http_response_code(200);
    echo json_encode([
        "status" => "success",
        "message" => "Thank you! Your inquiry has been sent successfully. A confirmation email has been sent to " . htmlspecialchars($email) . ".",
        "admin_delivered" => $adminSent,
        "user_confirmation_delivered" => $userSent,
        "debug_user_error" => $userError
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Message could not be sent. Mailer Error: " . $e->getMessage()
    ]);
}
