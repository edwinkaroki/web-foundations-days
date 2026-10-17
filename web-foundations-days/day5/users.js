
const loadButton = document.getElementById("load-users");
const filterInput = document.getElementById("filter-input");
const status = document.getElementById("status");
const usersList = document.getElementById("users-list");

// Store the users returned by the API
let users = [];

// Render any array of users
function renderUsers(list) {
    usersList.replaceChildren();

    list.forEach(function(user) {
        const item = document.createElement("li");

        const name = document.createElement("h2");
        name.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = `Email: ${user.email}`;

        const city = document.createElement("p");
        city.textContent = `City: ${user.address.city}`;

        const company = document.createElement("p");
        company.textContent = `Company: ${user.company.name}`;

        item.append(name, email, city, company);
        usersList.appendChild(item);
    });
}

// Fetch users from the API
async function loadUsers() {
    loadButton.disabled = true;
    status.textContent = "Loading users...";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // fetch does not automatically throw for HTTP errors
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        users = data;

        // Display users using the current filter
        filterUsers();

    } catch (error) {
        users = [];
        renderUsers([]);
        status.textContent = "Failed to load users. Please try again.";
        console.error("Error loading users:", error);

    } finally {
        loadButton.disabled = false;
    }
}

// Filter the stored users without making another request
function filterUsers() {
    const searchText = filterInput.value.trim().toLowerCase();

    const filteredUsers = users.filter(function(user) {
        return user.name.toLowerCase().includes(searchText);
    });

    renderUsers(filteredUsers);

    if (filteredUsers.length === 0) {
        status.textContent = "No users match your filter.";
    } else {
        status.textContent =
            `Showing ${filteredUsers.length} of ${users.length} users.`;
    }
}

// Event listeners
loadButton.addEventListener("click", loadUsers);
filterInput.addEventListener("input", filterUsers);
