This simple web app creates a to-do list for users. It allows the users to add items to their list, mark them as complete, and remove them from the list.

Functions:

addTask()
    -adds a new task to the list based on the user input in the todo bar
    -each task comes with a checkbox for completion and a remove button for removal

deleteTask()
    -called within addTask() via an event listener that removes the task when the "remove" button is clicked

completeTask()
    -Strikes through the tasks text when the checkbox is clicked. The checkbox can be unclicked to remove the strike-through.