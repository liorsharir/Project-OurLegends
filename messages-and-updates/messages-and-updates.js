// ************** ADD MASSAGE **************
$(document).ready(function() {
    $('#addMessageButton').on('click', function() {
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