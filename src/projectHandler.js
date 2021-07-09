//Unique ID number to associate "project" divs with "project" objects
//If no currentID exists in local storage, create with initial value of 0
if (localStorage.getItem("currentID") === null){
    localStorage.setItem("currentID",0);
};
let currentID = 0;
let mostRecentKey = "";


//Create a new project object
function Project(title, description){
    this.title = title
    this.description = description
    this.tasks = []
};

//Creates Project object with input values, adds to local storage
function addProject(event){
    event.preventDefault();
    let createdProject = new Project(titleInput.value,descInput.value);

    //Stringify object so it can be stored locally
    let createdProject_serialized = JSON.stringify(createdProject);

    //Adds created project to local storage
    let storageID = localStorage.getItem("currentID");
    mostRecentKey = storageID;
    localStorage.setItem(storageID, createdProject_serialized);
    
    //Increment currentID in local storage  
    storageID++;
    localStorage.setItem("currentID", storageID);
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
    addProject,
    currentID,
    mostRecentKey,
};