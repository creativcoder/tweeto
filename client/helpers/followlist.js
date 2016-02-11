Template.follow_list.helpers({
	users : function() {
		return Meteor.users.find({_id:{$not:Meteor.userId()}}).fetch();
	}
})