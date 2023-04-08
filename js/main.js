const eventsContainer = document.getElementById('events-container');

// Dummy data for events
const events = [
  {
    title: "Music Concert",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt auctor ex vel molestie.",
    location: "Central Park",
    date: "April 10, 2023",
    time: "7:00 PM"
  },
  {
    title: "Art Exhibition",
    description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris ut feugiat ex. ",
    location: "Metropolitan Museum of Art",
    date: "May 12, 2023",
    time: "6:00 PM"
  },
  {
    title: "Charity Fundraiser",
    description: "Donec congue sapien tellus, eu fermentum odio accumsan ut. Maecenas posuere ullamcorper dolor ut dapibus.",
    location: "Marriott Hotel",
    date: "June 18, 2023",
    time: "5:00 PM"
  },
  {
    title: "Comedy Show",
    description: "Phasellus nec varius metus. Sed id ipsum volutpat, ultrices nibh non, efficitur ex.",
    location: "Comedy Cellar",
    date: "July 23, 2023",
    time: "8:00 PM"
  }
];

// Loop through events and create HTML elements for each event
events.forEach(event => {
  const eventBox = document.createElement('div');
  eventBox.classList.add('event-box');

  const eventTitle = document.createElement('div');
  eventTitle.classList.add('event-title');
  eventTitle.textContent = event.title;

  const eventDescription = document.createElement('div');
  eventDescription.classList.add('event-description');
  eventDescription.textContent = event.description;

  const eventLocation = document.createElement('div');
  eventLocation.classList.add('event-location');
  eventLocation.textContent = `Location: ${event.location}`;

  const eventDateTime = document.createElement('div');
  eventDateTime.classList.add('event-date-time');
  eventDateTime.textContent = `Date & Time: ${event.date} at ${event.time}`;

  eventBox.appendChild(eventTitle);
  eventBox.appendChild(eventDescription);
  eventBox.appendChild(eventLocation);
  eventBox.appendChild(eventDateTime);

  eventsContainer.appendChild(eventBox);
});