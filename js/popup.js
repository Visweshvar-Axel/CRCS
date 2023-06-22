// Get the elements
const profileIcon = document.querySelector('#profile-icon');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('#close');

// Show the popup when profile icon is clicked
profileIcon.addEventListener('click', function() {
  popup.style.display = 'block';
});

// Close the popup when close button is clicked
closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});