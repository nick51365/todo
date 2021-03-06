import * as projectHandler from "./projectHandler.js";
import * as taskHandler from "./taskHandler.js";
import * as displayController from "./displayController.js";

//Assign submit event listener to project form
let projectForm = document.getElementById("projectForm");
let title = document.getElementById("titleInput");
projectForm.addEventListener("submit", () => {
    projectHandler.addProject(event);
    displayController.displayProjectSidebar(); 
});

//Assign event listener to "Add Project" button
const projectBtn = document.getElementById("projectBtn");
const projectsFormContainer = document.getElementById("projectsFormContainer");
projectBtn.addEventListener("click",() => {
    if (projectsFormContainer.style.display == ""){
        projectsFormContainer.style.display = "flex";
    }else if (projectsFormContainer.style.display == "flex"){
        projectsFormContainer.style.display = "";
    }
});

//Assign submit event listener to task form
const tasksForm = document.getElementById("tasksForm");
tasksForm.addEventListener("submit",() => {
    taskHandler.addTask(event);
    displayController.displayTasks();
})

//Assign event listener to "Add Task" button
const taskBtn = document.getElementById("taskBtn");
const tasksFormContainer = document.getElementById("tasksFormContainer");
taskBtn.addEventListener("click",() => {
    if (tasksFormContainer.style.display == ""){
        tasksFormContainer.style.display = "flex";
    }else if (tasksFormContainer.style.display == "flex"){
        tasksFormContainer.style.display = "";
    }
});

//Assign event listener to "Clear Tasks" button
const clearTasks = document.getElementById("clearTasks");
clearTasks.addEventListener("click",() => displayController.clearTasks());


displayController.pageOnLoad();

