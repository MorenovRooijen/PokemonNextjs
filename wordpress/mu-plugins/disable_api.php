<?php
/**
 * @version 0.0.1
 */
/*
Plugin Name: NaN API Disabler
Description: This is a plugin to disable the Wordpress API. This prevents others to view post, users etc. via the API of wordpress.
Author: Not a Number
Version: 0.0.1
Author URI: http://ma.tt/
*/
function rest_api_require_login($result) {
    if ('1' == get_option('nan_require_login')) {
        // If a previous authentication check was applied,
        // pass that result along without modification.
        if (true === $result || is_wp_error($result)) {
            return $result;
        }

        // No authentication has been performed yet.
        // Return an error if user is not logged in.
        if (!is_user_logged_in()) {
            return new WP_Error(
                'rest_not_logged_in',
                __('You are not currently logged in.'),
                ['status' => 401]
            );
        }

        // Our custom authentication check should have no effect
        // on logged-in requests
        return $result;
    }
}
/*
 * Remove user list endpoint from rest api
 */
 function nan_remove_users($aryEndpoints) {
     if ('1' == get_option('nan_users')) {
         if (isset($aryEndpoints['/wp/v2/users'])) {
             unset($aryEndpoints['/wp/v2/users']);
         }
         if (isset($aryEndpoints['/wp/v2/users/(?P<id>[\d]+)'])) {
             unset($aryEndpoints['/wp/v2/users/(?P<id>[\d]+)']);
         }
     }

     return $aryEndpoints;
 }

function nan_disable_xmlrpc() {
    if ('1' == get_option('nan_xmlrpc')) {
        return false;
    }

    return true;
}
function nan_disable_api() {
    if ('1' == get_option('nan_disable')) {
        exit('REST disabled by plugin');
    }
}

add_filter('rest_authentication_errors', 'rest_api_require_login');
add_action('rest_api_init', 'nan_disable_api', 0);
add_filter('xmlrpc_enabled', 'nan_disable_xmlrpc');
add_filter('rest_endpoints', 'nan_remove_users');

function nan_register_settings() {
    add_option('nan_disable', '0');
    add_option('nan_require_login', '1');
    add_option('nan_users', '1');
    add_option('nan_xmlrpc', '1');
    register_setting('nan_options_group', 'nan_disable');
    register_setting('nan_options_group', 'nan_xmlrpc');
    register_setting('nan_options_group', 'nan_users');
    register_setting('nan_options_group', 'nan_require_login');
}
 add_action('admin_init', 'nan_register_settings');

 function nan_register_options_page() {
     add_options_page('Not a Number API Disabler', 'NaN API Disabler', 'manage_options', 'nan', 'nan_options_page');
 }
  add_action('admin_menu', 'nan_register_options_page');

function nan_options_page() {
    ?>
<div>

    <h2>Not a Number API Disabler</h2>
    <form method="post" action="options.php">
        <?php settings_fields('nan_options_group'); ?>
        <table class="form-table">
            <tr valign="top">
                <th scope="row"><label for="nan_disable">Disable Wordpress API completely</label></th>
                <td><input type="checkbox" id="nan_disable" name="nan_disable" value="1" <?php echo '1' == get_option('nan_disable') ? ' checked="checked"' : ''; ?>
                    />
                </td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="nan_require_login">Require login for API usage</label></th>
                <td><input type="checkbox" id="nan_require_login" name="nan_require_login" value="1" <?php echo '1' == get_option('nan_require_login') ? ' checked="checked"' : ''; ?>
                    />

                </td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="nan_users">Disable /users path in API</label></th>
                <td><input type="checkbox" id="nan_users" name="nan_users" value="1" <?php echo '1' == get_option('nan_users') ? ' checked="checked"' : ''; ?>
                    />

                </td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="nan_xmlrpc">Disable XML-RPC</label></th>
                <td><input type="checkbox" id="nan_xmlrpc" name="nan_xmlrpc" value="1" <?php echo '1' == get_option('nan_xmlrpc') ? ' checked="checked"' : ''; ?>
                    />

                </td>
            </tr>
        </table>
        <?php submit_button(); ?>
    </form>
</div>
<?php
}
