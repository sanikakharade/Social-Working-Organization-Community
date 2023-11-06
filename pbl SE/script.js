    
    
// Function to generate event HTML markup
function generateEventMarkup(event) {
    const { title, date, description } = event;
  
    return `
      <div class="event">
        <h3>${title}</h3>
        <p>Date: ${date}</p>
        <p>${description}</p>
      </div>
    `;
  }
  
  // Function to display events
  function displayEvents() {
    const eventList = document.getElementById("event-list");
  
    // Generate markup for each event and append to the event list
    eventsData.forEach((event) => {
      const eventMarkup = generateEventMarkup(event);
      eventList.innerHTML += eventMarkup;
    });
  }
  
  // Call the displayEvents function when the page has finished loading
  window.addEventListener("load", displayEvents);
  
  // Event data
const eventsData = [
    {
      title: "Charity Gala Night",
      date: "2023-06-15",
      description: "Join us for an elegant evening of fundraising and entertainment.",
    },
    {
      title: "Volunteer Workshop",
      date: "2023-07-10",
      description: "Learn about volunteer opportunities and how you can make a difference in your community.",
    },
    // Add more event objects as needed
  ];
  
  // Function to generate event HTML markup
  function generateEventMarkup(event) {
    const { title, date, description } = event;
  
    return `
      <div class="event">
        <h3>${title}</h3>
        <p>Date: ${date}</p>
        <p>${description}</p>
      </div>
    `;
  }
  
  // Function to display events on events.html
  function displayEvents() {
    const eventList = document.getElementById("event-list");
  
    // Generate markup for each event and append to the event list
    eventsData.forEach((event) => {
      const eventMarkup = generateEventMarkup(event);
      eventList.innerHTML += eventMarkup;
    });
  }
  
  // Call the displayEvents function when the events.html page has finished loading
  if (window.location.pathname === "/events.html") {
    window.addEventListener("load", displayEvents);
  }
  

