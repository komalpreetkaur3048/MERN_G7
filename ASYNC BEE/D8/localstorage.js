// ================================
// Get all users from Local Storage
// ================================
function getUsers() {

    let users = JSON.parse(localStorage.getItem("users"));

    if (users == null) {
        users = [];
    }

    return users;
}

// =================================
// Save users to Local Storage
// =================================
function saveUsers(users) {

    localStorage.setItem("users", JSON.stringify(users));

}

// =================================
// Register User
// =================================
function registerUser(email, password) {

    let users = getUsers();

    // some() -> checks if user already exists
    let exists = users.some(function(user) {
        return user.email === email;
    });

    if (exists) {
        return "exists";
    }

    let newUser = {
        email: email,
        password: password
    };

    users.push(newUser);

    saveUsers(users);

    return "success";
}

// =================================
// Login User
// =================================
function loginUser(email, password) {

    let users = getUsers();

    // find() -> returns the first matching user
    let user = users.find(function(user) {
        return user.email === email;
    });

    if (!user) {
        return "notfound";
    }

    // Compare Password
    if (user.password !== password) {
        return "wrongpassword";
    }

    // Save Logged-in User
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    return "success";
}

// =================================
// Get Logged-in User
// =================================
function getLoggedInUser() {

    return JSON.parse(localStorage.getItem("loggedInUser"));

}

// =================================
// Logout User
// =================================
function logoutUser() {

    localStorage.removeItem("loggedInUser");

}

// =================================
// Search User using filter()
// Example: searchUser("gmail")
// =================================
function searchUser(text) {

    let users = getUsers();

    let result = users.filter(function(user) {

        return user.email.toLowerCase().includes(text.toLowerCase());

    });

    return result;

}