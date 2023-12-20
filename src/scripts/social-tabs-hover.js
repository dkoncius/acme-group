// Convert NodeList of projects to an array
const projects = Array.from(document.querySelectorAll('.project'));

projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    // Get the index of the current project
    const projectIndex = projects.indexOf(project);

    // Hide all images
    document.querySelectorAll('.image-shape').forEach(img => img.style.display = 'none');

    // Display the corresponding image
    const images = document.querySelectorAll('.image-shape');
    if (images[projectIndex]) {
      images[projectIndex].style.display = 'block';
    }
  });

  project.addEventListener('mouseleave', () => {
    // Optionally, hide the images when the mouse leaves the project
    document.querySelectorAll('.tech-shape').forEach(img => img.style.display = 'none');
  });
});
