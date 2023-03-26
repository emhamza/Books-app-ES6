import { DateTime } from './node_modules/luxon/src/luxon.js';

// Get the current date and time

// const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);

// Display the current date and time in the element with id "current-date-time"
// document.getElementById('current-date-time').textContent = now;

// .........................................=========
import Library from './modules/library.js';

/* NAVIGATION */

import { initializeNavigation } from './modules/navigation.js';

const displayCurrentDateTime = () => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  document.getElementById('current-date-time').textContent = now;
};

displayCurrentDateTime();

document.addEventListener('DOMContentLoaded', () => {
  const library = new Library();
  library.init();
});

document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
});

// Current Date and Time

// import { DateTime } from './node_modules/luxon/src/luxon.js';

// function displayCurrentDate() {
//   const currentDate = DateTime.now().toLocaleString(DateTime.DATE_FULL);
//   const dateElement = document.createElement('p');
//   dateElement.textContent = `Today's Date: ${currentDate}`;
//   document.body.appendChild(dateElement);
// }

// displayCurrentDate();
