<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

$mail = new PHPMailer(true);

try {
    // SMTP podešavanja
    $mail->isSMTP();
    $mail->Host       = 'server355.web-hosting.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'booking@adriaticvoyage.com';
    $mail->Password   = '^rix5trc+lpo';  // promeni ovo ako si ga resetovao
    $mail->SMTPSecure = 'ssl';           // ili 'tls' ako ne koristiš port 465
    $mail->Port       = 465;

    // Od i za koga
    $mail->setFrom('booking@adriaticvoyage.com', 'Adriatic Booking');
    $mail->addAddress('ivanovicaleksa96@gmail.com');

    // Uhvati podatke iz forme
    $fields = ['name', 'email', 'phone', 'date', 'destination', 'duration', 'passengers', 'message'];
    $body = "New Booking Request:\n\n";
    foreach ($fields as $field) {
        $val = htmlspecialchars($_POST[$field] ?? '');
        $body .= ucfirst($field) . ": " . $val . "\n";
    }

    // Podešavanje emaila
    $mail->Subject = 'New Booking Request';
    $mail->Body    = $body;

    $mail->send();
    echo "OK";
} catch (Exception $e) {
    echo "Greška pri slanju: " . $mail->ErrorInfo;
}
?>
