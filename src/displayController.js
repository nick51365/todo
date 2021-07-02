import * as projectHandler from "./projectHandler.js";

//current position in projects array
//      myProjects.projects[myProjects.projects.length - 1]

let projectsContainer = document.getElementById("projectsContainer");

//When a new project is created, create a div with "project" class and append to DOM
function displayProject(){
   let newProject = document.createElement("div");
    newProject.textContent = projectHandler.projects[projectHandler.projects.length - 1].title;
    newProject.className = "project";
    projectsContainer.append(newProject);
};

export{
    displayProject,
}