// Login View

define('views/login', ['jquery', 'backbone', 'underscore'], function($, Backbone, underscore) {

	var LoginView = Backbone.View.extend({

		el: '#login',

		events: {
			'click #submit': 'submit',
			'keyup input': 'enableSubmitBtn'
		},

		initialize: function() {
			// Cache Components in the View
			this.$email = this.$('#email');
			this.$password = this.$('#password');
			this.$submit = this.$('#submit');
		},


		enableSubmitBtn: function( evt ) {
			// console.log(evt.which);
			if ( !!this.$email.val().length && !!this.$password.val().length ) {
				this.$submit.removeAttr('disabled');
			} else {
				this.$submit.attr('disabled', 'disabled');
			}
		},


		// Submit the Form
		submit: function( evt ) {
			evt.preventDefault();
			console.log('submitting the form');
		}

	});

	return LoginView;

});