// Login Model

define('login/model', ['backbone'], function(Backbone){

	var LoginModel = Backbone.Model.extend({
		defaults: {
			email: '',
			errorMsg: '',
			password: ''
		},

		// Validate Email Address
		validateEmail: function( email ) {
		    if ( this.isValidEmail(email) ) {
		    	this.set('email', email );
		    }
		},

		isValidEmail: function( email ) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return re.test(email);
		}

	});

	return LoginModel;

});