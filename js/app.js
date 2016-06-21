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

	function scientists() {

		var data = [];
		var viewModel = {
			people: ko.observableArray(data)
		};

		ko.applyBindings(viewModel);

		$.ajax({
	    url: "http://reqres.in/api/users",
	    type: "GET",
	    success: function(response){
	    	console.log(response.data);
	    	// update view models
	    	viewModel.people(response.data);
	    }
		});

	}



	return {
		init: init,
		terminator: terminator,
		objective: objective,
		scientists: scientists
	}

})(jQuery);

skynet.app.init();

skynet.app.scientists();
