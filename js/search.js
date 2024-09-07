document.addEventListener("DOMContentLoaded", function () {
    // Hide all course containers initially
    const pdfContainers = document.querySelectorAll('.pdf-container');
    pdfContainers.forEach(container => {
        container.style.display = 'none';
    });

    // Hide the error message initially
    document.getElementById('errorMessage').style.display = 'none';
});

function searchCourses() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    const pdfSections = document.querySelectorAll('.pdf-section');
    let found = false; // Track if any course is found

    if (input === "") {
        // If input is empty, hide all courses and error message
        pdfSections.forEach(section => {
            section.parentElement.style.display = 'none';
        });
        document.getElementById('errorMessage').style.display = 'none';
        return; // Exit the function early
    }

    pdfSections.forEach(section => {
        const courseName = section.getAttribute('data-course-name').toLowerCase();
        if (courseName.includes(input)) {
            section.parentElement.style.display = 'block'; // Show matching course
            found = true;
        } else {
            section.parentElement.style.display = 'none'; // Hide non-matching course
        }
    });

    // Show or hide the error message based on whether any courses were found
    const errorMessage = document.getElementById('errorMessage');
    if (found) {
        errorMessage.style.display = 'none'; // Hide error message
    } else {
        errorMessage.style.display = 'block'; // Show error message
    }
}