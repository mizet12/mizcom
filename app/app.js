let userNick = null;
const socket = io('ws://localhost:8080');

const joinForm = document.getElementById("join_form");
const messageForm = document.getElementById("message_form");
const messagesContainer = document.getElementById("messages");
const body = document.getElementById("clickoff");
const linkReg = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/;
const imageReg = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/;
function saveNick() {
    const nickInput = document.getElementById("nick");
    const nickData = document.getElementById("nick").value;
    if(!nickInput.value?.trim()) return;
    userNick = nickInput.value;
    joinForm.style.display = "none";
    messageForm.style.display = "flex";
    body.style.display = "block";
    if(Notification !== 'granted'){
        Notification.requestPermission();
    }

    const socket = io("ws://localhost:8080");
    socket.on("sendMessage", (nick, text) => {
        if(imageReg.test(text) == true){
            const image = document.createElement("img");
            const el = document.createElement("div");
            // el.classList.add("links");
            image.src = `${text}`;
            el.innerText = `${nick}:`;
            
            el.appendChild(image);
            messagesContainer.appendChild(el);
            if(nick !== nickData){
                showNotifications();
            }
        }else if(linkReg.test(text) == true){
            const a = document.createElement("a");
            const el = document.createElement("div");
            // el.classList.add("links");
            a.href = `${text}`;
            el.innerText = `${nick}: `;
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

document.getElementById("hamburger").addEventListener('click', () => {
    sendMessageInput.value += "🍔"
})
document.getElementById("happy").addEventListener('click', () => {
    sendMessageInput.value += "😀"
})
document.getElementById("wink").addEventListener('click', () => {
    sendMessageInput.value += "😉"
})
document.getElementById("angry").addEventListener('click', () => {
    sendMessageInput.value += "😡"
})
document.getElementById("sleep").addEventListener('click', () => {
    sendMessageInput.value += "😴"
})
document.getElementById("freez").addEventListener('click', () => {
    sendMessageInput.value += "🥶"
})
document.getElementById("moyai").addEventListener('click', () => {
    sendMessageInput.value += "🗿"
})
document.getElementById("hearth").addEventListener('click', () => {
    sendMessageInput.value += "❤️"
})
document.getElementById("blink").addEventListener('click', () => {
    sendMessageInput.value += "✨"
})
document.getElementById("none").addEventListener('click', () => {
    sendMessageInput.value += "😑"
})
document.getElementById("sad").addEventListener('click', () => {
    sendMessageInput.value += "😢"
})
document.getElementById("potato").addEventListener('click', () => {
    sendMessageInput.value += "🥔"
})


let isDarkModeEnabled = false;
let isEmojiMenuShown = false;
const switchModeButton = document.getElementById("switch_image");
const joinChatButton = document.getElementById("joinChat");
const emojiImage = document.getElementById("emoji_image");
const emojiButton = document.getElementById("emoji_button");
const emojiDiv = document.getElementById("emoji_div");


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
        emojiButton.style.border = isDarkModeEnabled ? "1px solid black" : "1px solid white";
        emojiDiv.style.backgroundColor = isDarkModeEnabled ? "rgb(207, 207, 207)" : "rgb(88, 88, 88)";
    });

    switchModeButton.src = isDarkModeEnabled ? "icons/dark_mode.png" : "icons/light_mode.jpg";
    emojiImage.src = isDarkModeEnabled ? "icons/emoji_d.png" : "icons/emoji_l.png";
    isDarkModeEnabled = !isDarkModeEnabled;
});

emojiButton.addEventListener('click', () => {

    const elements = [
        document.getElementById("emoji_div")
    ];

    elements.forEach(el => {
        el.style.display = isEmojiMenuShown ? "none" : "block";
    })
    isEmojiMenuShown = !isEmojiMenuShown;
});

body.addEventListener('click', () => {
    emojiDiv.style.display = "none";
})
