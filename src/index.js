//Assign event listener to "Add Project" button
const projectBtn = document.getElementById("projectBtn");
projectBtn.addEventListener("click",() => toggleForm());


function toggleForm(){
    const formContainer = document.getElementById("formContainer");
    console.log(formContainer.style.display);
    if (formContainer.style.display == ""){
        formContainer.style.display = "flex";
    }else if (formContainer.style.display == "flex"){
        formContainer.style.display = "";
    }
}

function openForm(){
    document.getElementById("formContainer").style.display = "flex";
};

function closeForm(){
    document.getElementById("formContainer").style.display = "none";
}

