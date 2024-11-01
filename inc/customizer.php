<?php

function wpgb_customize_register( $wp_customize ) {

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-title a',
				'render_callback' => 'wpgb_customize_partial_blogname',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector'        => '.site-description',
				'render_callback' => 'wpgb_customize_partial_blogdescription',
			)
		);
	}
}
add_action( 'customize_register', 'wpgb_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function wp_plug_wpgb_customize_preview_js() {
	wp_enqueue_script( 'wpgbcustomizer', plugin_dir_path( __FILE__ ) . '/js/customizer.js', array( 'customize-preview' ), '', true );
}
add_action( 'customize_preview_init', 'wp_plug_wpgb_customize_preview_js' );

/**
 * Site customizer Panel
 */
function wpgb_customize_options( $wp_customize ) {

	/**
	 * Site Main customizer Panel
	 */
	$wp_customize->add_panel( 'wpmindsfr_panel_id', array(
		 'priority'       => 10,
		 'capability'     => 'edit_theme_options',
		 'theme_supports' => '',
		 'title'          => __('WPMINDS Framework - Blocks Options', ''),
		 'description'    => __('Several settings pertaining my theme', ''),
	) );
	$wp_customize->add_section( 'wpmindsfr_button_theme_options', array(
		'title' => __( 'Block Colors Settings' ),
		'panel' => '', 
		'priority' => 220,
		'capability' => 'edit_theme_options',
		'theme_supports' => '', 
		'description'    =>  __('Set Buttons colors for sitewide add here.', ''),
    	'panel'  => 'wpmindsfr_panel_id',
	));

	/**
	 * Field group for background of button - customizer Panel
	 */
	$wp_customize->add_setting( 'button_color_wpmindsfr', array('default' => '#0073e5','sanitize_callback' => 'sanitize_text_field'));
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'button_color_wpmindsfr', array( 'label' => 'Primary Button Background Color','section' => 'wpmindsfr_button_theme_options','settings' => 'button_color_wpmindsfr')));
	/**
	 * Field group for color of button - customizer Panel
	 */
	$wp_customize->add_setting( 'button_text_color_wpmindsfr', array('default' => '#fff','sanitize_callback' => 'sanitize_text_field'));
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'button_text_color_wpmindsfr', array( 'label' => 'Primary Button text Color','section' => 'wpmindsfr_button_theme_options','settings' => 'button_text_color_wpmindsfr')));
    /**
	 * Field group for background of button - customizer Panel
	 */
	$wp_customize->add_setting( 'secondary_button_color_wpmindsfr', array('default' => '#000','sanitize_callback' => 'sanitize_text_field'));
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'secondary_button_color_wpmindsfr', array( 'label' => 'Secondary Button Background Color','section' => 'wpmindsfr_button_theme_options','settings' => 'secondary_button_color_wpmindsfr')));
	/**
	 * Field group for color of button - customizer Panel
	 */
	$wp_customize->add_setting( 'secondary_button_text_color_wpmindsfr', array('default' => '#fff','sanitize_callback' => 'sanitize_text_field'));
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'secondary_button_text_color_wpmindsfr', array( 'label' => 'Secondary Button text Color','section' => 'wpmindsfr_button_theme_options','settings' => 'secondary_button_text_color_wpmindsfr')));
    /**
	 * Field group for background of button - customizer Panel
	 */
	$wp_customize->add_setting( 'outline_button_color_wpmindsfr', array('default' => '#0073e5','sanitize_callback' => 'sanitize_text_field'));
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'outline_button_color_wpmindsfr', array( 'label' => 'Outline Button Color','section' => 'wpmindsfr_button_theme_options','settings' => 'outline_button_color_wpmindsfr')));
	/**
	 * Field group for color of Background - customizer Panel
	 */
	$wp_customize->add_setting( 'bg_text_color_wpmindsfr', array('default' => '#f2f2f2','sanitize_callback' => 'sanitize_text_field'));
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bg_text_color_wpmindsfr', array( 'label' => 'Sections background Color','section' => 'wpmindsfr_button_theme_options','settings' => 'bg_text_color_wpmindsfr')));
}

add_action( 'customize_register', 'wpgb_customize_options' );

function wpgb_sanitize_select_field($input){
	$valid = array('default','Sidebar_Content_wpmindsfr','Content_Sidebar_wpmindsfr');
	if(in_array($input, $valid, true)){
		return $input;
	}
	return 'default';
}

add_action( 'wp_head', 'genesis_wpgb_color_fonts' );
function genesis_wpgb_color_fonts() {
$button_color_wpmindsfr = get_theme_mod( 'button_color_wpmindsfr', '#0073e5' );
$button_text_color_wpmindsfr = get_theme_mod( 'button_text_color_wpmindsfr', '#fff' );
$bg_text_color_wpmindsfr_wpmindsfr = get_theme_mod( 'bg_text_color_wpmindsfr', '#f2f2f2' );

$outline_button_color_wpmindsfr = get_theme_mod( 'outline_button_color_wpmindsfr', '#0073e5' );
$secondary_button_text_color_wpmindsfr = get_theme_mod( 'secondary_button_text_color_wpmindsfr', '#fff' );
$secondary_button_color_wpmindsfr = get_theme_mod( 'secondary_button_color_wpmindsfr', '#000000' );
?>
<style>
		body:not(.wp-admin) .full-bg-color{
			background-color: <?php echo esc_html($bg_text_color_wpmindsfr_wpmindsfr) ?> ;
		}
		.genesis-nav-menu .Button a,
		.Hero-outter .wp-block-button__link:not(.customs-b-color, .customs-b-color-3){
			background-color: <?php echo esc_html($button_color_wpmindsfr) ?> !important;
			color: <?php echo esc_html($button_text_color_wpmindsfr) ?> !important;
		}
		body .Hero-outter .wpwpmindsfr-button-secondary .wp-block-button__link:not(.customs-b-color, .customs-b-color-3),
		body .Hero-outter .wpwpmindsfr-button-secondary.wp-block-button__link:not(.customs-b-color, .customs-b-color-3),
		.wpwpmindsfr-button-secondary{
			background-color: <?php echo esc_html($secondary_button_color_wpmindsfr) ?> !important;
			color: <?php echo esc_html($secondary_button_text_color_wpmindsfr) ?> !important;
		}
		body .Hero-outter .wpwpmindsfr-button-outline .wp-block-button__link:not(.customs-b-color, .customs-b-color-3),
		body .Hero-outter .wpwpmindsfr-button-outline.wp-block-button__link:not(.customs-b-color, .customs-b-color-3),
		.wpwpmindsfr-button-outline{
			background-color: transparent !important;
			color: <?php echo esc_html($outline_button_color_wpmindsfr) ?> !important;
			border:2px solid  <?php echo esc_html($outline_button_color_wpmindsfr) ?> !important;
		}
		.is-style-outline>.wp-block-button__link:not(.has-background), 
		.wp-block-button__link.is-style-outline:not(.has-background){
			background-color: transparent !important;
			color: <?php echo esc_html($outline_button_color_wpmindsfr) ?> !important;
		}
	</style>
	<?php 
}