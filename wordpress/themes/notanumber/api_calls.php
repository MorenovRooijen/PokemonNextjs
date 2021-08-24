<?php

define('DATABASE_ENDPOINT', 'notanumber/v1/nan');
/*--------------------------------------------------------------
Get something from api
--------------------------------------------------------------*/
function nan_get_info($request) {
    $result = [
        'test' => 'some text',
    ];

    return $result;
}
add_action('rest_api_init', function () {
    register_rest_route(DATABASE_ENDPOINT, 'info', [
        'methods' => 'GET',
        'callback' => 'nan_get_info',
        'permission_callback' => false,
    ]);
});
