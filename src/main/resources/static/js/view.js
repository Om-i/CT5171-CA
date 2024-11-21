// Retrieve petitions from local storage, or initialize an empty array if none are found
const petitions = JSON.parse(localStorage.getItem('petitions')) || [];
// Reference to the petition list in the DOM
const list = document.getElementById('petitionList');

// Iterate over each petition and create a list item
petitions.forEach((petition, index) => {
    const li = document.createElement('li'); // Create a new list item
    li.classList.add('list-group-item'); // Add Bootstrap styling class
    // Set the inner HTML with a link to the detail page of the petition
    li.innerHTML = `<a href="viewPetition.html?id=${index}">${petition.title}</a>`;
    list.appendChild(li); // Append the list item to the petition list
});