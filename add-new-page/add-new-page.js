// Save local changes to local storage, prevent data lost while refresh\reload page.
window.onload = function(){
    var firstName = localStorage.getItem('firstName');
    var lastName = localStorage.getItem('lastName');
    var birthDate = localStorage.getItem('birthDate');
    var deathDate = localStorage.getItem('deathDate');
    var burialPlace = localStorage.getItem('burialPlace');
    var lifeStory = localStorage.getItem('lifeStory');
    var profile = localStorage.getItem('profile');
    if (firstName !== null) $('#firstName').val(firstName); if (lastName !== null) $('#lastName').val(lastName);
    if (birthDate !== null) $('#birthDate').val(birthDate); if (deathDate !== null) $('#deathDate').val(deathDate);
    if (burialPlace !== null) $('#burialPlace').val(burialPlace); if (lifeStory !== null) $('#lifeStory').val(lifeStory);
    if (profile !== null) $('#profile').val(profile);
}

window.onbeforeunload = function() {
    localStorage.setItem("firstName", $('#firstName').val());
    localStorage.setItem("lastName", $('#lastName').val());   
    localStorage.setItem("birthDate", $('#birthDate').val());   
    localStorage.setItem("deathDate", $('#deathDate').val());
    localStorage.setItem("burialPlace", $('#burialPlace').val());
    localStorage.setItem("lifeStory", $('#lifeStory').val());
    localStorage.setItem("profile", $('#profile').val());
}

// Replace img icon with uploaded picture
function loadFile(event, img) {
	var img = document.getElementById(img);
	img.src = URL.createObjectURL(event.target.files[0]);
};

// Validate dates that not in the future
function validateForm(){
    var birthDate = document.forms["legendsForm"]["birthDate"].value;
    var currentDate= new Date();
    var entereBirthDate= new Date(birthDate);
    if(entereBirthDate > currentDate){
        window.alert("The birthDate value cannot be in the future");
        return false;
    }
    var deathDate = document.forms["legendsForm"]["deathDate"].value;
    var entereDeathDate= new Date(deathDate);
    if(entereDeathDate > currentDate){
        window.alert("The deathDate value cannot be in the future");
        return false;
    }
    return true;
}

// Validate that image size not excceed the limit
function validateImage(fileInput){
    var file = fileInput.files[0];
    var maxSizeInBytes = 16777215; // 16.7 MB

    if (file.size > maxSizeInBytes) {
      window.alert("File size exceeds the maximum allowed limit (16.7 MB). Please choose a smaller image.");
      fileInput.value = ''; // Clear the file input field
      return false;
    }
    return true;
}

// Redirect to the main page after submit
document.getElementById("subButton").addEventListener("click", myFunction);  
function myFunction() {  
    window.location.href="../personal-memorial-page/personal-memorial-page.html";  
}