//Projects variable to hold all project objects
let projects = [];

//Unique ID number to associate "project" divs with "project" objects
let currentID = 0;

//Create a new project object
function Project(title, description){
    this.title = title
    this.description = description
    this.id = currentID
    this.tasks = []
};

//Creates Project object with input values, adds to local storage
function addProject(event){
    event.preventDefault();
    let createdProject = new Project(titleInput.value,descInput.value);

    //Stringify object so it can be stored locally
    let createdProject_serialized = JSON.stringify(createdProject);
    localStorage.setItem(currentID, createdProject_serialized);
    currentID++;
    closeForm();
};

//Closes the add project form and clears fields.
//Required beause event.preventDefault() is used in addProject function
function closeForm(){
    projectsFormContainer.style.display = "";
    titleInput.value = "";
    descInput.value = "";
};

export{
    Project,
    projects,
    addProject,
    currentID,
    
};