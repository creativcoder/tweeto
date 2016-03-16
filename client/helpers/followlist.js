Template.follow_list.helpers({
	users : function() {
		return Meteor.users.find({_id:{$not:Meteor.userId()}}).fetch();
	}
});

Template.user.events({
	'click #follow-btn': function() {
		let name = $('p')[1].textContent.slice(1);
		let follow_id = Meteor.users.find({'profile.fullname':name}).fetch()[0]._id;
		
		if ($('.follow-btn').text() == 'Following') {
			Meteor.call('update_following',Meteor.userId(),follow_id,false);
			Meteor.call('update_followers',follow_id,Meteor.userId(),false);
			$('.follow-btn').text('Follow');
		} else {
			$('.follow-btn').text('Following');
			Meteor.call('update_following',Meteor.userId(),follow_id,true);
			Meteor.call('update_followers',follow_id,Meteor.userId(),true);
		}
		
	}
})

Template.user.onRendered(function () {  
  
});