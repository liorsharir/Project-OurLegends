document.getElementById('addPhotoButton').addEventListener('click', function() {
    document.getElementById('uploadForm').style.display = 'block';
});

document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    var file = document.getElementById('photoInput').files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var image = new Image();
            image.src = e.target.result;
            image.onload = function() {
                // Do something with the image, such as displaying it on the page
                var targetElement = document.getElementById('imageContainer');
                targetElement.src = image.src
                targetElement.classList.add('img-item');
            };
        };
        reader.readAsDataURL(file);
    }
    document.getElementById('uploadForm').style.display = 'none'; // Hide the form after submission
});

var storyForm = document.getElementById('storyForm');
var titleInput = document.getElementById('titleInput');
var storyInput = document.getElementById('storyInput');
var storyList = document.getElementById('storyList');

document.getElementById('addStoryButton').addEventListener('click', function() {
    storyForm.style.display = 'block';
});

storyForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    var title = titleInput.value;
    var story = storyInput.value;

    if (title && story) {
        // Create a new div for the story
        var storyDiv = document.createElement('div');
        storyDiv.classList.add('story');

        // Create a heading element for the title
        var titleElement = document.createElement('h3');
        titleElement.textContent = title;

        // Create a paragraph element for the story
        var storyElement = document.createElement('p');
        storyElement.textContent = story;

        // Append the title and story elements to the story div
        storyDiv.appendChild(titleElement);
        storyDiv.appendChild(storyElement);

        // Append the story div to the story list
        storyList.appendChild(storyDiv);

        // Reset the form values
        titleInput.value = '';
        storyInput.value = '';

        // Hide the form after submission
        storyForm.style.display = 'none';
    }
});
