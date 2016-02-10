
Schemas = {}

Schemas.TodoSchema = new SimpleSchema({
	"task":{
		type:String,
		label: "Task Name",
	},
	"desc":{
		type:String,
		label: "Description",
	},
	"createdAt": {
    type: Date,
    label: "Created"
  },
  "tags": {
    type: [String],
    label: "tags"
  },
  "completed":{
    type: Boolean
  },
  "due_date": {
    type: Date,
    label: "Deadline"
  }
});

Todos.attachSchema(Schemas.TodoSchema);

