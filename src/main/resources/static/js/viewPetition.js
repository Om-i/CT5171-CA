// Get the petition ID from the URL parameters
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

// Retrieve petitions from local storage or initialize an empty array
const petitions = JSON.parse(localStorage.getItem('petitions')) || [];
const petition = petitions[id]; // Get the specific petition using the ID

// Display the petition title and description
document.getElementById('petitionTitle').innerText = petition.title;
document.getElementById('petitionDescription').innerText = petition.description;

// Display current signatures
const signatureList = document.getElementById('signatureList');
petition.signatures.forEach(signature => {
    const li = document.createElement('li'); // Create a new list item for each signature
    li.className = 'list-group-item'; // Add Bootstrap styling class
    li.innerText = `${signature.name} (${signature.email})`; // Format the signature display
    signatureList.appendChild(li); // Append the item to the signature list
});

// Event listener for the sign form submission
document.getElementById('signForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    const name = document.getElementById('name').value; // Get the name input
    const email = document.getElementById('email').value; // Get the email input

    // Add the new signature to the petition's signatures array
    petition.signatures.push({ name, email });
    localStorage.setItem('petitions', JSON.stringify(petitions)); // Update local storage
    alert('Thank you for signing the petition!'); // Notify the user
    this.reset(); // Reset the form fields

    // Update displayed signatures dynamically
    const li = document.createElement('li'); // Create a new list item for the new signature
    li.className = 'list-group-item'; // Add Bootstrap styling class
    li.innerText = `${name} (${email})`; // Format the new signature display
    signatureList.appendChild(li); // Append the new item to the signature list
});