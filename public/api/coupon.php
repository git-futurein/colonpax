<?php

header('Access-Control-Allow-Origin: *');

$campaignId = $_GET['campaignId'];
$couponCode = $_GET['couponCode'];
$product1_id = $_GET['product1_id'];

if (
    isset($campaignId) &&
    isset($couponCode) &&
    isset($product1_id)
) {
    include('./partial/_config.php');

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://api.konnektive.com/order/coupon/?loginId=' . $loginId . '&password=' . $loginKey . '&campaignId=' . $campaignId . '&couponCode=' . $couponCode . '&product1_id=' . $product1_id,
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
}
