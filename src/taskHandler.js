import {displayedIndex} from "./displayController.js";

//Create a new task
function Task(title, description, dueDate, priority){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
};

//Creates new Task object with input values from "Add Task" form, pushes to current project's tasks array
function addTask(event){
    
    //Prevent page refresh on form submit
    event.preventDefault();

    //Parse current project object from local storage
    let currentProject = JSON.parse(localStorage.getItem(displayedIndex));

    if (currentProject === undefined){
        alert("Select a project to add your task to.")
        return;
    }else{
        let createdTask = new Task(
            taskTitleInput.value, 
            taskDescInput.value,
            dueDateInput.value,
            priorityInput.value);

        //Push created task to currently displayed project object
        currentProject.tasks.push(createdTask);

        //Stringify updated project to store locally
        let currentProject_serialized = JSON.stringify(currentProject);
        localStorage.setItem(displayedIndex, currentProject_serialized);
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