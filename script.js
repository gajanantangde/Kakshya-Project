window.botpressWebChat.init({
    botId: 'your-bot-id',
    hostUrl: 'https://cdn.botpress.cloud',
    messagingUrl: 'https://cdn.botpress.cloud',
    botName: 'Kaksha',
    botAvatarUrl: 'https://example.com/your-bot-avatar.png',  // Optional: Custom bot avatar URL
    // Add other customization options as needed
});
// Navbar css 
document.addEventListener("DOMContentLoaded", function() {
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.getElementById('close-menu');

// Show menu when hamburger icon is clicked
mobileMenu.addEventListener('click', () => {
  navLinks.classList.add('active');
  closeMenu.style.display = 'block'; // Show close button
  mobileMenu.classList.add('hidden'); // Hide hamburger icon
});

// Hide menu when close button is clicked
closeMenu.addEventListener('click', () => {
  navLinks.classList.remove('active');
  closeMenu.style.display = 'none'; // Hide close button
  mobileMenu.classList.remove('hidden'); // Show hamburger icon
});

// Close the menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      closeMenu.style.display = 'none'; // Hide close button
      mobileMenu.classList.remove('hidden'); // Show hamburger icon
  });
});
});
