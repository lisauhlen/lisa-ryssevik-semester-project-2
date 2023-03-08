import { listKey, tokenKey, userKey } from "./../../settings/settings.js";

//Save and retrieve image URL for uploaded images
export function saveImgURL(key, url) {
    localStorage.setItem(key, url);
}

export function getImgURL(key) {
    return localStorage.getItem(key);
}


//Save and retrieve login details 
export function saveToken(token) {
    saveToStorage(tokenKey, token);
}

export function getToken() {
    return retrieveFromStorage(tokenKey);
}

export function saveUser(user) {
    saveToStorage(userKey, user);
}

export function getUsername(){
    const user = retrieveFromStorage(userKey);

    if(user) {
        return user.username;
    }

    return null;
}


//Log out from Admin Panel
export function removeItemFromStorage(key) {
    localStorage.removeItem(key);
}


//Add products to cart and get cart list
export function saveProduct(product) {
    saveToStorage(listKey, product);
}

export function getCartList() {
    return retrieveFromStorage(listKey);
}


//Save and retrieve from local storage
function saveToStorage(key, valueToSave) {
    localStorage.setItem(key, JSON.stringify(valueToSave));
}

function retrieveFromStorage(key) {
    const value = localStorage.getItem(key);

    if(!value) {
        return [];
    }

    return JSON.parse(value);
}