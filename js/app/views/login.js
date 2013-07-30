// Login View

define('views/login', ['jquery', 'backbone', 'underscore'], function($, Backbone, underscore) {

	var LoginView = Backbone.View.extend({

		el: '#login',

		events: {
			'click #submit': 'submit',
			'keyup input': 'enableSubmitBtn',
			'blur input': 'validateOffFocus'
		},

		initialize: function() {
			// Cache Components in the View
			this.$email = this.$('#email');
			this.$password = this.$('#password');
			this.$submit = this.$('#submit');
		},


		// Validate the inputs for values
		enableSubmitBtn: function( evt ) {
			// console.log(evt.which);
			if ( !!this.$email.val().length && !!this.$password.val().length ) {
				this.$submit.removeAttr('disabled');
			} else {
				this.$submit.attr('disabled', 'disabled');
			}
		},


		//
		validateOffFocus: function( evt ) {
			switch ( evt.target.id ) {
				case 'email':
					var isValid = this.validateEmail( this.$email.val() );
					console.log(isValid);
				break;
				case 'password':
				break;
			}
		},


		// Validate Email Address
		validateEmail: function( email ) { 
		    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return re.test(email);
		},


		// Submit the Form
		submit: function( evt ) {
			evt.preventDefault();
			console.log('submitting the form');
		}

	});

	return LoginView;

});