<?php

define('DATABASE_ENDPOINT', 'notanumber/v1/nan');

/*--------------------------------------------------------------
EXAMPLE OF GET FUNCTION WITH PARAMETER IN URL
--------------------------------------------------------------*/
function mijngoedhuis_get_my_dependencies($request) {
    $house_id = $request->get_param('house_id');
    $data = getStepDependencies($house_id);

    return [
        $data,
    ];
}
add_action('rest_api_init', function () {
    register_rest_route(DATABASE_ENDPOINT, '/steps/dependencies/(?P<house_id>-?\d+)', [
        'methods' => 'GET',
        'callback' => 'mijngoedhuis_get_my_dependencies',
        // 'permission_callback' => 'mijngoedhuis_is_logged_in',
    ]);
});

/*--------------------------------------------------------------
EXAMPLE OF POST FUNCTION
--------------------------------------------------------------*/
function mijngoedhuis_get_active_brochure($request) {
    $values = $request->get_params();
    $brochure = $values['id'] ?? 0;
    $user = get_current_user_id();
    $active_item = getActiveConfigurationsItem($user);
    $active_data = [];
    if (count($active_item) > 0) {
        $active_data = mijngoedhuis_get_single_configuration_info($active_item[0]);
    }

    return
        $active_data
    ;
}
add_action('rest_api_init', function () {
    register_rest_route(DATABASE_ENDPOINT, '/configuration/get_active_brochure/', [
        'methods' => 'POST',
        'callback' => 'mijngoedhuis_get_active_brochure',
        'permission_callback' => 'mijngoedhuis_is_logged_in',
    ]);
});

/*--------------------------------------------------------------
Get something from api
--------------------------------------------------------------*/
function nan_get_info($request) {
    $values = $request->get_params();
    $brochure = $values['id'];

    return ['title' => 'THIS IS SOME INFO'];
}
add_action('rest_api_init', function () {
    register_rest_route(DATABASE_ENDPOINT, 'info', [
        'methods' => 'GET',
        'callback' => 'nan_get_info',
        // 'permission_callback' => 'mijngoedhuis_is_logged_in',
    ]);
});
