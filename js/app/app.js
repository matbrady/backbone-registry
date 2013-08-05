// Registry Application

define('app', ['$.bootstrap', 'login/view', 'login/model'], function($, LoginView, LoginModel) {

	var loginView = new LoginView({
		model: new LoginModel()
	});

	return;

});