const mongoCollections = require('./mongoCollection');
const todoItems = mongoCollections.todoItems;
const uuidv4 = require('uuid/v4');

exports.createTask = async (title, description) => {
	if (!title || typeof title != 'string') throw 'You must provide a title and it must be a string';
	if (!description || typeof description != 'string') throw 'You must provide a description and it must be a string';

	const todoItemsCollection  = await todoItems();
	const newTodoItemInfo = {
		_id: uuidv4(),
		title: title,
		description: description,
		completed: false,
		completedAt: null,
	}

	const insertInfo = await todoItemsCollection.insertOne(newTodoItemInfo);
	if (insertInfo.insertedCount === 0) throw 'Could not add Todo Item';

	const newTodoItem = await exports.getTask(newTodoItemInfo._id);
	return newTodoItem;
}

exports.getAllTasks = async () => {
	const todoItemsCollection = await todoItems();
	const theTodoItems = await todoItemsCollection.find({}).toArray();
	return theTodoItems;
}

exports.getTask = async (id) => {
	if (!id || typeof id != 'string') throw 'You must provide an id and it must be a string';

	const todoItemsCollection = await todoItems();
	const todoItem = await todoItemsCollection.findOne({ _id: id })
	if (todoItem == null) throw 'No todoItem with that ID';

	return todoItem;
}

exports.completeTask = async (taskId) => {
	if (!taskId || typeof taskId != 'string') throw 'You must provide a taskId and it must be a string';

	const todoItemsCollection = await todoItems();
	const todoItem = await exports.getTask(taskId);

	const updatedTodoItem = {
		_id: todoItem._id,
		title: todoItem.title,
		description: todoItem.description,
		completed: true,
		completedAt: Date(),
	};

	const updatedInfo = await todoItemsCollection.updateOne({ _id: taskId}, updatedTodoItem);

	if (updatedInfo.modifiedCount === 0) {
		throw 'could not update todoItem successfully';
	}

	return await exports.getTask(taskId);
}

exports.removeTask = async (id) => {
	if (!id  || typeof id != 'string') throw 'You must provide an id and it must be a string';

	const todoItemsCollection = await todoItems();
	const deletionInfo = await todoItemsCollection.removeOne({ _id: id })
	if (deletionInfo.deletedCount === 0) {
		throw `Could not delete task with id: ${id}`;
	}
	return true;
}



