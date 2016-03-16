Template.userManagement.events({
	'click #signup': function() {
		var user = {
      username: $('#signup-username').val(),
      password: $('#signup-password').val(),
      profile: {
        fullname: $('#signup-fullname').val(),
        followers: [],
        following: [],
      }
    };
    Accounts.createUser(user, function (err) {
    	if(err) swal("Oops! Something's wrong");
    });

	},
  'click #login':function() {
    var username = $('#login-username').val();
    var password = $('#login-password').val();
    Meteor.loginWithPassword(username, password, function(error) {
      if(error) swal("Looks like you are new here! Signup Please");
    });
  },
  'click #logout': function() {  
  Meteor.logout();
}
});

Template.registerHelper('logoutUser', () => {
    Meteor.logout();
})