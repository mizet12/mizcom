let userNick = null;

const joinForm = document.getElementById("join_form");
const messageForm = document.getElementById("message_form");
function saveNick() {
    const nickInput = document.getElementById("nick");
    if(!nickInput.value?.trim()) return;
    userNick = nickInput.value;
    joinForm.style.display = "none";
    messageForm.style.display = "block";
    console.log(userNick)
}

function sendMessage(nick, text) {
    socket.emit("sendMessage", nick, text);
}

const sendMessageInput = document.getElementById("text");
sendMessageInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter" && e.target.value?.trim()) {
        sendMessage(userNick, e.target.value);
        e.target.value = "";
    }
});

const socket = io("ws://localhost:8080");
const messagesContainer = document.getElementById("messages");
socket.on("sendMessage", (nick, text) => {
    const el = document.createElement("div");
    el.classList.add("message");
    el.innerText = `${nick}: ${text}`;
    messagesContainer.appendChild(el);
});

let isDarkModeEnabled = false;
const switchModeButton = document.getElementById("switch");
switchModeButton.addEventListener('click', () => {
    const elements = [
        document.querySelector("body"),
        ...document.querySelectorAll("input"), 
        ...document.querySelectorAll("button")
    ];

    elements.forEach(el => {
        el.style.backgroundColor = isDarkModeEnabled ? "#ffffff" : "#434343";
        el.style.color = isDarkModeEnabled ? "black" : "white";
    });

    switchModeButton.innerText = isDarkModeEnabled ? "dark mode" : "light mode";
    isDarkModeEnabled = !isDarkModeEnabled;
});