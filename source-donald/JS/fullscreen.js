$(function( ) {

	var cursordelay;
/*	
	function showCursor( ) {
		clearTimeout( cursordelay );
		$( 'body' ).css( 'cursor', 'default' );
	}

	function hideCursor( ) {
		$( 'body' ).css( 'cursor', 'none' );
	}
	
	function moveCursor( ) {
		showCursor( );
		cursordelay = setTimeout( hideCursor, 500 );
	}

	function toggleCursor( is_fullscreen ) {
		showCursor( );
		
		if ( is_fullscreen ) {
			$( document ).bind( 'mousemove', moveCursor );
		} else {
			$( document ).unbind( 'mousemove', moveCursor )
		}
	}
*/	
	
	var toggle_elem = $( '#fullscreen-hint' )
	toggle_elem.click( function( ) {
		$( 'body' ).fullscreen( );

		return false;
	} );
	
/*
	$( document ).bind( 'fscreenchange', function( ) {
		var is_fullscreen = $.fullscreen.isFullScreen( );
	
		toggleCursor( is_fullscreen );
		toggle_elem.toggle( !is_fullscreen );
		
		if ( document.webkitRequestFullScreen )		
			document.webkitRequestFullScreen( Element.ALLOW_KEYBOARD_INPUT );
	} );
*/
} );