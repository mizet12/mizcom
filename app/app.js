let userNick = null;
const socket = io('ws://192.168.8.20:8080');

const joinForm = document.getElementById("join_form");
const messageForm = document.getElementById("message_form");
const messagesContainer = document.getElementById("messages");
const linkReg = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/;
function saveNick() {
    const nickInput = document.getElementById("nick");
    const nickData = document.getElementById("nick").value;
    if(!nickInput.value?.trim()) return;
    userNick = nickInput.value;
    joinForm.style.display = "none";
    messageForm.style.display = "block";
    if(Notification !== 'granted'){
        Notification.requestPermission();
    }

    const socket = io("ws://192.168.8.20:8080");
    socket.on("sendMessage", (nick, text) => {
        if(linkReg.test(text) == true){
            const a = document.createElement("a");
            const el = document.createElement("div")
            // el.classList.add("links");
            a.href = `${text}`;
            el.innerText = `${nick}:`;
            a.innerText = `${text}`;
            el.appendChild(a);
            messagesContainer.appendChild(el);
            if(nick !== nickData){
                showNotifications();
            }
        }else{
            const el = document.createElement("div");
            el.classList.add("message");
            el.innerText = `${nick}: ${text}`;
            messagesContainer.appendChild(el);
            if(nick !== nickData){
                showNotifications();
            }
        }
        scrollToBottom();
    });
    const showNotifications = () => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission();
          } else {
            const options = {
              body: 'Wiadomość',
            };
            const notification = new Notification('Notification', options);
            console.log("kom")
            notification.onclick = function () {
              window.open('192.168.8.20/mizcom/app');
            };
          }
    }
    const scrollToBottom = () => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
     }
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