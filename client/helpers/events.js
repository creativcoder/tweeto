Template.todo_ui.events({
	'click .btn': function(event) {
		event.preventDefault();
		let todo_record = {
			task: "Learn Meteor",
			desc:"I want to learn meteor in 1 weeek",
			createdAt: new Date(),
			tags: ["intro","tutorial","sample"],
			completed: false,
			due_date: new Date()
		}
		Meteor.call('insertTodo',todo_record);
	}
});

Template.todo_ui.helpers({
	'todos': function() {
		console.log(Meteor.call('fetchTodos'));
		return ["task1","task2","task3","task4"];
		/*let todo_obj = Meteor.call('fetchTodos');
		return todo_obj;*/
	}
});