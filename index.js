function displayUsers(users) {

const userList = document.querySelector('#user-list');

users.forEach(user => {

const listItem = document.createElement('li');

listItem.textContent = `${user.name} (${user.email})`;

userList.appendChild(listItem);

});
}

async function fetchAndDisplayUsers() {

try {

const response = await fetch('https://jsonplaceholder.typicode.com/users');

const users = await response.json();

displayUsers(users);

} catch (error) {

const userList = document.querySelector('#user-list');

const errorMessage = document.createElement('li');

errorMessage.textContent = 'Failed to load user data. Please try again later.';

userList.appendChild(errorMessage);

console.error('Error fetching user data:', error);

}

}
fetchAndDisplayUsers();