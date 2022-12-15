<?php

header('Access-Control-Allow-Origin: *');

include('./partial/_config.php');

$data = $_GET;
$url = 'https://api.konnektive.com/campaign/query/?loginId=' . $loginId . '&password=' . $loginKey;

foreach ($data as $key => $value) {
    $url = $url . '&' . $key . '=' . $value;
}

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
