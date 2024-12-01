// Retrieve petitions from local storage, or initialize an empty array if none are found
const petitions = JSON.parse(localStorage.getItem('petitions')) || [];
// Reference to the petition list in the DOM
const list = document.getElementById('petitionList');

// Iterate over each petition and create a list item
petitions.forEach(petition => {
    const li = document.createElement('li'); // Create a new list item
    li.classList.add('list-group-item', 'list-group-item-action'); // Add Bootstrap styling class
    // Link to the view petition page with the petition index as a query parameter
    li.setAttribute('onclick',`location.href="viewPetition.html?id=${petition.id}"`);
    li.textContent = `${petition.title}`;
    list.appendChild(li); // Append the list item to the petition list
});