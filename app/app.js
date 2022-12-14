let userNick = null;
const socket = io("ws://localhost:8080");
const joinForm = document.getElementById("join_form");
const messageForm = document.getElementById("message_form");
const messagesContainer = document.getElementById("messages");
const linkReg = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/;
const imageReg = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/;
const youTubeReg = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/



function saveNick() {

    const nickInput = document.getElementById("nick");
    const nickData = document.getElementById("nick").value;

    if(!nickInput.value?.trim() || nickInput.value.length > 20)
     {
        alert("Podaj nick pomiÄdzy 1 a 20 znakami");
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
                tekst = tekst.replace(':burger:', 'ð')
            }  if(tekst.includes(":happy:")){
                tekst = tekst.replace(":happy:", "ð" )
            }  if(tekst.includes(":wink:")){
                tekst = tekst.replace( ":wink:", "ð")
            }  if(tekst.includes(":zzz:")){
                tekst = tekst.replace(":zzz:", "ð´")
            }  if(tekst.includes(":mmm:")){
                tekst = tekst.replace(":mmm:", "ð")
            }  if(tekst.includes(":angry:")){
                tekst = tekst.replace(":angry:", "ð¡")
            }  if(tekst.includes(":sad:")){
                tekst = tekst.replace(":sad:", "ð¢")
            }  if(tekst.includes(":freez:")){
                tekst = tekst.replace(":freez:", "ð¥¶")
            }  if(tekst.includes(":moyai:")){
                tekst = tekst.replace(":moyai:", "ð¿")
            }  if(tekst.includes(":hearth:")){
                tekst = tekst.replace(":hearth:", "â¤ï¸")
            }  if(tekst.includes(":blink:")){
                tekst = tekst.replace(":blink:", "â¨")
            }  if(tekst.includes(":potato:")){
                tekst = tekst.replace(":potato:", "ð¥")
            }  if(tekst.includes(":Victory:")){
                tekst = tekst.replace(":Victory:", "â")
            }  if(tekst.includes(":tiruriru:")){
                tekst = tekst.replace(":tiruriru:", "ð¤")
            }  if(tekst.includes(":left:")){
                tekst = tekst.replace(":left:", "ð")
            }  if(tekst.includes(":right:")){
                tekst = tekst.replace(":right:", "ð")
            }  if(tekst.includes(":flipoff:")){
                tekst = tekst.replace(":flipoff:", "ð")
            }  if(tekst.includes(":highfive:")){
                tekst = tekst.replace(":highfive:", "ð")
            }  if(tekst.includes(":ok:")){
                tekst = tekst.replace(":ok:", "ð")
            }  if(tekst.includes(":like:")){
                tekst = tekst.replace(":like:", "ð")
            }  if(tekst.includes(":dislike:")){
                tekst = tekst.replace(":dislike:", "ð")
            }  if(tekst.includes(":brofist:")){
                tekst = tekst.replace(":brofist:", "ð")
            }  if(tekst.includes(":hello:")){
                tekst = tekst.replace(":hello:", "ð")
            }  if(tekst.includes(":robo:")){
                tekst = tekst.replace(":robo:", "ð¦¾")
            }  if(tekst.includes(":shocked:")){
                tekst = tekst.replace(":shocked:", "ð±")
            }  if(tekst.includes(":poo:")){
                tekst = tekst.replace(":poo:", "ð©")
            }  if(tekst.includes(":urokodaki:")){
                tekst = tekst.replace(":urokodaki:", "ðº")
            }  if(tekst.includes(":oni:")){
                tekst = tekst.replace(":oni:", "ð¹")
            }  if(tekst.includes(":alien:")){
                tekst = tekst.replace(":alien:", "ð½")
            }  if(tekst.includes(":skull:")){
                tekst = tekst.replace(":skull:", "â ")
            }  if(tekst.includes(":ghost:")){
                tekst = tekst.replace(":ghost:", "ð»")
            }  if(tekst.includes(":eye:")){
                tekst = tekst.replace(":eye:", "ð")
            }  if(tekst.includes(":rainbow:")){
                tekst = tekst.replace(":rainbow:", "ð")
            }  if(tekst.includes(":dik:")){
                tekst = tekst.replace(":dik:", "ð")
            }  if(tekst.includes(":as:")){
                tekst = tekst.replace(":as:", "ð")
            }  if(tekst.includes(":pizza:")){
                tekst = tekst.replace(":pizza:", "ð")
            }  if(tekst.includes(":radio:")){
                tekst = tekst.replace(":radio:", "â¢")
            }  if(tekst.includes(":virus:")){
                tekst = tekst.replace(":virus:", "â£")
            }  if(tekst.includes(":mad:")){
                tekst = tekst.replace(":mad:", "ð¢")
            }  if(tekst.includes(":ramen:")){
                tekst = tekst.replace(":ramen:", "ð")
            }  if(tekst.includes(":onigiri:")){
                tekst = tekst.replace(":onigiri:", "ð")
            }  if(tekst.includes(":sushi:")){
                tekst = tekst.replace(":sushi:", "ð£")
            }  if(tekst.includes(":naruto:")){
                tekst = tekst.replace(":naruto:", "ð¥")
            }  if(tekst.includes(":lunch:")){
                tekst = tekst.replace(":lunch:", "ð¥¡")
            }  if(tekst.includes(":donut:")){
                tekst = tekst.replace(":donut:", "ð©")
            }  if(tekst.includes(":cookie:")){
                tekst = tekst.replace(":cookie:", "ðª")
            }  if(tekst.includes(":gate:")){
                tekst = tekst.replace(":gate:", "â©ï¸")
            }  if(tekst.includes(":kanji:")){
                tekst = tekst.replace(":kanji:", "ð")
            }  if(tekst.includes(":headphones:")){
                tekst = tekst.replace(":headphones:", "ð§")
            }  if(tekst.includes(":mugiwara:")){
                tekst = tekst.replace(":mugiwara:", "ð")
            }  if(tekst.includes(":pirate:")){
                tekst = tekst.replace(":pirate:", "ð´")
            }  if(tekst.includes(":meat:")){
                tekst = tekst.replace(":meat:", "ð")
            }  if(tekst.includes(":dragon:")){
                tekst = tekst.replace(":dragon:", "ð")
            }  if(tekst.includes(":yinyang:")){
                tekst = tekst.replace(":yinyang:", "â¯")
            }
            return text = tekst;
    }

    function addStr(str, index, stringToAdd){
        return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
    }
    
    const socket = io("ws://localhost:8080");
    socket.on("chatHistory", (nick, tekst) =>{
        let text = changeEmojis(tekst); 
        
        if(youTubeReg.test(text)){
            const iframe = document.createElement("iframe")
            const el = document.createElement("div");
            const a = document.createElement("a")
            el2 = document.createElement("div")
            a.href = `${text}`;
            if(text.includes("https")){
                text = addStr(text, 24, "embed/");
            } else if(text.includes("http")){
                text = addStr(text, 23, "embed/");
            }
            if(text.includes("watch?v=")){
                text = text.replace("watch?v=", "")
            }
            a.innerText = `${text}`;
            el.innerText = `${nick}: `;
            el.appendChild(a);
            iframe.src = `${text}`;
            iframe.allow = "autoplay; encrypted-media";
            iframe.allowFullscreen = "1";
            el2.appendChild(el);
            el2.appendChild(iframe);
            messagesContainer.appendChild(el2)
        }else if(text == "doÅÄczyÅ na chat"){
            const el = document.createElement("div");
            el.classList.add("announcment");
            el.innerText = `${nick} doÅÄczyÅ na chat`;
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
        }else if(text == "ðð¥" || text == "ð¥ð"){
            if(userNick !== nickInput.value){
                alert("!Nie zmieniaj swojego nicku!");
                userNick = nickInput.value;
            }
            const el = document.createElement("div");
            el.classList.add("message");
            el.innerText = `${nick}: ${text}`;
            messagesContainer.appendChild(el);
            const image = document.createElement("img");
            const op = document.createElement("div");
            image.classList.add("imageMessage")
            image.src = "media/naruto.gif";
            op.appendChild(image);
            messagesContainer.appendChild(op);
            if(nick !== nickData){
                showNotifications();
            }
        }else if(text == "ðºð¹" || text == "ð¹ðº"){
            if(userNick !== nickInput.value){
                alert("!Nie zmieniaj swojego nicku!");
                userNick = nickInput.value;
            }
            const el = document.createElement("div");
            el.classList.add("message");
            el.innerText = `${nick}: ${text}`;
            messagesContainer.appendChild(el);
            const image = document.createElement("img");
            const op = document.createElement("div");
            image.classList.add("imageMessage")
            image.src = "media/demon-slayer.gif";
            op.appendChild(image);
            messagesContainer.appendChild(op);
            if(nick !== nickData){
                showNotifications();
            }
        }else if(text == "ðâ¯" || text == "â¯ð"){
            if(userNick !== nickInput.value){
                alert("!Nie zmieniaj swojego nicku!");
                userNick = nickInput.value;
            }
            const el = document.createElement("div");
            el.classList.add("message");
            el.innerText = `${nick}: ${text}`;
            messagesContainer.appendChild(el);
            const image = document.createElement("img");
            const op = document.createElement("div");
            image.classList.add("imageMessage")
            image.src = "media/goku.gif";
            op.appendChild(image);
            messagesContainer.appendChild(op);
            if(nick !== nickData){
                showNotifications();
            }
        }else if(text == "ðð´ââ ð" || text == "ðð´ââ ð" || text == "ð´ââ ðð" || text == "ð´ââ ðð" || text == "ððð´ââ " || text == "ððð´ââ "){
            if(userNick !== nickInput.value){
                alert("!Nie zmieniaj swojego nicku!");
                userNick = nickInput.value;
            }
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
        }else{
            if(text.includes("nigger")){
                text = text.replace("nigger", "n-word");
            }
            const el = document.createElement("div");
            el.innerText = `${nick}: ${text}`;
            messagesContainer.appendChild(el);
        }
        scrollToBottom();

        
    })
    socket.on("sendMessage", (nick, tekst) => {
        let text = changeEmojis(tekst);
        if(youTubeReg.test(text)){
            const iframe = document.createElement("iframe")
            const el = document.createElement("div");
            const a = document.createElement("a")
            el2 = document.createElement("div")
            a.href = `${text}`;
            if(text.includes("https")){
                text = addStr(text, 24, "embed/");
            } else if(text.includes("http")){
                text = addStr(text, 23, "embed/");
            }
            if(text.includes("watch?v=")){
                text = text.replace("watch?v=", "")
            }
            a.innerText = `${text}`;
            el.innerText = `${nick}: `;
            el.appendChild(a);
            iframe.src = `${text}`;
            iframe.allow = "autoplay; encrypted-media";
            iframe.allowFullscreen = "1";
            el2.appendChild(el);
            el2.appendChild(iframe);
            messagesContainer.appendChild(el2)
        }else if(imageReg.test(text) == true){
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
        }else if(text == "ðð´ââ ð" || text == "ðð´ââ ð" || text == "ð´ââ ðð" || text == "ð´ââ ðð" || text == "ððð´ââ " || text == "ððð´ââ "){
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
        }else if(text == "ðð" || text == "ðð"){
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
        }else if(text == "ðð¥" || text == "ð¥ð"){
            if(userNick !== nickInput.value){
                alert("!Nie zmieniaj swojego nicku!");
                userNick = nickInput.value;
            }
            const el = document.createElement("div");
            el.classList.add("message");
            el.innerText = `${nick}: ${text}`;
            messagesContainer.appendChild(el);
            const image = document.createElement("img");
            const op = document.createElement("div");
            image.classList.add("imageMessage")
            image.src = "media/naruto.gif";
            op.appendChild(image);
            messagesContainer.appendChild(op);
            if(nick !== nickData){
                showNotifications();
            }
        }else if(text == "ðºð¹" || text == "ð¹ðº"){
            if(userNick !== nickInput.value){
                alert("!Nie zmieniaj swojego nicku!");
                userNick = nickInput.value;
            }
            const el = document.createElement("div");
            el.classList.add("message");
            el.innerText = `${nick}: ${text}`;
            messagesContainer.appendChild(el);
            const image = document.createElement("img");
            const op = document.createElement("div");
            image.classList.add("imageMessage")
            image.src = "media/demon-slayer.gif";
            op.appendChild(image);
            messagesContainer.appendChild(op);
            if(nick !== nickData){
                showNotifications();
            }
        }else if(text == "ðâ¯" || text == "â¯ð"){
            if(userNick !== nickInput.value){
                alert("!Nie zmieniaj swojego nicku!");
                userNick = nickInput.value;
            }
            const el = document.createElement("div");
            el.classList.add("message");
            el.innerText = `${nick}: ${text}`;
            messagesContainer.appendChild(el);
            const image = document.createElement("img");
            const op = document.createElement("div");
            image.classList.add("imageMessage")
            image.src = "media/goku.gif";
            op.appendChild(image);
            messagesContainer.appendChild(op);
            if(nick !== nickData){
                showNotifications();
            }
        }else{
            if(userNick !== nickInput.value){
                alert("!Nie zmieniaj swojego nicku!");
                userNick = nickInput.value;
            }
            if(text.includes("nigger")){
                text = text.replace("nigger", "n-word");
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
              body: 'WiadomoÅÄ',
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
        el.innerText = `${nick} doÅÄczyÅ na chat`;
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
    if(tekst.includes("ð")){
        tekst = tekst.replace('ð', ':burger:')
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":happy:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":wink:")
    }  if(tekst.includes("ð´")){
        tekst = tekst.replace("ð´", ":zzz:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":mmm:")
    }  if(tekst.includes("ð¡")){
        tekst = tekst.replace("ð¡", ":angry:")
    }  if(tekst.includes("ð¢")){
        tekst = tekst.replace("ð¢", ":sad:")
    }  if(tekst.includes("ð¥¶")){
        tekst = tekst.replace("ð¥¶", ":freez:")
    }  if(tekst.includes("ð¿")){
        tekst = tekst.replace("ð¿", ":moyai:")
    }  if(tekst.includes("â¤ï¸")){
        tekst = tekst.replace("â¤ï¸", ":hearth:")
    }  if(tekst.includes("â¨")){
        tekst = tekst.replace("â¨", ":blink:")
    }  if(tekst.includes("ð¥")){
        tekst = tekst.replace("ð¥", ":potato:")
    }  if(tekst.includes("â")){
        tekst = tekst.replace("â", ":Victory:")
    }  if(tekst.includes("ð¤")){
        tekst = tekst.replace("ð¤", ":tiruriru:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":left:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":right:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":flipoff:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":highfive:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":ok:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":like:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":dislike:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":brofist:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":hello:")
    }  if(tekst.includes("ð¦¾")){
        tekst = tekst.replace("ð¦¾", ":robo:")
    }  if(tekst.includes("ð±")){
        tekst = tekst.replace("ð±", ":shocked:")
    }  if(tekst.includes("ð©")){
        tekst = tekst.replace("ð©", ":poo:")
    }  if(tekst.includes("ðº")){
        tekst = tekst.replace("ðº", ":urokodaki:")
    }  if(tekst.includes("ð¹")){
        tekst = tekst.replace("ð¹", ":oni:")
    }  if(tekst.includes("ð½")){
        tekst = tekst.replace("ð½", ":alien:")
    }  if(tekst.includes("â ")){
        tekst = tekst.replace("â ", ":skull:")
    }  if(tekst.includes("ð»")){
        tekst = tekst.replace("ð»", ":ghost:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":eye:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":rainbow:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":dik:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":as:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":pizza:")
    }  if(tekst.includes("â¢")){
        tekst = tekst.replace("â¢", ":radio:")
    }  if(tekst.includes("â£")){
        tekst = tekst.replace("â£", ":virus:")
    }  if(tekst.includes("ð¢")){
        tekst = tekst.replace("ð¢", ":mad:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":ramen:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":onigiri:")
    }  if(tekst.includes("ð£")){
        tekst = tekst.replace("ð£", ":sushi:")
    }  if(tekst.includes("ð¥")){
        tekst = tekst.replace("ð¥", ":naruto:")
    }  if(tekst.includes("ð¥¡")){
        tekst = tekst.replace("ð¥¡", ":lunch:")
    }  if(tekst.includes("ð©")){
        tekst = tekst.replace("ð©", ":donut:")
    }  if(tekst.includes("ðª")){
        tekst = tekst.replace("ðª", ":cookie:")
    }  if(tekst.includes("â©ï¸")){
        tekst = tekst.replace("â©ï¸", ":gate:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":kanji:")
    }  if(tekst.includes("ð§")){
        tekst = tekst.replace("ð§", ":headphones:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":mugiwara:")
    }  if(tekst.includes("ð´")){
        tekst = tekst.replace("ð´", ":pirate:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":meat:")
    }  if(tekst.includes("ð")){
        tekst = tekst.replace("ð", ":dragon:")
    }  if(tekst.includes("â¯")){
        tekst = tekst.replace("â¯", ":yinyang:")
    }
    text = tekst;
    socket.emit("sendMessage", name, text);
}

document.getElementById("hamburger").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("happy").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("wink").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("angry").addEventListener('click', () => {
    sendMessageInput.value += "ð¡"
})
document.getElementById("sleep").addEventListener('click', () => {
    sendMessageInput.value += "ð´"
})
document.getElementById("freez").addEventListener('click', () => {
    sendMessageInput.value += "ð¥¶"
})
document.getElementById("moyai").addEventListener('click', () => {
    sendMessageInput.value += "ð¿"
})
document.getElementById("hearth").addEventListener('click', () => {
    sendMessageInput.value += "â¤ï¸"
})
document.getElementById("blink").addEventListener('click', () => {
    sendMessageInput.value += "â¨"
})
document.getElementById("none").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("sad").addEventListener('click', () => {
    sendMessageInput.value += "ð¢"
})
document.getElementById("potato").addEventListener('click', () => {
    sendMessageInput.value += "ð¥"
})
document.getElementById("victory").addEventListener('click', () => {
    sendMessageInput.value += "â"
})
document.getElementById("tiruriru").addEventListener('click', () => {
    sendMessageInput.value += "ð¤"
})
document.getElementById("left").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("right").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("flipoff").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("highfive").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("ok").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("like").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("dislike").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("brofist").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("hello").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("robo").addEventListener('click', () => {
    sendMessageInput.value += "ð¦¾"
})
document.getElementById("shocked").addEventListener('click', () => {
    sendMessageInput.value += "ð±"
})
document.getElementById("poo").addEventListener('click', () => {
    sendMessageInput.value += "ð©"
})
document.getElementById("urokodaki").addEventListener('click', () => {
    sendMessageInput.value += "ðº"
})
document.getElementById("oni").addEventListener('click', () => {
    sendMessageInput.value += "ð¹"
})
document.getElementById("alien").addEventListener('click', () => {
    sendMessageInput.value += "ð½"
})
document.getElementById("skull").addEventListener('click', () => {
    sendMessageInput.value += "â "
})
document.getElementById("ghost").addEventListener('click', () => {
    sendMessageInput.value += "ð»"
})
document.getElementById("eye").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("rainbow").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("dik").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("as").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("pizza").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("radio").addEventListener('click', () => {
    sendMessageInput.value += "â¢"
})
document.getElementById("virus").addEventListener('click', () => {
    sendMessageInput.value += "â£"
})
document.getElementById("mad").addEventListener('click', () => {
    sendMessageInput.value += "ð¢"
})
document.getElementById("ramen").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("onigiri").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("sushi").addEventListener('click', () => {
    sendMessageInput.value += "ð£"
})
document.getElementById("naruto").addEventListener('click', () => {
    sendMessageInput.value += "ð¥"
})
document.getElementById("lunch").addEventListener('click', () => {
    sendMessageInput.value += "ð¥¡"
})
document.getElementById("donut").addEventListener('click', () => {
    sendMessageInput.value += "ð©"
})
document.getElementById("cookie").addEventListener('click', () => {
    sendMessageInput.value += "ðª"
})
document.getElementById("gate").addEventListener('click', () => {
    sendMessageInput.value += "â©ï¸"
})
document.getElementById("kanji").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("headphones").addEventListener('click', () => {
    sendMessageInput.value += "ð§"
})
document.getElementById("mugiwara").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("pirate").addEventListener('click', () => {
    sendMessageInput.value += "ð´ââ "
})
document.getElementById("meat").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("dragon").addEventListener('click', () => {
    sendMessageInput.value += "ð"
})
document.getElementById("jingyang").addEventListener('click', () => {
    sendMessageInput.value += "â¯"
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
        // document.querySelector("a").style.color = isDarkModeEnabled ? "#" : "rgb(0, 0, 118)";
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
