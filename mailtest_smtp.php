<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'server355.web-hosting.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'booking@adriaticvoyage.com';
    $mail->Password = '^rix5trc+lpo';
    $mail->SMTPSecure = 'ssl'; // Probaj i 'tls' ako ne radi
    $mail->Port = 465;

    $mail->setFrom('booking@adriaticvoyage.com', 'Booking Test');
    $mail->addAddress('ivanovicaleksa96@gmail.com'); // Možeš staviti i svoj Gmail

    $mail->Subject = 'SMTP Test';
    $mail->Body    = 'Ovo je testna poruka poslata pomoću PHPMailer + SMTP.';

    if ($mail->send()) {
        echo "✅ Email uspešno poslat!";
    } else {
        echo "❌ Mailer error: " . $mail->ErrorInfo;
    }
} catch (Exception $e) {
    echo "❌ Exception: " . $e->getMessage();
}
?>
