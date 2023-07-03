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

function homePage(){
    
}
