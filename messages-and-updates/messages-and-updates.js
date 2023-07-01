// ************** ADD MASSAGE **************
$(document).ready(function() {
    $('#addMessageButton').on('click', function() {
        $('#warningMessage').show();
        var message = $('#messageInput').val();
        if (message) {
            var date = new Date().toLocaleString();
            var messageDiv = $('<div>').addClass('message');
            var dateElement = $('<div>').addClass('date').text(date);
            var contentElement = $('<div>').addClass('content').text(message);
            messageDiv.append(dateElement).append(contentElement);
            $('#messageList').append(messageDiv);
            $('#messageInput').val('');
        }
    });
});

// ************** ADD EVENT **************
$(document).ready(function() {
    $('#addEventButton').on('click', function() {
        $('#warningEvent').show();
        var eventDetails = $('#eventInput').val();
        var imageFile = $('#eventImageInput').prop('files')[0];

        if (eventDetails) {
            var date = new Date().toLocaleString();
            var eventDiv = $('<div>').addClass('event');
            var dateElement = $('<div>').addClass('date').text(date);
            var contentElement = $('<div>').addClass('content').text(eventDetails);
            var imageElement = $('<img>').addClass('image');

            if (imageFile) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    imageElement.attr('src', e.target.result);
                };
                reader.readAsDataURL(imageFile);
            }

            eventDiv.append(dateElement).append(contentElement).append(imageElement);
            $('#eventList').append(eventDiv);
            $('#eventInput').val('');
            $('#eventImageInput').val('');
        }
    });
});

// ************** ADD PLACE **************
$(document).ready(function() {
    $('#addPlaceButton').on('click', function() {
        $('#warningPlace').show();
        var placeDetails = $('#placeInput').val();
        var locationDetails = $('#locationInput').val();
        var imageFile = $('#placeImageInput').prop('files')[0];

        if (placeDetails) {
            var placeDiv = $('<div>').addClass('place');
            var nameElement = $('<div>').addClass('name').text(placeDetails);
            var locationElement = $('<div>').addClass('location').text(locationDetails);
            var imageElement = $('<img>').addClass('image');

            if (imageFile) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    imageElement.attr('src', e.target.result);
                };
                reader.readAsDataURL(imageFile);
            }

            placeDiv.append(nameElement).append(locationElement).append(imageElement);
            $('#placeList').append(placeDiv);
            $('#placeInput').val('');
            $('#locationInput').val('');
            $('#placeImageInput').val('');
        }
    });
});

$(function() {
    // Load the header content into the designated container
    $("#headerContainer").load("../personal-page-basic/header.html");
});