// Button for light and dark mode

const darkModeToggle = document.querySelector('#darkModeToggle');
const transition = document.querySelector('#sun');

// Get the initial dark mode state from local storage
const initialDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Set the initial state of the toggle button
darkModeToggle.checked = initialDarkMode;

// Function to change text color
function changeTextColor(color) {
  const textElements = document.querySelectorAll('body *');
  textElements.forEach((element) => {
    if (element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
      element.style.color = color;
    }
  });
}

// Define functions to enable and disable dark mode
const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  changeTextColor('white'); // Change text color to white
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  changeTextColor('black'); // Change text color to black
  localStorage.setItem('darkMode', null);
};

// Add event listener to the toggle button
darkModeToggle.addEventListener('click', () => {
  const darkMode = darkModeToggle.checked;
  if (darkMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// If the initial dark mode state is enabled, enable dark mode
if (initialDarkMode) {
  enableDarkMode();
}
