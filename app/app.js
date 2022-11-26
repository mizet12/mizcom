let userNick = null;
const socket = io('ws://localhost:8080');

const joinForm = document.getElementById("join_form");
const messageForm = document.getElementById("message_form");
const messagesContainer = document.getElementById("messages");
function saveNick() {
    const nickInput = document.getElementById("nick");
    if(!nickInput.value?.trim()) return;
    userNick = nickInput.value;
    joinForm.style.display = "none";
    messageForm.style.display = "block";

    const socket = io("ws://localhost:8080");
    socket.on("sendMessage", (nick, text) => {
        const el = document.createElement("div");
        el.classList.add("message");
        el.innerText = `${nick}: ${text}`;
        messagesContainer.appendChild(el);
    });
    socket.on("userJoin", (nick) => {
        const el = document.createElement("div");
        el.classList.add("announcment");
        el.innerText = `${nick} dołączył na chat`;
        messagesContainer.appendChild(el);
    });
    socket.emit("userJoin", userNick);
}
const sendMessageInput = document.getElementById("text");
sendMessageInput.addEventListener("keypress", (e) => {
    console.log(e)
     if(e.key === "Enter" && e.target.value?.trim()) {
         sendMessage(userNick, e.target.value);
        e.target.value = "";
     }
});

function sendMessage(name, text) {
    socket.emit("sendMessage", name, text);
}




let isDarkModeEnabled = false;
const switchModeButton = document.getElementById("switch_image");
const joinChatButton = document.getElementById("joinChat");

switchModeButton.addEventListener('click', () => {
    const elements = [
        document.querySelector("body"),
        ...document.querySelectorAll("input"), 
        ...document.querySelectorAll("button")
    ];

    elements.forEach(el => {
        el.style.backgroundColor = isDarkModeEnabled ? "#ffffff" : "#434343";
        el.style.color = isDarkModeEnabled ? "black" : "white";
        switchModeButton.style.border = isDarkModeEnabled ? "0px" : "1px solid black";
        switchModeButton.style.borderRadius = isDarkModeEnabled ? "0%" : "15%"
        switchModeButton.style.backgroundColor = isDarkModeEnabled ? "#" : "white";
        joinChatButton.style.backgroundColor = isDarkModeEnabled ? "rgb(207, 207, 207)" : "rgb(102, 102, 102)";

    });

    switchModeButton.src = isDarkModeEnabled ? "icons/dark_mode.png" : "icons/light_mode.jpg";
    isDarkModeEnabled = !isDarkModeEnabled;
});