var firstName = localStorage.getItem('firstName');
var lastName = localStorage.getItem('lastName');
window.alert("Page for: "+firstName+" "+lastName+ " has been created. \n you can now choose the page you want to view from the list");

document.getElementById("search").addEventListener('click', function() {
    alert('החיפוש לא עובד כאשר הדף לא מחובר לdatabase ');
});