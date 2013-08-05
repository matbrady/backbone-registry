// Login View

define('login/view', ['jquery', 'backbone', 'underscore'], function($, Backbone, _) {

	// Errors
	// no email
	// no password
	// email not valid

	var LoginView = Backbone.View.extend({

		el: '#login',

		events: {
			'click #submit': 'submit',
			'keyup input#email': 'validateEmail',
			'keyup input#password': 'enableSubmitBtn',
			// 'blur input': 'validateOffFocus'
		},

		initialize: function() {
			// Cache Components in the View
			this.$email = this.$('#email');
			this.$password = this.$('#password');
			this.$submit = this.$('#submit');

			// Listeners
			this.listenTo( this.model, 'change', this.showValidation);
		},

		// Validate Inputs
		validateEmail: _.debounce(function( evt ) {
			this.model.validateEmail( this.$email.val() );
		}, 200),

		showValidation: function() {
			console.log('updating view with validation');

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

		// Submit the Form
		submit: function( evt ) {
			evt.preventDefault();
			console.log('submitting the form');
		}

	});

	return LoginView;

});