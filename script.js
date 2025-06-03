// Simple button interaction
const btn = document.getElementById('action-btn');
if (btn) {
    btn.addEventListener('click', () => {
        alert('Welcome to DedSec!');
    });
}

// Smooth scrolling for nav links
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
