// Array containing all users
let users = [

    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    },

    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
    },

    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net"
    },

    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org"
    },

    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca"
    },

    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info"
    },

    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz"
    },

    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me"
    },

    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io"
    },

    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz"
    }

];


// Store users in localStorage only if they do not already exist
if (!localStorage.getItem("users")) {

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

}


// Get the container where user cards will be displayed
const userContainer =
    document.getElementById("user-container");


// Function to display all users
function displayUsers() {

    // Clear previous content
    userContainer.innerHTML = "";


    // Get users from localStorage
    let storedUsers =
        JSON.parse(localStorage.getItem("users")) || [];


    // Loop through every user
    storedUsers.forEach(function(user) {

        // Create a div for the card
        const card = document.createElement("div");

        // Add card class
        card.className = "card";


        // Add user information and button
        card.innerHTML = `

            <h2>${user.name}</h2>

            <p>
                <strong>Email:</strong>
                ${user.email}
            </p>

            <button onclick="addToCart(${user.id})">
                Add to Cart
            </button>

        `;


        // Add card to the page
        userContainer.appendChild(card);

    });

}


// Function to add a user to cart
function addToCart(id) {

    // Get users from localStorage
    let users =
        JSON.parse(localStorage.getItem("users")) || [];


    // Get existing cart
    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];


    // Find the selected user
    let selectedUser = users.find(function(user) {

        return user.id === id;

    });


    // If user does not exist, stop
    if (!selectedUser) {

        return;

    }


    // Check whether user is already in cart
    let alreadyExists = cart.some(function(user) {

        return user.id === id;

    });


    // Prevent duplicate users
    if (alreadyExists) {

        alert("User is already in the cart!");

        return;

    }


    // Add selected user to cart
    cart.push(selectedUser);


    // Save updated cart to localStorage
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    // Show success message
    alert("User added to cart successfully!");

}


// Display users when page loads
displayUsers();