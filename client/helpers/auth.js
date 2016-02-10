Template.userManagement.events({
	'click #signup': function() {
		var user = {
      username: $('#signup-username').val(),
      password: $('#signup-password').val(),
      profile: {
        fullname: $('#signup-fullname').val()
      }
    };
    Accounts.createUser(user, function (err) {
    	if(err) alert(err);
    });

	},
  'click #login':function() {
    var username = $('#login-username').val();
    var password = $('#login-password').val();
    Meteor.loginWithPassword(username, password, function(error) {
      if(error) alert(error);
    });
  },
  'click #logout': function() {  
  Meteor.logout();
}
});

Template.registerHelper('logoutUser', () => {
    Meteor.logout();
})