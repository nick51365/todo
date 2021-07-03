import * as projectHandler from "./projectHandler.js";

//Index within "projects" array of currently displayed project
let displayedIndex = "";

//Identify projectsContainer div
let projectsContainer = document.getElementById("projectsContainer");

//When a new project is created, create a div with "project" class and append to DOM
function displayProjectSidebar(){
   let newProject = document.createElement("div");
   let dataID = projectHandler.currentID - 1;
    newProject.textContent = projectHandler.projects[projectHandler.projects.length - 1].title;
    newProject.className = "project";
    newProject.setAttribute("data-id", dataID);
    newProject.addEventListener("click", () => displayProjectMain(dataID));
    projectsContainer.append(newProject);
};

//When a project on sidebar is clicked, display on main display
function displayProjectMain(dataID){
    let nameDisplay = document.getElementById("nameDisplay");
    nameDisplay.textContent = projectHandler.projects[dataID].title;
}


export{
    displayProjectSidebar,
    displayProjectMain,
}