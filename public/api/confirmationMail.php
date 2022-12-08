<?php
header('Access-Control-Allow-Origin: *');

$to = $_POST['to'];
$subject = $_POST['subject'];
$mailCode = $_POST['code'];

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

mail($to, $subject, $mailCode, $headers);
