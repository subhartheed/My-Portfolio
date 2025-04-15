document.addEventListener('DOMContentLoaded', function() {
    //  Example: Add a class to skills on click
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            skill.classList.toggle('skill-clicked');
        });
    });

    // Example:  Smooth scrolling to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
