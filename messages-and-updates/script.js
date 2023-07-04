const selectedEventId = localStorage.getItem('selectedEventId');

const events = [
    {
        id: 1,
        name: 'שליחת פרחים',
        details: 'שלח פרחים כדי לכבד את זכרו של יקירך',
        action: 'sendFlowers()',
    },
    {
        id: 2,
        name: 'הדלק נר',
        details: 'הדליקו נר וירטואלי לזכר יקירכם',
        action: 'lightCandle()',
    },
    {
        id: 3,
        name: 'שתף דף',
        details: 'שתף את דף הזיכרון הזה עם אחרים כדי לשמור על הזיכרון בחיים',
        action: 'sharePage()',
    },
];

const selectedEvent = events.find((event) => event.id.toString() === selectedEventId);

if (selectedEvent) {
    const eventDetailsElement = document.getElementById('eventDetails');
    eventDetailsElement.innerHTML = `
      <h2>${selectedEvent.name}</h2>
      <p>${selectedEvent.details}</p>
      <button onclick="${selectedEvent.action}">בצע פעולה</button>
    `;
} else {
    console.error('Selected event not found.');
}

function sendFlowers() {
    // Implement the logic for sending flowers here
    alert('שולח פרח...');
}

function lightCandle() {
    // Implement the logic for lighting a candle here
    alert('מדליק נר...');
}

function sharePage() {
    // Implement the logic for sharing the page here
    alert('משתף את הדף...');
}

$(function() {
    // Load the header content into the designated container
    $("#headerContainer").load("../personal-page-basic/header.html");
});