Meteor.startup(function(){

	if ( Tweets.find().count() !== 0) {
	Tweets.remove({});
}

});

