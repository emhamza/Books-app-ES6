import { DateTime } from './node_modules/luxon/src/luxon.js';
import Library from './modules/library.js';
import { initializeNavigation } from './modules/navigation.js';

// function for current date and time
const displayCurrentDateTime = () => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  document.getElementById('current-date-time').textContent = now;
};

displayCurrentDateTime();

// For Library instances
document.addEventListener('DOMContentLoaded', () => {
  const library = new Library();
  library.init();
});

// For initialization of the NAVIGATION bar
document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
});
