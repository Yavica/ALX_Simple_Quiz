// Define an asynchronous function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint

    const dataContainer = document.getElementById('api-data'); // Element to display data

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is OK (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create an unordered list to display user names
        const userList = document.createElement('ul');

        // Loop through the users array and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set text content to user's name
            userList.appendChild(listItem); // Append list item to the list
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle any errors during the fetch operation
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Invoke fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);