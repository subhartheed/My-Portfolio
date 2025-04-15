document.addEventListener('DOMContentLoaded', function () {
    // Skill click effect with more pronounced change
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            skill.classList.toggle('skill-clicked');
            if (skill.classList.contains('skill-clicked')) {
                skill.style.backgroundColor = '#aaddff';
                skill.style.transform = 'scale(1.1)';
            } else {
                skill.style.backgroundColor = '#e6f7ff';
                skill.style.transform = 'scale(1)';
            }
        });
    });

    // Smooth scrolling with a slightly faster speed
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Align to the top of the section
            });
        });
    });
});
