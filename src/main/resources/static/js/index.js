// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchQuery').value.toLowerCase(); // Get the search query
    localStorage.setItem('searchQuery', query); // Save the query in local storage
    window.location.href = 'results.html'; // Redirect to the results page
});

// Allow pressing Enter to trigger the search
document.getElementById('searchQuery').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { // Check if the pressed key is 'Enter'
        event.preventDefault(); // Prevent default form submission behavior
        document.getElementById('searchButton').click(); // Trigger the search button click
    }
});

// Initial Random Data for demonstration or testing purposes
if (!localStorage.getItem('petitions')) {
    const initialPetitions = [
        { title: "Save the Whales", description: "A petition to protect whale habitats.", signatures: [] },
        { title: "Clean the Oceans", description: "A petition to reduce ocean pollution.", signatures: [] }
    ];
    // Store initial petitions in local storage
    localStorage.setItem('petitions', JSON.stringify(initialPetitions));
}