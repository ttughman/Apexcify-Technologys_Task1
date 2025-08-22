// A simple JavaScript file to add interactivity and animations to your website.

// --- SMOOTH SCROLL FOR NAVIGATION LINKS ---
// This section has been updated to only apply smooth scrolling to internal links (those that start with '#').
// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    // Add a click event listener to each link
    link.addEventListener('click', function(e) {
        // Check if the link's href starts with '#' to see if it's an internal page link
        if (this.getAttribute('href').startsWith('#')) {
            // Prevent the default jump to the section
            e.preventDefault();

            // Get the target section's ID from the link's href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Scroll smoothly to the target section if it exists
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // If the href does not start with '#', the code will not run e.preventDefault(),
        // allowing the link to navigate to the login.html page as intended.
    });
});


// --- ANIMATE ELEMENTS ON SCROLL (INTERSECTION OBSERVER) ---
// This is a modern, efficient way to trigger animations when elements enter the viewport.
const serviceCards = document.querySelectorAll('.service-card');

const observerOptions = {
    root: null, // The viewport is the root
    threshold: 0.2, // The animation triggers when 20% of the element is visible
    rootMargin: '0px 0px -50px 0px' // A small margin to delay the animation slightly
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the element is visible, add the 'animate' class to trigger the animation
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Stop observing the element after it has animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Tell the observer to watch each of the service cards
serviceCards.forEach(card => {
    observer.observe(card);
});


// --- DYNAMIC HEADER ON SCROLL ---
// Get the header container
const header = document.querySelector('.header-container');

window.addEventListener('scroll', () => {
    // Check if the user has scrolled down more than 50 pixels
    if (window.scrollY > 50) {
        // If they have, add the 'header-scrolled' class
        header.classList.add('header-scrolled');
    } else {
        // If they haven't, remove the class
        header.classList.remove('header-scrolled');
    }
});
