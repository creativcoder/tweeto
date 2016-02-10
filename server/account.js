Meteor.methods({
	logoutUser: function () {
		Meteor.logout();
	}
});