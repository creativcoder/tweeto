Meteor.methods({
	insertTodo: function (todo_record) {
		Todos.insert(todo_record);
	},
	fetchTodos: function() {
		return Todos.find().fetch();
	}
});