<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $date = $_POST['date'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $passengers = $_POST['passengers'];
    $destination = $_POST['destination'];
    $duration = $_POST['duration'];
    $message = $_POST['message'];

    $to = "ivan.begic2905@gmail.com";
    $subject = "Nova rezervacija broda";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Nova poruka:\n\n";
    $body .= "Datum: $date\n";
    $body .= "Ime: $name\n";
    $body .= "Email: $email\n";
    $body .= "Telefon: $phone\n";
    $body .= "Broj osoba: $passengers\n";
    $body .= "Destinacija: $destination\n";
    $body .= "Trajanje: $duration\n";
    $body .= "Poruka:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "OK";
    } else {
        echo "Greška pri slanju.";
    }
}
?>
