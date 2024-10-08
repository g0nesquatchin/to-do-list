var inputText = document.getElementById("todoInput");
var taskList = document.getElementById("listItems");

function addTask(){
    var taskcheck = inputText.value
        if (taskcheck !== ""){
            var li = document.createElement("li")
            li.innerHTML = taskcheck;
            taskList.appendChild(li);
                inputText.value = "";
        }
console.log (taskcheck);
}
function deleteTask (){
    for (const li of taskList){
        li.addEventListener('click', function(){
            this.parentNode.removeChild(this);

        })
    }
}
// var submit = document.getElementById("submit");
// submit.addEventListener("click", addTask());