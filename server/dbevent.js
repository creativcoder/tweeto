Meteor.methods({
	insertTodo: function (todo_record) {
		Todos.insert(todo_record);
	},
	fetchTodos: function() {
		return Todos.find().fetch();
	},
	update_following: function(uid,follow_id,incr) {
		if (incr) {
			Meteor.users.update(uid, {$addToSet :{"profile.following":follow_id}});	
		} else {
			Meteor.users.update(uid, {$pull :{"profile.following":follow_id}});	
		}
		
	},
	update_followers: function(uid,follow_id,incr) {
		if (incr) { 
			Meteor.users.update(uid, {$addToSet :{"profile.followers":follow_id}});
		} else {
			Meteor.users.update(uid, {$pull :{"profile.followers":follow_id}});
		}
		
	}
});