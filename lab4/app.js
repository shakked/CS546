const todo = require('./todo.js');



async function main() {

	const firstTask = await todo.createTask('Ponder Dinosaurs', 'Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?');
	console.log(`Step 2: ${JSON.stringify(firstTask, null, 4)}`);
	const secondTask = await todo.createTask('Play Pokemon with Twitch TV', 'Should we revive Helix');
	let allTasks = await todo.getAllTasks();
	console.log(`Step 3:`);
	allTasks.forEach( task => {
		console.log(task);
	})
	const succeeded = await todo.removeTask(firstTask._id);
	allTasks = await todo.getAllTasks();
	console.log(`Step 5:`);
	allTasks.forEach( task => {
		console.log(task);
	});
	const completedTask = await todo.completeTask(allTasks[0]._id);
	console.log(`Step 7: ${JSON.stringify(completedTask, null, 4)}`);
	allTasks = await todo.getAllTasks();
	allTasks.forEach(task => {
		todo.removeTask(task._id);
	});
}

main();
