// JavaScript to trigger animations on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.content-section');
    const windowHeight = window.innerHeight;

    sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Initially trigger visibility for already visible sections
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});
