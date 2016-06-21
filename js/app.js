'use strict'

var skynet = skynet || {};

skynet.app = (function($){

	console.log('c[_] skynet loaded');

	var terminator = 't-1000';

	function init() {
		bindEvents();
	}

	function bindEvents() {
		$('#btn-play').on('click', playSong);
	}

	function playSong() {
		alert('Guns n Roses')
	}

	function objective() {
		console.log('Find John Connah!');
	}

	return {
		init: init,
		terminator: terminator,
		objective: objective
	}

})(jQuery);

skynet.app.init();