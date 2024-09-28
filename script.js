// Button for light and dark mode

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#darkModeToggle');
const transition = document.querySelector('#sun');





const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');

}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
}


const animateSun = () => {
  transition.classList.add('sun-outline');
}

if(darkMode == 'enabled'){
  enableDarkMode();
  darkModeToggle.checked = true;
}


darkMode = localStorage.getItem("darkMode");

darkModeToggle.addEventListener("click", () => {
  darkMode= localStorage.getItem("darkMode");
  if(darkMode !== 'enabled'){
    enableDarkMode();
  }else{
    disableDarkMode();
  }
});


