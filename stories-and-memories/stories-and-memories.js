// ************** ADD PHOTO **************
var addPhotoButton = document.getElementById('addPhotoButton');
var imageForm = document.getElementById('uploadForm');
var imageInput = document.getElementById('imageInput');
var imageList = document.getElementById('gallery-images');

addPhotoButton.addEventListener('click', function() {
    imageForm.style.display = 'block';
    addPhotoButton.style.display = 'none';
});

document.getElementById('cancelPhoto').addEventListener('click', function(e) {
    imageForm.style.display = 'none';
    addPhotoButton.style.display = 'block';
});

imageForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    var file = imageInput.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var imageSrc = e.target.result;

            // Create an image element
            var imageElement = document.createElement('img');
            imageElement.src = imageSrc;
            imageElement.classList.add('img-item')

            // Append the image to the image gallery
            imageList.appendChild(imageElement);

            // Reset the form values
            imageInput.value = '';
        };
        reader.readAsDataURL(file);
    }
    // Hide the form after submission
    imageForm.style.display = 'none';
    addPhotoButton.style.display = 'block';
});

// ************** ADD VIDEO **************
var addVideoButton = document.getElementById('addVideoButton');
var videoForm = document.getElementById('videoForm');
var videoInput = document.getElementById('videoInput');
var videoList = document.getElementById('videoList');

addVideoButton.addEventListener('click', function() {
    videoForm.style.display = 'block';
    addVideoButton.style.display = 'none';
});

document.getElementById('cancelVideo').addEventListener('click', function(e) {
    videoForm.style.display = 'none';
    addVideoButton.style.display = 'block';
});

videoForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    var file = videoInput.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var videoSrc = e.target.result;

            // Create a video element
            var videoElement = document.createElement('video');
            videoElement.src = videoSrc;
            videoElement.controls = true;
            videoElement.classList.add('video-item')

            // Append the video element to the video div
            videoList.appendChild(videoElement);

            // Reset the form values
            videoInput.value = '';
        };
        reader.readAsDataURL(file);
    }
    // Hide the form after submission
    videoForm.style.display = 'none';
    addVideoButton.style.display = 'block';
});

// ************** ADD STORY **************
var addStoryButton = document.getElementById('addStoryButton');
var storyForm = document.getElementById('storyForm');
var titleInput = document.getElementById('titleInput');
var storyInput = document.getElementById('storyInput');
var storyList = document.getElementById('all-stories');

addStoryButton.addEventListener('click', function() {
    storyForm.style.display = 'block';
    addStoryButton.style.display = 'none';
});

document.getElementById('cancelStory').addEventListener('click', function(e) {
    storyForm.style.display = 'none';
    addStoryButton.style.display = 'block';
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
        addStoryButton.style.display = 'block';
    }
});
$(function() {
    // Load the header content into the designated container
    $("#headerContainer").load("../header.html");
});