const inputText = document.getElementById("todoInput");
const taskList = document.getElementById("listItems");


//adds a new task with a checkbox, the task, and a remove button
function addTask(){
    var taskcheck = inputText.value
        if (taskcheck !== ""){

            //create the list element if the input field has a todo item
            var li = document.createElement("li")

            /// create delete button and checkbox for list element
            const deleteBtn = document.createElement("button")
            const checkBox =document.createElement("input");
            checkBox.type = 'checkbox';
            li.innerHTML = taskcheck;
            deleteBtn.innerHTML = 'remove';
            
            //add new list element to our list and append the checkbox and delete buttons
            taskList.appendChild(li);
            li.prepend(checkBox)
            li.appendChild(deleteBtn);

            //add event listeners at the delete button and checkbox
            deleteBtn.addEventListener("click", deleteTask);
            checkBox.addEventListener('click', completeTask)

            //reset the to-do input bar
            inputText.value = "";
        }

}

//deletes to-do items via the remove button
function deleteTask (event){
    let task = event.target.parentElement; //gets the specific li element associated with the event
    taskList.removeChild(task);
}

//if the checkbox is checked, a strike through is added to the text of the list element
function completeTask(event){

let task = event.target.parentElement //gets the specific li element associated with the event
if(this.checked){
    task.style.textDecoration = 'line-through';
} else{
    task.style.textDecoration = 'none';
}

 //old code to do the strikethrough without the checkbox will need to add css for .strike   
    // let task = event.target.parentElement;
    // task.classList.toggle('strike');
}
