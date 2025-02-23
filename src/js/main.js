document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update navigation
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Update sections
            const targetId = link.getAttribute('href').slice(1);
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });

            // Close mobile menu if open
            navMenu.classList.remove('active');
        });
    });
});