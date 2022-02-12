<?php 
/**
 * Plugin Name:       Easy Access
 * Plugin URI:        localhost/wordpress-5.8.2/wordpress/wp-content/plugins/plugin_easy_access_vb
 * Description:       Plugin that offers accessibility features for wordpress websites.
 * Version:           1.0.1
 * Author:            Vanessa Buechner
 * Author URI:        https://author.example.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       plugin_easy_access_vb
 * Domain Path:       /languages
 */
/*
Easy Access is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.
 
Easy Access is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
 
You should have received a copy of the GNU General Public License
along with Easy Access. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

if ( !defined('ABSPATH') ) { 
    die;
}
// ---------------------------HEAD--------------------------------------------------------

function add_plugin_links() {   
    wp_enqueue_style( 'bootstrap-css', '//cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', array(), '5.1.3' ); 
    wp_enqueue_style( 'plugin_easy_access_vb', plugin_dir_url( __FILE__ ) . 'css/plugin_easy_access_vb.css', array(), '1.0.0' );
  
    wp_enqueue_script( 'bootstrap-js', '//cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', array('jquery-cdn'), '5.1.3');
    wp_enqueue_script( 'plugin_easy_access_vb', plugin_dir_url( __FILE__ ) . 'js/plugin_easy_access_vb.js', array('jquery'), '1.0.0' );
}
add_action('wp_enqueue_scripts', 'add_plugin_links');


// ---------------------------HEAD--------------------------------------------------------

// ---------------------------BODY--------------------------------------------------------

function plugin_content() {

    ?>

        <button class="btn_open_menu" id="btn_open_menu">
            <svg class="icon_accessibility" id="icon_accessibility" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><title>accessibility</title><path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0Zm-.39,74.18L52.1,98.91a4.94,4.94,0,0,1-2.58,2.83A5,5,0,0,1,42.7,95.5l6.24-17.28a26.3,26.3,0,0,0,1.17-4,40.64,40.64,0,0,0,.54-4.18c.24-2.53.41-5.27.54-7.9s.22-5.18.29-7.29c.09-2.63-.62-2.8-2.73-3.3l-.44-.1-18-3.39A5,5,0,0,1,27.08,46a5,5,0,0,1,5.05-7.74l19.34,3.63c.77.07,1.52.16,2.31.25a57.64,57.64,0,0,0,7.18.53A81.13,81.13,0,0,0,69.9,42c.9-.1,1.75-.21,2.6-.29l18.25-3.42A5,5,0,0,1,94.5,39a5,5,0,0,1,1.3,7,5,5,0,0,1-3.21,2.09L75.15,51.37c-.58.13-1.1.22-1.56.29-1.82.31-2.72.47-2.61,3.06.08,1.89.31,4.15.61,6.51.35,2.77.81,5.71,1.29,8.4.31,1.77.6,3.19,1,4.55s.79,2.75,1.39,4.42l6.11,16.9a5,5,0,0,1-6.82,6.24,4.94,4.94,0,0,1-2.58-2.83L63,74.23,62,72.4l-1,1.78Zm.39-53.52a8.83,8.83,0,1,1-6.24,2.59,8.79,8.79,0,0,1,6.24-2.59Zm36.35,4.43a51.42,51.42,0,1,0,15,36.35,51.27,51.27,0,0,0-15-36.35Z"/></svg>
        </button>

        <div class="menu" id="menu">
            <div class="menu-content" id="menu-content">
                <span class="close-menu" id="close-menu">&times;</span>
                <center><h3>Accessibility options</h3></center>
                <hr>
            
                <!-- input: buttons -->
                    <div class="container">
                        <!-- <div class="row"><h4>Textsize:</h4></div> -->
                        <div class="row align-items-center">
                            <div class="col-sm-3"><h4>Textsize:</h4></div>
                            <div class="col-sm-3 text-center"><button type="button" class="btn btn-custom btn-small-text mt-2">Small text</button></div>
                            <div class="col-sm-3 text-center"><button type="button" class="btn btn-custom btn-medium-text mt-2">Medium text</button></div>
                            <div class="col-sm-3 text-center"><button type="button" class="btn btn-custom btn-large-text mt-2">Large text</button></div>
                        </div>
                    </div>
                <!---------------->

                 <!-- input: large cursor -->
                 <div class="container">
                        <!-- <div class="row"><h4>Textsize:</h4></div> -->
                        <div class="row align-items-center">
                            <div class="col-sm-3"><h4>Cursor:</h4></div>
                            <div class="col-sm-3 text-center">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                </div>
                            </div>
                        </div>
                    </div>
        
                <!---------------->

                <!-- input: high contrast -->
                    <div class="container">
                        <!-- <div class="row"><h4>Textsize:</h4></div> -->
                        <div class="row align-items-center">
                            <div class="col-sm-3"><h4>Contrast:</h4></div>
                            <div class="col-sm-3 text-center">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                </div>
                            </div>
                        </div>
                    </div>
        
                <!---------------->
            
            </div>
        </div>

    <?php

}

add_action('wp_body_open', 'plugin_content');


// ---------------------------BODY--------------------------------------------------------

?>