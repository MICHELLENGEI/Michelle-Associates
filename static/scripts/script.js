function showSection(sectionId) {
    const sections = document.querySelectorAll('main div');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }  
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
