<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'nicollzc@srv.coastserver.com.au';
    $email_subject = "Form Submission";
    $email_body = "Name: $name\n".
                    "Email: $email\n".
                    "Message: \n$message\n";
    
    $to = "zach.nicoll55@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";
    mail($to, $email_subject, $email_body, $headers);
    header("Location: ./index.html");
?>