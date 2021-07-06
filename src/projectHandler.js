//Projects variable to hold all project objects
let projects = [
    {
    title: "First Project",
    description: "Do it like this",
    id: 0,
    tasks: [
        {
        title: "Cure eczema",
        description: "Find a cure for itchy skin rashes",
        dueDate: "2021-05-13",
        priority: "high"
        },
        {
        title: "End all war ",
        description: "Violence is bad so lets make everyone stop",
        dueDate: "2020-04-17",
        priority: "medium"
        },
        {
        title: "Brainstorm reasonable tasks",
        description: "Find more reasonable goals so I can actually accomplish something",
        dueDate: "2020-11-21",
        priority: "low"
        },
    ]},
];

//Unique ID number to associate "project" divs with "project" objects
let currentID = 0;

//Create a new project object
function Project(title, description){
    this.title = title
    this.description = description
    this.id = currentID
    this.tasks = []
};

//Creates Project object with input values, adds to projects array
function addProject(event){
    event.preventDefault();
    let createdProject = new Project(titleInput.value,descInput.value);
    currentID++;
    projects.push(createdProject);
    closeForm();
    console.log(projects[0],projects[1],projects[2]);  
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