import * as projectHandler from "./projectHandler.js";
import * as displayController from "./displayController.js";

//Identify new project submit button
let projectSubmitBtn = document.getElementById("projectSubmitBtn");

//Assign event listener to project submit button
projectSubmitBtn.addEventListener("click", () => {
    projectHandler.addProject(event);
    displayController.displayProject();  
});

//Assign event listener to "Add Project" button
const projectBtn = document.getElementById("projectBtn");
projectBtn.addEventListener("click",() => toggleForm());

//Toggle display/hide form for new project
function toggleForm(){
    const formContainer = document.getElementById("formContainer");
    if (formContainer.style.display == ""){
        formContainer.style.display = "flex";
    }else if (formContainer.style.display == "flex"){
        formContainer.style.display = "";
    }
};


