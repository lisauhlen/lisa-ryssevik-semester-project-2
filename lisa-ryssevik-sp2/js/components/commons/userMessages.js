export default function userMessages(messageType, message, messageContainer) {
    const container = document.querySelector(messageContainer);

    container.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}