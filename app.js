class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.messages = [];
    }

    display() {
        const {openButton, chatBox, sendButton} = this.args;


        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1);

        var arr = ["Ayin", "Ayin nee eetha?", text1.concat(", ayin?"), "theernna?, veere onnum illeey",
                    "Ayin njan enna venam?, thaan poyi thante bf noodu talk", "Athang palleel pooyi paranja mathi",
                "Enn vachaa??","Nee poodi oole", "Edi manga thalachi nee aran?", "Vivaram undodo thanikk???","Nehppumma Love you, I truely Do. (lavann parayan paranju)","Athin neeyethan undakanni",
                    "Nee poodi managa thalachi", "Athendinaa nee ennodu parayunnee ? heh?", "Sugayirikk W, whith you."];

        let msg2 = { name: "Sam", message: arr[Math.floor(Math.random() * arr.length)] };
        this.messages.push(msg2);
        this.updateChatText(chatbox)
        textField.value = ''
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "Sam")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else
            {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
          });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}


const chatbox = new Chatbox();
chatbox.display();
