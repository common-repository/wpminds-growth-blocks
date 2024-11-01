<?php
/**
 * Plugin Name:       WPMinds Growth Blocks
 * Description:       WPMinds Growth Blocks is a collection of page building blocks for the Gutenberg block editor.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           2.2.1
 * Author:            WPMinds 
 * Author URI:    	  https://wpminds.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wpminds-growth-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
function create_block_wpgb_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_wpgb_block_init' );

//require_once plugin_dir_path( __FILE__ ) . 'src/plan-section/plan-section.php';

function wpgb_enqueue_script_atmaic() {
	wp_enqueue_script( 'block-enqueue', plugins_url( 'inc/block-jq.js', __FILE__ ), array('jquery') );
	wp_enqueue_style( 'wpgb-carousel-css', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1.3/assets/owl.carousel.min.css', array());
	wp_enqueue_script( 'wpgb-carousel-js', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', array());
}
add_action( 'wp_enqueue_scripts', 'wpgb_enqueue_script_atmaic' );

/**
* Customizer additions.
*/
require_once plugin_dir_path( __FILE__ ) . 'inc/customizer.php';

// Hook for plugin activation

add_action('admin_notices', 'wpgb_plugin_display_activation_notice');

function wpgb_plugin_display_activation_notice() {
    echo '<div class="wpbg-notice notice-info notice is-dismissible" style="background-color:#fff;display: flex;align-items: center;gap: 20px;">';
    echo '<img width="100" src="'. plugins_url( 'assets/feedback-loop.gif', __FILE__ ) .'">';
    echo '<div class="wpbg-notice-content">';
    echo '<p>' . esc_html__('Hello! It looks like you’ve built this website using WPMinds Growth Blocks — thank you so much!', 'wpminds-growth-blocks') . '</p>';
    echo '<p>' . esc_html__('If you could take a moment to leave us a 5-star rating on WordPress, we’d greatly appreciate it. Your support not only motivates us but also helps other users make informed choices when selecting WPMinds Growth Blocks. Thank you!', 'wpminds-growth-blocks') . '</p>';
    echo '<p><a href="https://wordpress.org/plugins/wpminds-growth-blocks/#reviews" class="button button-primary" target="_blank">Reviews Us</a></p>';
    echo '</div>';
    echo '</div>';
}