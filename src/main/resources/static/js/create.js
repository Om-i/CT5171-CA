// Add event listener for form submission
document.getElementById('petitionForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Get the values from the input fields
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    // Retrieve existing petitions from local storage or initialize an empty array
    const petitions = JSON.parse(localStorage.getItem('petitions')) || [];
    // Add the new petition to the petitions array
    petitions.push({ title, description, signatures: [] });
    // Save the updated petitions array back to local storage
    localStorage.setItem('petitions', JSON.stringify(petitions));

    // Show the notification message
    const notification = document.getElementById('notification');
    notification.classList.remove('d-none');
    // Hide the notification message after 3 seconds
    setTimeout(() => {
        notification.classList.add('d-none');
    }, 3000);

    this.reset(); // Reset the form fields
});

