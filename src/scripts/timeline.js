document.addEventListener("DOMContentLoaded", function() {
    const datesContainer = document.querySelector('.dates');
    const contentContainer = document.querySelector('.dates-content');
    const currentYear = new Date().getFullYear();
    const startYear = 1994;

    for (let year = startYear; year <= currentYear; year++) {
        // Create date element
        const dateDiv = document.createElement('div');
        dateDiv.className = 'date';
        dateDiv.innerHTML = `<p>${year}</p><div class="line"></div>`;
        datesContainer.appendChild(dateDiv);

        // Create content element (hidden by default)
        const contentP = document.createElement('p');
        contentP.style.display = 'none';
        contentP.textContent = `Content for the year ${year}`; // Modify this as needed
        contentContainer.appendChild(contentP);

        // Add event listener for each date
        dateDiv.addEventListener('click', function() {
            // Hide all content
            document.querySelectorAll('.dates-content p').forEach(p => p.style.display = 'none');
            
            // Show the content corresponding to the clicked date
            contentP.style.display = 'block';

            // Update active class for dates
            document.querySelectorAll('.date').forEach(d => d.classList.remove('active'));
            dateDiv.classList.add('active');
        });
    }
});
