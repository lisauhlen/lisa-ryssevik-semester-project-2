import { baseUrl } from "./settings/api.js"
import userMessages from "./components/commons/userMessages.js";
import { saveToken, saveUser} from "./components/commons/localStorage.js";
import { validateEmail, validateLength } from "./components/commons/validateForm.js";
import { displayCartIcon } from "./components/createHtml/cartIcon.js";

displayCartIcon();

const loginForm = document.querySelector("#admin-login");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const messageContainer = document.querySelector(".message-container");

// Validating the login details
loginForm.onsubmit = function(event) {
    event.preventDefault();

    messageContainer.innerHTML = "";

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(!validateEmail(emailValue)) {
        return userMessages("error", "Please provide a proper email address.", ".message-container");
    }

    if(!validateLength(passwordValue, 8)) {
        return userMessages("error", "Password must be at least eight characters.", ".message-container");
    }

    adminLogin(emailValue, passwordValue);
}


// Logging in to Admin Panel with POST request
async function adminLogin(email, password) {

    const loginUrl = baseUrl + "auth/local";

    const data = JSON.stringify({"identifier": email, "password": password})

    const options = {
        method: "POST",
        body: data, 
        headers: {
            "Content-Type": "application/json"
        }
    };


    try {
        const response = await fetch(loginUrl, options);

        const result = await response.json();

        if(result.user) {
            saveToken(result.jwt);
            saveUser(result.user);

            location.href = "adminPanel.html";
        }

        if(result.error) {
            const errorMessage = result.message[0].messages[0].message;
            userMessages("error", "Unable to login: " + errorMessage, ".message-container");
        }

    } catch(error) {
        console.log(error);
    }
}