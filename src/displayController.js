import * as projectHandler from "./projectHandler.js";

//Index within local storage of currently displayed project
let displayedIndex = 0;

//Identify projectsContainer div
let projectsContainer = document.getElementById("projectsContainer");

//On page load, iterate through local storage and display existing projects
function displayOnLoad(){
    Object.keys(localStorage).forEach(key => {
        
        if (key != "currentID"){
            let newProject = document.createElement("div");
            let dataID = key;

            //Parse current project object from local storage
            let currentProject = JSON.parse(localStorage[key]);

            //Build project div in sidebar
            newProject.textContent = currentProject.title;
            newProject.className = "project";
            newProject.setAttribute("data-id", dataID);
            newProject.addEventListener("click", () => {
                displayProjectMain(dataID, currentProject);
                displayTasks();
                restyleSelected(newProject);
            });
            projectsContainer.append(newProject);

            };
        }
    );
};

//When a new project is created, create a div with "project" class and append to DOM
function displayProjectSidebar(){
    let newProject = document.createElement("div");
    let dataID = parseInt(localStorage.getItem("currentID")) - 1;

   //Parse project from local storage so it can be read as an object
    let currentProject = JSON.parse(localStorage.getItem(projectHandler.mostRecentKey));
    newProject.textContent = currentProject.title;
    newProject.className = "project";
    newProject.setAttribute("data-id", dataID);
    newProject.addEventListener("click", () => {
        displayProjectMain(dataID, currentProject);
        displayTasks();
        restyleSelected(newProject);
});

    //Append new project to sidebar
    projectsContainer.append(newProject);
};

//When a project on sidebar is clicked, display on main display
function displayProjectMain(dataID, currentProject){

    //Update displayedIndex to ID of clicked project
    displayedIndex = dataID;

    //Display name of project on main display
    let nameDisplay = document.getElementById("nameDisplay");
    nameDisplay.innerHTML = "";
    nameDisplay.textContent = currentProject.title; 

    //Create h2 div for project description, append to name display
    let descDisplay = document.createElement("h2");
    descDisplay.textContent = currentProject.description;
    nameDisplay.append(descDisplay);

    //Create delete button and append to nameDisplay
    let deleteButton = document.createElement("div");
    deleteButton.className = "deleteButton";
    deleteButton.id = `btn${dataID}`;
    deleteButton.addEventListener("click",() => deleteProject(dataID)) ;
    nameDisplay.append(deleteButton);
};

//Restyle selected project div by assigning "selectedProject" class
function restyleSelected(currentDiv){
    //Reset all project divs to unselected "project" class
    let projectList = document.querySelectorAll(".project");
    projectList.forEach((project) => project.className = "project");

    //Restyle selected project
    currentDiv.classList.add("selectedProject");
};

//When delete button is pressed, delete project from sidebar and local storage
function deleteProject(dataID){

    if (confirm("Delete this project?") === true){
    //Identify corresponding project on sidebar and remove DOM element
    let sidebarDiv = document.querySelector(`[data-id='${dataID}']`);
    sidebarDiv.remove();

    //Clear name display
    let nameDisplay = document.getElementById("nameDisplay");
    nameDisplay.textContent = "Project Name";

    //Clear task container
    let taskContainer = document.getElementById("taskContainer");
    taskContainer.innerHTML = "";

    //Delete project from local storage
    localStorage.removeItem(dataID)
    };
};

//Clears task container and repopulates with updated task list
function displayTasks(){
    let currentProject = JSON.parse(localStorage[displayedIndex]);
    let taskList = currentProject.tasks;
    let taskContainer = document.getElementById("taskContainer");
    taskContainer.textContent = "";
    
    //Iterate through the task list
    for (let i = 0; i < taskList.length; i++){

        //Creates a "task" div
        let newTask = document.createElement("div");
        newTask.className = "task";

        //Creates/appends a div to hold title text
        let taskTitle = document.createElement("h1");
        taskTitle.textContent = taskList[i].title;
        newTask.append(taskTitle);

        //Creates/appends a div to hold description text
        let taskDesc = document.createElement("p")   
        taskDesc.textContent = taskList[i].description;
        taskTitle.append(taskDesc);
        
        //Creates "taskDue" div, appends to task div
        let taskDue = document.createElement("div");
        taskDue.className = "taskDue";
        taskDue.textContent = "Due: " + taskList[i].dueDate;
        newTask.append(taskDue);

        //Creates button with "taskDeleteBtn" class, appends to div
        let taskDeleteBtn = document.createElement("div");
        let currentTask = taskList[i];
        taskDeleteBtn.className = "taskDeleteBtn";
        taskDeleteBtn.addEventListener("click", () => deleteTask(
            taskList, 
            i, 
            currentProject, 
            displayedIndex
            ));
        newTask.append(taskDeleteBtn);

        //Append task div to task container
        taskContainer.append(newTask);

        //Changes color of "task" div depending on priority
        if(taskList[i].priority == "low"){
            newTask.style.backgroundColor = "rgba(12, 236, 4, 0.75)";
        }else if(taskList[i].priority == "medium"){
            newTask.style.backgroundColor = "rgba(255, 251, 1, 0.75)";
        }else if(taskList[i].priority == "high"){
            newTask.style.backgroundColor = "rgba(255, 1, 1, 0.75)"
        }
    }
};

//When taskDeleteBtn is pressed, task is deleted
function deleteTask(taskList, i, currentProject, displayedIndex){
    
    if (confirm("Delete this task?") === true) {
    //Splice selected task from taskList
    taskList.splice(i, 1);
    
    //Replace task list with edited task list
    currentProject.tasks = taskList;

    //Replace project in local storage with edited project
    localStorage[displayedIndex] = JSON.stringify(currentProject);
    
    //Display edited task list in task display
    displayTasks();
    };
};

export{
    displayProjectSidebar,
    displayProjectMain,
    displayTasks,
    displayOnLoad,
    displayedIndex,
}