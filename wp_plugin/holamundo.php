<?php

/*
Plugin Name: holamundo
Plugin URI: mike.pooh
Description: convierte hola mundo en <h1>Hola Mundo</h1>
Version: 1.0
Author: Miguel Regnault
Author URI: mike.pooh
License: GPL
*/

// Add Shortcode
function holamundo_shortcode( $atts ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'texto' => '',
		),
		$atts
	);

	return $atts['texto'] == '' ? '<h1>Hola mundo</h1>' : "<h1>{$atts['texto']}</h1>";

}
add_shortcode( 'holamundo', 'holamundo_shortcode' );