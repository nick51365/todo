import * as projectHandler from "./projectHandler.js";
import {displayedIndex} from "./displayController.js";

//Create a new task
function Task(title, description, dueDate, priority){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
};

//Creates new Task object with input values from, pushes to current project's tasks array
function addTask(event){
    event.preventDefault();
    console.log(displayedIndex);
    if (projectHandler.projects[displayedIndex] === undefined){
        alert("Select a project to add your task to.")
        return;
    }else{
        let createdTask = new Task(
            taskTitleInput.value, 
            taskDescInput.value,
            dueDateInput.value,
            priorityInput.value);
        projectHandler.projects[displayedIndex].tasks.push(createdTask);
        closeForm();
    };
};

//Closes the Add Task form and clears fields
//Required because event.preventDefault() is used in addTask function
function closeForm(){
    tasksFormContainer.style.display = "";
    taskTitleInput.value = "";
    taskDescInput.value = "";
    dueDateInput.value = "";
    priorityInput.option = "";
};

export{
    Task,
    addTask,
}