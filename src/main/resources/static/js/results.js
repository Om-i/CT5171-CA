// Retrieve the search query from local storage, defaulting to an empty string if not found
const query = localStorage.getItem('searchQuery') || '';
// Retrieve petitions from local storage, parsing them into an array
const petitions = JSON.parse(localStorage.getItem('petitions')) || [];
// Reference to the results list in the DOM
const resultsList = document.getElementById('resultsList');

// Filter petitions that include the search query in their title (case-insensitive)
const results = petitions.filter(petition => petition.title.toLowerCase().includes(query));

// Populate the results list with filtered petitions
results.forEach(petition => {
    const li = document.createElement('li'); // Create a new list item for each result
    li.classList.add('list-group-item', 'list-group-item-action'); // Add Bootstrap styling class
    // Link to the view petition page with the petition index as a query parameter
    li.setAttribute('onclick',`location.href="viewPetition.html?id=${petition.id}"`);
    li.textContent = `${petition.title}`;
    resultsList.appendChild(li); // Append the list item to the results list
});

// If no results were found, display a message
if (results.length === 0) {
    resultsList.innerHTML = '<li class="list-group-item">No results found</li>';
}