let userNick = null;
const socket = io("ws://localhost:8080");
const joinForm = document.getElementById("join_form");
const messageForm = document.getElementById("message_form");
const messagesContainer = document.getElementById("messages");
const linkReg = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/;
const imageReg = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/;



function saveNick() {

    const nickInput = document.getElementById("nick");
    const nickData = document.getElementById("nick").value;

    if(!nickInput.value?.trim() || nickInput.value.length > 20)
     {
        alert("Podaj nick pomiędzy 1 a 20 znakami");
        return;
    }else{
        userNick = nickInput.value;
        joinForm.style.display = "none";
        messageForm.style.display = "flex";
        if(Notification !== 'granted'){
            Notification.requestPermission();
        }
    };

    function changeEmojis(tekst){
        let text
            if(tekst.includes(":burger:")){
                tekst = tekst.replace(':burger:', '🍔')
            }  if(tekst.includes(":happy:")){
                tekst = tekst.replace(":happy:", "😀" )
            }  if(tekst.includes(":wink:")){
                tekst = tekst.replace( ":wink:", "😉")
            }  if(tekst.includes(":zzz:")){
                tekst = tekst.replace(":zzz:", "😴")
            }  if(tekst.includes(":mmm:")){
                tekst = tekst.replace(":mmm:", "😑")
            }  if(tekst.includes(":angry:")){
                tekst = tekst.replace(":angry:", "😡")
            }  if(tekst.includes(":sad:")){
                tekst = tekst.replace(":sad:", "😢")
            }  if(tekst.includes(":freez:")){
                tekst = tekst.replace(":freez:", "🥶")
            }  if(tekst.includes(":moyai:")){
                tekst = tekst.replace(":moyai:", "🗿")
            }  if(tekst.includes(":hearth:")){
                tekst = tekst.replace(":hearth:", "❤️")
            }  if(tekst.includes(":blink:")){
                tekst = tekst.replace(":blink:", "✨")
            }  if(tekst.includes(":potato:")){
                tekst = tekst.replace(":potato:", "🥔")
            }  if(tekst.includes(":Victory:")){
                tekst = tekst.replace(":Victory:", "✌")
            }  if(tekst.includes(":tiruriru:")){
                tekst = tekst.replace(":tiruriru:", "🤙")
            }  if(tekst.includes(":left:")){
                tekst = tekst.replace(":left:", "👈")
            }  if(tekst.includes(":right:")){
                tekst = tekst.replace(":right:", "👉")
            }  if(tekst.includes(":flipoff:")){
                tekst = tekst.replace(":flipoff:", "🖕")
            }  if(tekst.includes(":highfive:")){
                tekst = tekst.replace(":highfive:", "🖐")
            }  if(tekst.includes(":ok:")){
                tekst = tekst.replace(":ok:", "👌")
            }  if(tekst.includes(":like:")){
                tekst = tekst.replace(":like:", "👍")
            }  if(tekst.includes(":dislike:")){
                tekst = tekst.replace(":dislike:", "👎")
            }  if(tekst.includes(":brofist:")){
                tekst = tekst.replace(":brofist:", "👊")
            }  if(tekst.includes(":hello:")){
                tekst = tekst.replace(":hello:", "👋")
            }  if(tekst.includes(":robo:")){
                tekst = tekst.replace(":robo:", "🦾")
            }  if(tekst.includes(":shocked:")){
                tekst = tekst.replace(":shocked:", "😱")
            }  if(tekst.includes(":poo:")){
                tekst = tekst.replace(":poo:", "💩")
            }  if(tekst.includes(":urokodaki:")){
                tekst = tekst.replace(":urokodaki:", "👺")
            }  if(tekst.includes(":oni:")){
                tekst = tekst.replace(":oni:", "👹")
            }  if(tekst.includes(":alien:")){
                tekst = tekst.replace(":alien:", "👽")
            }  if(tekst.includes(":skull:")){
                tekst = tekst.replace(":skull:", "☠")
            }  if(tekst.includes(":ghost:")){
                tekst = tekst.replace(":ghost:", "👻")
            }  if(tekst.includes(":eye:")){
                tekst = tekst.replace(":eye:", "👁")
            }  if(tekst.includes(":rainbow:")){
                tekst = tekst.replace(":rainbow:", "🌈")
            }  if(tekst.includes(":dik:")){
                tekst = tekst.replace(":dik:", "🍆")
            }  if(tekst.includes(":as:")){
                tekst = tekst.replace(":as:", "🍑")
            }  if(tekst.includes(":pizza:")){
                tekst = tekst.replace(":pizza:", "🍕")
            }  if(tekst.includes(":radio:")){
                tekst = tekst.replace(":radio:", "☢")
            }  if(tekst.includes(":virus:")){
                tekst = tekst.replace(":virus:", "☣")
            }  if(tekst.includes(":mad:")){
                tekst = tekst.replace(":mad:", "💢")
            }  if(tekst.includes(":ramen:")){
                tekst = tekst.replace(":ramen:", "🍜")
            }  if(tekst.includes(":onigiri:")){
                tekst = tekst.replace(":onigiri:", "🍙")
            }  if(tekst.includes(":sushi:")){
                tekst = tekst.replace(":sushi:", "🍣")
            }  if(tekst.includes(":naruto:")){
                tekst = tekst.replace(":naruto:", "🍥")
            }  if(tekst.includes(":lunch:")){
                tekst = tekst.replace(":lunch:", "🥡")
            }  if(tekst.includes(":donut:")){
                tekst = tekst.replace(":donut:", "🍩")
            }  if(tekst.includes(":cookie:")){
                tekst = tekst.replace(":cookie:", "🍪")
            }  if(tekst.includes(":gate:")){
                tekst = tekst.replace(":gate:", "⛩️")
            }  if(tekst.includes(":kanji:")){
                tekst = tekst.replace(":kanji:", "🉐")
            }  if(tekst.includes(":headphones:")){
                tekst = tekst.replace(":headphones:", "🎧")
            }  if(tekst.includes(":mugiwara:")){
                tekst = tekst.replace(":mugiwara:", "👒")
            }  if(tekst.includes(":pirate:")){
                tekst = tekst.replace(":pirate:", "🏴")
            }  if(tekst.includes(":meat:")){
                tekst = tekst.replace(":meat:", "🍖")
            }  if(tekst.includes(":dragon:")){
                tekst = tekst.replace(":dragon:", "🐉")
            }  if(tekst.includes(":yinyang:")){
                tekst = tekst.replace(":yinyang:", "☯", )
            }
            return text = tekst;
    }

    
    const socket = io("ws://localhost:8080");
    socket.on("chatHistory", (nick, tekst) =>{
        let text = changeEmojis(tekst); 
        
        if(text == "dołączył na chat"){
            const el = document.createElement("div");
            el.classList.add("announcment");
            el.innerText = `${nick} dołączył na chat`;
            messagesContainer.appendChild(el);
        }else if(imageReg.test(text) == true){
            const image = document.createElement("img");
            const el = document.createElement("div");
            el.classList.add("mess")
            image.classList.add("imageMessage")
            image.src = `${text}`;
            el.innerText = `${nick}:`;
            
            el.appendChild(image);
            messagesContainer.appendChild(el);
        }else if(linkReg.test(text) == true){
            const a = document.createElement("a");
            const el = document.createElement("div");
            // el.classList.add("links");
            a.href = `${text}`;
            el.innerText = `${nick}: `;
            a.innerText = `${text}`;
            el.appendChild(a);
            messagesContainer.appendChild(el);
        }else{
            const el = document.createElement("div");
            el.innerText = `${nick}: ${text}`;
            messagesContainer.appendChild(el);
        }
        scrollToBottom();

        
    })
    socket.on("sendMessage", (nick, tekst) => {
        let text = changeEmojis(tekst);
        if(imageReg.test(text) == true){
            if(userNick !== nickInput.value){
                alert("!Nie zmieniaj swojego nicku!");
                userNick = nickInput.value;
            }
            const image = document.createElement("img");
            const el = document.createElement("div");
            el.classList.add("mess")
            image.classList.add("imageMessage")
            image.src = `${text}`;
            el.innerText = `${nick}:`;
            
            el.appendChild(image);
            messagesContainer.appendChild(el);
            if(nick !== nickData){
                showNotifications();
            }
        }else if(linkReg.test(text) == true){
            if(userNick !== nickInput.value){
                alert("!Nie zmieniaj swojego nicku!");
                userNick = nickInput.value;
            }
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
        }else if(text == "👒🏴‍☠🍖" || text == "🍖🏴‍☠👒" || text == "🏴‍☠🍖👒" || text == "🏴‍☠👒🍖" || text == "🍖👒🏴‍☠" || text == "👒🍖🏴‍☠"){
            if(userNick !== nickInput.value){
                alert("!Nie zmieniaj swojego nicku!");
                userNick = nickInput.value;
            }
            document.getElementById("op").play();
            const el = document.createElement("div");
            el.classList.add("message");
            el.innerText = `${nick}: ${text}`;
            messagesContainer.appendChild(el);
            const image = document.createElement("img");
            const op = document.createElement("div");
            image.classList.add("imageMessage")
            image.src = "media/luffy.gif";
            op.appendChild(image);
            messagesContainer.appendChild(op);
            if(nick !== nickData){
                showNotifications();
            }
        }else if(text == "🍆🍑" || text == "🍑🍆"){
            if(userNick !== nickInput.value){
                alert("!Nie zmieniaj swojego nicku!");
                userNick = nickInput.value;
            }
            document.getElementById("moan").play();
            const el = document.createElement("div");
            el.classList.add("message");
            el.innerText = `${nick}: ${text}`;
            messagesContainer.appendChild(el);
            document.querySelector("body").style.backgroundImage = "url('media/ahe_gao.png')";
            document.querySelector("body").style.backgroundRepeat = "no-repeat";
            document.querySelector("body").style.backgroundPosition = "40% 25%";
            document.querySelector("body").style.backgroundSize = "1300px";
            // document.querySelector("body").style.backgroundPositionY = "10px";
            if(nick !== nickData){
                showNotifications();
            }
        }else{
            if(userNick !== nickInput.value){
                alert("!Nie zmieniaj swojego nicku!");
                userNick = nickInput.value;
            }
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

function sendMessage(name, tekst) {
    let text
    if(tekst.includes("🍔")){
        tekst = tekst.replace('🍔', ':burger:')
    }  if(tekst.includes("😀")){
        tekst = tekst.replace("😀", ":happy:")
    }  if(tekst.includes("😉")){
        tekst = tekst.replace("😉", ":wink:")
    }  if(tekst.includes("😴")){
        tekst = tekst.replace("😴", ":zzz:")
    }  if(tekst.includes("😑")){
        tekst = tekst.replace("😑", ":mmm:")
    }  if(tekst.includes("😡")){
        tekst = tekst.replace("😡", ":angry:")
    }  if(tekst.includes("😢")){
        tekst = tekst.replace("😢", ":sad:")
    }  if(tekst.includes("🥶")){
        tekst = tekst.replace("🥶", ":freez:")
    }  if(tekst.includes("🗿")){
        tekst = tekst.replace("🗿", ":moyai:")
    }  if(tekst.includes("❤️")){
        tekst = tekst.replace("❤️", ":hearth:")
    }  if(tekst.includes("✨")){
        tekst = tekst.replace("✨", ":blink:")
    }  if(tekst.includes("🥔")){
        tekst = tekst.replace("🥔", ":potato:")
    }  if(tekst.includes("✌")){
        tekst = tekst.replace("✌", ":Victory:")
    }  if(tekst.includes("🤙")){
        tekst = tekst.replace("🤙", ":tiruriru:")
    }  if(tekst.includes("👈")){
        tekst = tekst.replace("👈", ":left:")
    }  if(tekst.includes("👉")){
        tekst = tekst.replace("👉", ":right:")
    }  if(tekst.includes("🖕")){
        tekst = tekst.replace("🖕", ":flipoff:")
    }  if(tekst.includes("🖐")){
        tekst = tekst.replace("🖐", ":highfive:")
    }  if(tekst.includes("👌")){
        tekst = tekst.replace("👌", ":ok:")
    }  if(tekst.includes("👍")){
        tekst = tekst.replace("👍", ":like:")
    }  if(tekst.includes("👎")){
        tekst = tekst.replace("👎", ":dislike:")
    }  if(tekst.includes("👊")){
        tekst = tekst.replace("👊", ":brofist:")
    }  if(tekst.includes("👋")){
        tekst = tekst.replace("👋", ":hello:")
    }  if(tekst.includes("🦾")){
        tekst = tekst.replace("🦾", ":robo:")
    }  if(tekst.includes("😱")){
        tekst = tekst.replace("😱", ":shocked:")
    }  if(tekst.includes("💩")){
        tekst = tekst.replace("💩", ":poo:")
    }  if(tekst.includes("👺")){
        tekst = tekst.replace("👺", ":urokodaki:")
    }  if(tekst.includes("👹")){
        tekst = tekst.replace("👹", ":oni:")
    }  if(tekst.includes("👽")){
        tekst = tekst.replace("👽", ":alien:")
    }  if(tekst.includes("☠")){
        tekst = tekst.replace("☠", ":skull:")
    }  if(tekst.includes("👻")){
        tekst = tekst.replace("👻", ":ghost:")
    }  if(tekst.includes("👁")){
        tekst = tekst.replace("👁", ":eye:")
    }  if(tekst.includes("🌈")){
        tekst = tekst.replace("🌈", ":rainbow:")
    }  if(tekst.includes("🍆")){
        tekst = tekst.replace("🍆", ":dik:")
    }  if(tekst.includes("🍑")){
        tekst = tekst.replace("🍑", ":as:")
    }  if(tekst.includes("🍕")){
        tekst = tekst.replace("🍕", ":pizza:")
    }  if(tekst.includes("☢")){
        tekst = tekst.replace("☢", ":radio:")
    }  if(tekst.includes("☣")){
        tekst = tekst.replace("☣", ":virus:")
    }  if(tekst.includes("💢")){
        tekst = tekst.replace("💢", ":mad:")
    }  if(tekst.includes("🍜")){
        tekst = tekst.replace("🍜", ":ramen:")
    }  if(tekst.includes("🍙")){
        tekst = tekst.replace("🍙", ":onigiri:")
    }  if(tekst.includes("🍣")){
        tekst = tekst.replace("🍣", ":sushi:")
    }  if(tekst.includes("🍥")){
        tekst = tekst.replace("🍥", ":naruto:")
    }  if(tekst.includes("🥡")){
        tekst = tekst.replace("🥡", ":lunch:")
    }  if(tekst.includes("🍩")){
        tekst = tekst.replace("🍩", ":donut:")
    }  if(tekst.includes("🍪")){
        tekst = tekst.replace("🍪", ":cookie:")
    }  if(tekst.includes("⛩️")){
        tekst = tekst.replace("⛩️", ":gate:")
    }  if(tekst.includes("🉐")){
        tekst = tekst.replace("🉐", ":kanji:")
    }  if(tekst.includes("🎧")){
        tekst = tekst.replace("🎧", ":headphones:")
    }  if(tekst.includes("👒")){
        tekst = tekst.replace("👒", ":mugiwara:")
    }  if(tekst.includes("🏴")){
        tekst = tekst.replace("🏴", ":pirate:")
    }  if(tekst.includes("🍖")){
        tekst = tekst.replace("🍖", ":meat:")
    }  if(tekst.includes("🐉")){
        tekst = tekst.replace("🐉", ":dragon:")
    }  if(tekst.includes("☯")){
        tekst = tekst.replace("☯", ":yinyang:")
    }
    text = tekst;
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
document.getElementById("victory").addEventListener('click', () => {
    sendMessageInput.value += "✌"
})
document.getElementById("tiruriru").addEventListener('click', () => {
    sendMessageInput.value += "🤙"
})
document.getElementById("left").addEventListener('click', () => {
    sendMessageInput.value += "👈"
})
document.getElementById("right").addEventListener('click', () => {
    sendMessageInput.value += "👉"
})
document.getElementById("flipoff").addEventListener('click', () => {
    sendMessageInput.value += "🖕"
})
document.getElementById("highfive").addEventListener('click', () => {
    sendMessageInput.value += "🖐"
})
document.getElementById("ok").addEventListener('click', () => {
    sendMessageInput.value += "👌"
})
document.getElementById("like").addEventListener('click', () => {
    sendMessageInput.value += "👍"
})
document.getElementById("dislike").addEventListener('click', () => {
    sendMessageInput.value += "👎"
})
document.getElementById("brofist").addEventListener('click', () => {
    sendMessageInput.value += "👊"
})
document.getElementById("hello").addEventListener('click', () => {
    sendMessageInput.value += "👋"
})
document.getElementById("robo").addEventListener('click', () => {
    sendMessageInput.value += "🦾"
})
document.getElementById("shocked").addEventListener('click', () => {
    sendMessageInput.value += "😱"
})
document.getElementById("poo").addEventListener('click', () => {
    sendMessageInput.value += "💩"
})
document.getElementById("urokodaki").addEventListener('click', () => {
    sendMessageInput.value += "👺"
})
document.getElementById("oni").addEventListener('click', () => {
    sendMessageInput.value += "👹"
})
document.getElementById("alien").addEventListener('click', () => {
    sendMessageInput.value += "👽"
})
document.getElementById("skull").addEventListener('click', () => {
    sendMessageInput.value += "☠"
})
document.getElementById("ghost").addEventListener('click', () => {
    sendMessageInput.value += "👻"
})
document.getElementById("eye").addEventListener('click', () => {
    sendMessageInput.value += "👁"
})
document.getElementById("rainbow").addEventListener('click', () => {
    sendMessageInput.value += "🌈"
})
document.getElementById("dik").addEventListener('click', () => {
    sendMessageInput.value += "🍆"
})
document.getElementById("as").addEventListener('click', () => {
    sendMessageInput.value += "🍑"
})
document.getElementById("pizza").addEventListener('click', () => {
    sendMessageInput.value += "🍕"
})
document.getElementById("radio").addEventListener('click', () => {
    sendMessageInput.value += "☢"
})
document.getElementById("virus").addEventListener('click', () => {
    sendMessageInput.value += "☣"
})
document.getElementById("mad").addEventListener('click', () => {
    sendMessageInput.value += "💢"
})
document.getElementById("ramen").addEventListener('click', () => {
    sendMessageInput.value += "🍜"
})
document.getElementById("onigiri").addEventListener('click', () => {
    sendMessageInput.value += "🍙"
})
document.getElementById("sushi").addEventListener('click', () => {
    sendMessageInput.value += "🍣"
})
document.getElementById("naruto").addEventListener('click', () => {
    sendMessageInput.value += "🍥"
})
document.getElementById("lunch").addEventListener('click', () => {
    sendMessageInput.value += "🥡"
})
document.getElementById("donut").addEventListener('click', () => {
    sendMessageInput.value += "🍩"
})
document.getElementById("cookie").addEventListener('click', () => {
    sendMessageInput.value += "🍪"
})
document.getElementById("gate").addEventListener('click', () => {
    sendMessageInput.value += "⛩️"
})
document.getElementById("kanji").addEventListener('click', () => {
    sendMessageInput.value += "🉐"
})
document.getElementById("headphones").addEventListener('click', () => {
    sendMessageInput.value += "🎧"
})
document.getElementById("mugiwara").addEventListener('click', () => {
    sendMessageInput.value += "👒"
})
document.getElementById("pirate").addEventListener('click', () => {
    sendMessageInput.value += "🏴‍☠"
})
document.getElementById("meat").addEventListener('click', () => {
    sendMessageInput.value += "🍖"
})
document.getElementById("dragon").addEventListener('click', () => {
    sendMessageInput.value += "🐉"
})
document.getElementById("jingyang").addEventListener('click', () => {
    sendMessageInput.value += "☯"
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

sendMessageInput.addEventListener('click', () => {
    emojiDiv.style.display = "none";
})