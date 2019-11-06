class Keyboard {
    constructor() {

        this.main = null;
        this.name = null;
        this.textContainer = null;
        this.keysContainer = null;
        this.keys = [];
        this.rusLang = true;
        this.engLang = false;
        // this.capsLock = false;
        this.result = null;
        this.sessionStorage = sessionStorage;
        this.count = 0;

        this.keysRusLower = [
            'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
            'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
            'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
            'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift',
            'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Bottom', 'Right', 'Ctrl'
        ],
        
        this.keysRusUpper = [
            'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
            'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
            'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
            'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Up', 'Shift',
            'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Bottom', 'Right', 'Ctrl'
        ],

        this.keysEngLower = [
            '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
            'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
            'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
            'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', 'Up', 'Shift',
            'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Bottom', 'Right', 'Ctrl'
        ],

        this.keysEngUpper = [
            '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
            'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
            'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
            'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Up', 'Shift',
            'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Bottom', 'Right', 'Ctrl'
        ],

        this.currentLayout = [
            'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
            'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
            'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
            'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift',
            'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Bottom', 'Right', 'Ctrl'
        ]
    }

    init() {
        //Create main elements
        this.name = document.createElement('h1');
        this.textContainer = document.createElement('textarea');
        //this.textContainer.setAttribute('type', 'text');
        this.main = document.createElement('div');
        this.keysContainer = document.createElement('div');

        //Setup main elements
        this.name.append(this.createName());
        this.name.classList.add("project__name");
        this.textContainer.classList.add('text__container', 'keyboard__input');
        this.main.classList.add("keyboard");
        this.keysContainer.classList.add("keyboard__keys");
 
        //Add to DOM
        document.body.append(this.name);
        document.body.append(this.textContainer);
        document.body.append(this.main);
        this.main.append(this.keysContainer);
    }

    createName() {
        return'CodeJam Keyboard';
    }

    createKeys() { 
        let keyboardKeys = document.querySelector('.keyboard__keys');
        let buttons = '';
        for (let i = 0; i < this.currentLayout.length; i++) {
            if (i == 14 || i == 29 || i == 42 || i == 55) {
                buttons += '<div class="clearfix"></div>';
            }
            buttons += `<button class="keyboard__key" value="${this.currentLayout[i]}">${this.currentLayout[i]}</button>`;      
        }
        keyboardKeys.innerHTML = buttons;
        return keyboardKeys;
    }

    addFunctionality() {
        
        this.keys = document.querySelectorAll('.keyboard__key');
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        }
        document.querySelectorAll('.keyboard__key').forEach(key => {
            
            this.result = '';
            switch(key.innerHTML) {
                    case 'Backspace':
                    key.classList.add('keyboard__key--wide');
                    key.addEventListener('click', () => {
                        let newText = this.textContainer.value.substring (0, this.textContainer.selectionStart - 1) + 
                        this.textContainer.value.substring (this.textContainer.selectionEnd);
                        let caretPos = this.textContainer.selectionStart - 1;
                        this.textContainer.value = newText;
                        this.result = this.textContainer.value;
                        this.textContainer.setSelectionRange(caretPos, caretPos);
                        this.textContainer.focus();
                        this.writeSession();  
                    });
                    break;

                case 'Tab':
                    key.addEventListener('click', () => {
                        let newText = this.textContainer.value.substring (0, this.textContainer.selectionStart) + 
                        '\t' + this.textContainer.value.substring (this.textContainer.selectionEnd);
                        let caretPos = this.textContainer.selectionStart + 1;
                        this.textContainer.value = newText;
                        this.result = this.textContainer.value;
                        this.textContainer.setSelectionRange(caretPos, caretPos);
                        this.textContainer.focus();
                        this.writeSession();  
                    });
                    break;

                case 'Del':
                    key.addEventListener('click', () => {
                        this.textContainer.value = '';
                        this.result = this.textContainer.value;
                        this.textContainer.focus();
                        this.writeSession(); 
                    });
                    break;

                case 'CapsLock':
                    key.classList.add('keyboard__key--wide', 'keyboard__key--wide--activatable');
                        key.addEventListener('click', () => {
                        this.toggleCapsLock();
                        key.classList.toggle('keyboard__key--active');
                    });
                    break;

                case 'Ctrl':
                    key.addEventListener('click', () => {
                        this.writeSession();   
                    });
                    break;

                case 'Alt':
                    key.addEventListener('click', () => {
                        this.toggleLanguage();
                    });
                    break;

                case 'Enter':
                    key.classList.add('keyboard__key--wide');
                    key.addEventListener('click', () => {
                        let newText = this.textContainer.value.substring (0, this.textContainer.selectionStart) + 
                        '\n' + this.textContainer.value.substring (this.textContainer.selectionEnd);
                        let caretPos = this.textContainer.selectionStart + 1;
                        this.textContainer.value = newText;
                        this.result= this.textContainer.value;
                        this.textContainer.setSelectionRange(caretPos, caretPos);
                        this.textContainer.focus();
                        this.writeSession();  
                        //'\n'
                    });
                    break;

                case 'Shift':
                    key.classList.add('keyboard__key--wide');
                    break;

                case 'Up':
                    key.innerHTML = createIconHTML('arrow_drop_up');
                    key.addEventListener('click', () => {
                        let caretPos = this.textContainer.selectionStart - 191;
                        this.textContainer.setSelectionRange(caretPos, caretPos);
                        this.textContainer.focus();
                        this.writeSession();
                    });
                    break;
    
                case 'Left':
                    key.innerHTML = createIconHTML('arrow_left');
                    key.addEventListener('click', () => {
                        let caretPos = this.textContainer.selectionStart - 1;
                        this.textContainer.setSelectionRange(caretPos, caretPos);
                        this.textContainer.focus();
                        this.writeSession(); 
                    });
                    break;
    
                case 'Right':
                    key.innerHTML = createIconHTML('arrow_right');
                    key.addEventListener('click', () => {
                        let caretPos = this.textContainer.selectionStart + 1;
                        if(caretPos - 1 >= this.textContainer.value.length) {
                            this.textContainer.value += ' ';
                            caretPos++;
                        }
                        this.textContainer.setSelectionRange(caretPos, caretPos);
                        this.textContainer.focus();
                        this.writeSession(); 
                    });
                    break;
    
                case 'Bottom':
                    key.innerHTML = createIconHTML('arrow_drop_down');
                    key.addEventListener('click', () => {
                        let caretPos = this.textContainer.selectionStart + 191;
                        this.textContainer.setSelectionRange(caretPos, caretPos);
                        this.textContainer.focus();
                        this.writeSession();
                    });
                    break;

                case ' ':
                    key.classList.add('keyboard__key--extra-wide');
                    key.addEventListener('click', () => {
                        let newText = this.textContainer.value.substring (0, this.textContainer.selectionStart) + 
                        ' ' + this.textContainer.value.substring (this.textContainer.selectionEnd);
                        let caretPos = this.textContainer.selectionStart + 1;
                        this.textContainer.value = newText;
                        this.result= this.textContainer.value;
                        this.textContainer.setSelectionRange(caretPos, caretPos);
                        this.textContainer.focus();
                        this.writeSession(); 
                    });
                    break;
    
                default: 
                    key.addEventListener('click', () => {
                        let newText = this.textContainer.value.substring (0, this.textContainer.selectionStart) + 
                        key.innerHTML + this.textContainer.value.substring (this.textContainer.selectionEnd);
                        let caretPos = this.textContainer.selectionStart + 1;
                        this.textContainer.value = newText;
                        this.result= this.textContainer.value;
                        this.textContainer.setSelectionRange(caretPos, caretPos);
                        this.textContainer.focus();
                        this.writeSession();  
                    });
                    break;
            }
        })
    }

    fisicalBoard() {
        
        document.addEventListener('keydown', (event) => {
            console.log(event);
            let keyName = event.key;
            let eventCode = event.code;
            
            if (keyName == 'Backspace') {
                document.querySelector('.keyboard__key[value="' + keyName + '"]').classList.add('active');
                this.inputEvent();
                this.writeSession(); 
            }

            else if (keyName == 'Tab') {
                this.inputEvent();
                this.writeSession();
                document.querySelector('.keyboard__key[value="' + keyName + '"]').classList.add('active');    
            }

            else if (keyName == 'Delete') {
                this.inputEvent();
                this.writeSession();
                document.querySelector('.keyboard__key[value="' + keyName + '"]').classList.add('active');    
            }

            else if (keyName == 'CapsLock') {
                this.toggleCapsLock();
                document.querySelector('.keyboard__key[value="' + keyName + '"]').classList.toggle('keyboard__key--active');
                document.querySelector('.keyboard__key[value="' + keyName + '"]').classList.add('active');    
            }

            else if (keyName == 'Enter') {
                this.inputEvent();
                this.writeSession();
                document.querySelector('.keyboard__key[value="' + keyName + '"]').classList.add('active');    
            }

            else if (keyName == 'Backspase') {
                this.inputEvent();
                this.writeSession();
                document.querySelector('.keyboard__key[value="' + keyName + '"]').classList.add('active');    
            }

            else if (event.altKey && event.shiftKey) {
                this.toggleLanguage();
                if (eventCode == 'AltLeft') {       
                    document.querySelectorAll('.keyboard__key[value="Alt"]')[0].classList.add('active');     
                }
                if (eventCode == 'AltRight') {
                    document.querySelectorAll('.keyboard__key[value="Alt"]')[1].classList.add('active');    
                }
                if (eventCode == 'ShiftLeft') {
                    document.querySelectorAll('.keyboard__key[value="Shift"]')[0].classList.add('active'); 
                }
                if (eventCode == 'ShiftRight') {
                    document.querySelectorAll('.keyboard__key[value="Shift"]')[1].classList.add('active');     
                }
            }

            else if (eventCode == 'AltLeft') {
                document.querySelectorAll('.keyboard__key[value="Alt"]')[0].classList.add('active');     
            }

            else if (eventCode == 'AltRight') {
                document.querySelectorAll('.keyboard__key[value="Alt"]')[1].classList.add('active');    
            }

            else if (eventCode == 'ShiftLeft') {
                document.querySelectorAll('.keyboard__key[value="Shift"]')[0].classList.add('active'); 
            }

            else if (eventCode == 'ShiftRight') {
                document.querySelectorAll('.keyboard__key[value="Shift"]')[1].classList.add('active');     
            }

            else if (eventCode == 'ControlLeft') {
                document.querySelectorAll('.keyboard__key[value="Ctrl"]')[0].classList.add('active');     
            }

            else if (eventCode == 'ControlRight') {
                document.querySelectorAll('.keyboard__key[value="Ctrl"]')[1].classList.add('active');     
            }

            else {
                //this.result += keyName;
                document.querySelector('.keyboard__key[value="' + keyName + '"]').classList.add('active');
                this.inputEvent();
                this.writeSession();
            }   
        })

        document.addEventListener('keyup', (event) => {
            let keyName = event.key;
            let eventCode = event.code;

            if (eventCode == 'AltLeft') {
                document.querySelectorAll('.keyboard__key[value="Alt"]')[0].classList.remove('active');
            }
            
            if (eventCode == 'AltRight') {
                document.querySelectorAll('.keyboard__key[value="Alt"]')[1].classList.remove('active');  
            }

            else if (eventCode == 'ShiftLeft') {
                document.querySelectorAll('.keyboard__key[value="Shift"]')[0].classList.remove('active');     
            }

            else if (eventCode == 'ShiftRight') {
                document.querySelectorAll('.keyboard__key[value="Shift"]')[1].classList.remove('active'); 
            }

            else if (eventCode == 'ControlLeft') {
                document.querySelectorAll('.keyboard__key[value="Ctrl"]')[0].classList.remove('active');     
            }

            else if (eventCode == 'ControlRight') {
                document.querySelectorAll('.keyboard__key[value="Ctrl"]')[1].classList.remove('active');     
            }

            else {
                document.querySelectorAll('.keyboard__key[value="' + keyName + '"]')[0].classList.remove('active'); 
            }         
        })  
    }

    inputEvent() {
        this.textContainer.oninput = () => {
            this.result = this.textContainer.value;  
        }
        console.log(this.textContainer.value);         
    }

    toggleLayout() {
        //Create an array with indexes of navigation buttons (up, left, bottom, right)
        const navigationButtonInd = [53, 60, 61, 62];
        if (this.rusLang && !this.capsLock) {
            let keyboardKeys = document.querySelectorAll('.keyboard__key');
            console.log(keyboardKeys);
            this.currentLayout = this.keysRusLower;
            for (let i = 0; i < 64; i++) {
                if(navigationButtonInd.includes(i)) return;
                this.keys[i].textContent = this.keysRusLower[i];
                keyboardKeys[i].removeAttribute('value');
                keyboardKeys[i].setAttribute('value', this.keysRusLower[i]);
                keyboardKeys[i].textContent = this.keysRusLower[i];
            }
        }
        else if (this.rusLang && this.capsLock) {
            let keyboardKeys = document.querySelectorAll('.keyboard__key');
            console.log(keyboardKeys);
            this.currentLayout = this.keysRusUpper;
            for (let i = 0; i < 64; i++) {
                if(navigationButtonInd.includes(i)) return;
                this.keys[i].textContent = this.keysRusUpper[i];
                keyboardKeys[i].removeAttribute('value');
                keyboardKeys[i].setAttribute('value', this.keysRusUpper[i]);
                keyboardKeys[i].textContent = this.keysRusUpper[i];
            }
        }
        else if (this.engLang && !this.capsLock) {
            let keyboardKeys = document.querySelectorAll('.keyboard__key');
            console.log(keyboardKeys);
            this.currentLayout = this.keysEngLower;
            for (let i = 0; i < 64; i++) {
                if(navigationButtonInd.includes(i)) return;
                this.keys[i].textContent = this.keysEngLower[i];
                keyboardKeys[i].removeAttribute('value');
                keyboardKeys[i].setAttribute('value', this.keysEngLower[i]);
                keyboardKeys[i].textContent = this.keysEngLower[i];
            }
        }
        else if (this.engLang && this.capsLock) {
            let keyboardKeys = document.querySelectorAll('.keyboard__key');
            console.log(keyboardKeys);
            this.currentLayout = this.keysEngUpper;
            for (let i = 0; i < 64; i++) {
                if(navigationButtonInd.includes(i)) return;
                this.keys[i].textContent = this.keysEngUpper[i];
                keyboardKeys[i].removeAttribute('value');
                keyboardKeys[i].setAttribute('value', this.keysEngUpper[i]);
                keyboardKeys[i].textContent = this.keysEngUpper[i];
            }
        }
    }

    toggleLanguage() {
        this.engLang = !this.engLang;
        this.rusLang = !this.rusLang;
        this.toggleLayout();
    }

    toggleCapsLock() {
        this.capsLock = !this.capsLock;
        this.toggleLayout();
    }

    getLastSession() {
        if(this.sessionStorage.getItem('a')) {
            console.log(this.sessionStorage.getItem('a'));
            this.result = JSON.parse(this.sessionStorage.getItem('a'));
            this.textContainer.value = this.result; 
        }
    }

    writeSession() {
        console.log(this.result);
        this.sessionStorage.setItem('a', JSON.stringify(this.result));
    }
}


let Final = new Keyboard();

window.addEventListener("load", function() {
    Final.init();  
    Final.createKeys();
    Final.addFunctionality();
    Final.fisicalBoard();
    Final.getLastSession();    
});









