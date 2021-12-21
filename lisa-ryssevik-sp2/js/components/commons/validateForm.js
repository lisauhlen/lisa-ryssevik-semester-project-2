export function validateEmail(email) {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contolEmailInput = regEx.test(email);
    return contolEmailInput;
}

export function validateLength(value, len) {
    
    if(value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}