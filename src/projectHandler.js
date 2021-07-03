//Projects variable to hold all project objects
let projects = [];

//Unique ID number to associate "project" divs with "project" objects
let currentID = 0;

//Create a new project object
function Project(title, description, tasks){
    this.title = title
    this.description = description
    this.id = currentID
    this.tasks = tasks
};

//Creates Project object with input values, adds to projects array
function addProject(event){
    event.preventDefault();
    let createdProject = new Project(titleInput.value,descInput.value,[]);
    currentID++;
    projects.push(createdProject);
    closeForm();
    console.log(projects[0],projects[1],projects[2]);  
};




//Closes the add project form and clears fields.
//Required beause event.preventDefault() is used in addProject function
function closeForm(){
    formContainer.style.display = "";
    titleInput.value = "";
    descInput.value = "";
}

export{
    Project,
    projects,
    addProject,
    currentID,
};