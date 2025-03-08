document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    //Call when hiding is needed
    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }
    //Call when showing is needed
    function showSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        }
    }
    //Event listeners for when we want to display.
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            hideAllSections();
            showSection(targetSection);
        });
    });
    //Default
    hideAllSections();
    showSection('Vejmelkla'); 
});