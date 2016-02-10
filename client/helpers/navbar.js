Template.navbar.events({
	'click #nav-logout': () => {
	Meteor.logout();
	} 
})