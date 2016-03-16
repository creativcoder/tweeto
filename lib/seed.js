Meteor.startup(function(){
	Meteor.users.remove({});
	if ( Tweets.find().count() !== 0) {
	Tweets.remove({});
}

});

