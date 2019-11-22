class Keyboard {
  constructor() {
    this.main = null;
    this.name = null;
    this.textContainer = null;
    this.keysContainer = null;
    this.keys = [];
    this.rusLang = true;
    this.engLang = false;
    this.capsLock = false;
    this.result = null;
    this.sessionStorage = sessionStorage;
    this.count = 0;

    this.keyCodes = [
      192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 'Backspace',
      'Tab', 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 'Delete',
      'CapsLock', 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 'Enter',
      'Shift', 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 'ArrowUp', 'Shift',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Ctrl',
    ];

    this.controlKeys = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '];


    this.keysRusLower = [
      'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
      'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
      'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
      'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowBottom', 'ArrowRight', 'Ctrl',
    ];

    this.keysRusUpper = [
      'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
      'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Delete',
      'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
      'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'ArrowUp', 'Shift',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Ctrl',
    ];

    this.keysEngLower = [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
      'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
      'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
      'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', 'ArrowUp', 'Shift',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Ctrl',
    ];

    this.keysEngUpper = [
      '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
      'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete',
      'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
      'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<.', '>', '?', 'ArrowUp', 'Shift',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Ctrl',
    ];

    this.currentLayout = [
      'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
      'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
      'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
      'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Ctrl',
    ];
  }

  init() {
    // Create main elements
    this.name = document.createElement('h1');
    this.textContainer = document.createElement('textarea');

    this.main = document.createElement('div');
    this.keysContainer = document.createElement('div');

    // Setup main elements
    this.name.append('CodeJam Keyboard');
    this.name.classList.add('project__name');
    this.textContainer.classList.add('text__container', 'keyboard__input');
    this.main.classList.add('keyboard');
    this.keysContainer.classList.add('keyboard__keys');

    // Add to DOM
    document.body.append(this.name);
    document.body.append(this.textContainer);
    document.body.append(this.main);
    this.main.append(this.keysContainer);
  }

  createKeys() {
    const keyboardKeys = document.querySelector('.keyboard__keys');
    let buttons = '';
    for (let i = 0; i < this.currentLayout.length; i += 1) {
      if (i === 14 || i === 29 || i === 42 || i === 55) {
        buttons += '<div class="clearfix"></div>';
      }
      buttons += `<button class="keyboard__key" value='${this.currentLayout[i]}'>${this.currentLayout[i]}</button>`;
    }
    keyboardKeys.innerHTML = buttons;
    return keyboardKeys;
  }

  addFunctionality() {
    this.keys = document.querySelectorAll('.keyboard__key');
    const createIconHTML = (iconName) => `<i class="material-icons">${iconName}</i>`;
    document.querySelectorAll('.keyboard__key').forEach((key) => {
      this.result = '';
      switch (key.innerHTML) {
        case 'Backspace':
          key.classList.add('keyboard__key--wide');
          key.addEventListener('click', () => {
            const newText = `${this.textContainer.value.substring(0, this.textContainer.selectionStart - 1) + this.textContainer.value.substring(this.textContainer.selectionEnd)}`;
            const caretPos = this.textContainer.selectionStart - 1;
            this.textContainer.value = newText;
            this.result = this.textContainer.value;
            this.textContainer.setSelectionRange(caretPos, caretPos);
            this.textContainer.focus();
            this.writeSession();
          });
          break;

        case 'Tab':
          key.addEventListener('click', () => {
            const newText = `${this.textContainer.value.substring(0, this.textContainer.selectionStart)}\t${this.textContainer.value.substring(this.textContainer.selectionEnd)}`;
            const caretPos = this.textContainer.selectionStart + 1;
            this.textContainer.value = newText;
            this.result = this.textContainer.value;
            this.textContainer.setSelectionRange(caretPos, caretPos);
            this.textContainer.focus();
            this.writeSession();
          });
          break;

        case 'Delete':
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
            const newText = `${this.textContainer.value.substring(0, this.textContainer.selectionStart)}\n${this.textContainer.value.substring(this.textContainer.selectionEnd)}`;
            const caretPos = this.textContainer.selectionStart + 1;
            this.textContainer.value = newText;
            this.result = this.textContainer.value;
            this.textContainer.setSelectionRange(caretPos, caretPos);
            this.textContainer.focus();
            this.writeSession();
          });
          break;

        case 'Shift':
          key.classList.add('keyboard__key--wide');
          break;

        case 'ArrowUp':
          key.innerHTML = createIconHTML('arrow_drop_up');
          key.addEventListener('click', () => {
            const caretPos = this.textContainer.selectionStart - 191;
            this.textContainer.setSelectionRange(caretPos, caretPos);
            this.textContainer.focus();
            this.writeSession();
          });
          break;

        case 'ArrowLeft':
          key.innerHTML = createIconHTML('arrow_left');
          key.addEventListener('click', () => {
            const caretPos = this.textContainer.selectionStart - 1;
            this.textContainer.setSelectionRange(caretPos, caretPos);
            this.textContainer.focus();
            this.writeSession();
          });
          break;

        case 'ArrowRight':
          key.innerHTML = createIconHTML('arrow_right');
          key.addEventListener('click', () => {
            let caretPos = this.textContainer.selectionStart + 1;
            if (caretPos - 1 >= this.textContainer.value.length) {
              this.textContainer.value += ' ';
              caretPos += 1;
            }
            this.textContainer.setSelectionRange(caretPos, caretPos);
            this.textContainer.focus();
            this.writeSession();
          });
          break;

        case 'ArrowDown':
          key.innerHTML = createIconHTML('arrow_drop_down');
          key.addEventListener('click', () => {
            const caretPos = this.textContainer.selectionStart + 191;
            this.textContainer.setSelectionRange(caretPos, caretPos);
            this.textContainer.focus();
            this.writeSession();
          });
          break;

        case ' ':
          key.classList.add('keyboard__key--extra-wide');
          key.addEventListener('click', () => {
            const newText = `${this.textContainer.value.substring(0, this.textContainer.selectionStart) + this.textContainer.value.substring(this.textContainer.selectionEnd)}`;
            const caretPos = this.textContainer.selectionStart + 1;
            this.textContainer.value = newText;
            this.result = this.textContainer.value;
            this.textContainer.setSelectionRange(caretPos, caretPos);
            this.textContainer.focus();
            this.writeSession();
          });
          break;

        default:
          key.addEventListener('click', () => {
            const newText = `${this.textContainer.value.substring(0, this.textContainer.selectionStart) + key.innerHTML + this.textContainer.value.substring(this.textContainer.selectionEnd)}`;
            const caretPos = this.textContainer.selectionStart + 1;
            this.textContainer.value = newText;
            this.result = this.textContainer.value;
            this.textContainer.setSelectionRange(caretPos, caretPos);
            this.textContainer.focus();
            this.writeSession();
          });
          break;
      }
    });
  }

  fisicalBoard() {
    let keyValue;
    document.addEventListener('keydown', (event) => {
      const [keyName, keyCode, eventCode] = [event.key, event.keyCode, event.code];

      if (this.controlKeys.includes(keyName)) {
        document.querySelector(`.keyboard__key[value="${keyName}"]`).classList.add('active');
        if (keyName === 'CapsLock') {
          this.toggleCapsLock();
          document.querySelector(`.keyboard__key[value="${keyName}"]`).classList.toggle('keyboard__key--active');
        }
        this.inputEvent();
        this.writeSession();
      } else if (event.altKey && event.shiftKey) {
        this.toggleLanguage();

        if (eventCode === 'AltLeft') {
          document.querySelectorAll('.keyboard__key[value="Alt"]')[0].classList.add('active');
        }
        if (eventCode === 'AltRight') {
          document.querySelectorAll('.keyboard__key[value="Alt"]')[1].classList.add('active');
        }
        if (eventCode === 'ShiftLeft') {
          document.querySelectorAll('.keyboard__key[value="Shift"]')[0].classList.add('active');
        }
        if (eventCode === 'ShiftRight') {
          document.querySelectorAll('.keyboard__key[value="Shift"]')[1].classList.add('active');
        }
      } else if (eventCode === 'AltLeft') {
        document.querySelectorAll('.keyboard__key[value="Alt"]')[0].classList.add('active');
      } else if (eventCode === 'AltRight') {
        document.querySelectorAll('.keyboard__key[value="Alt"]')[1].classList.add('active');
      } else if (eventCode === 'ShiftLeft') {
        document.querySelectorAll('.keyboard__key[value="Shift"]')[0].classList.add('active');
      } else if (eventCode === 'ShiftRight') {
        document.querySelectorAll('.keyboard__key[value="Shift"]')[1].classList.add('active');
      } else if (eventCode === 'ControlLeft') {
        document.querySelectorAll('.keyboard__key[value="Ctrl"]')[0].classList.add('active');
      } else if (eventCode === 'ControlRight') {
        document.querySelectorAll('.keyboard__key[value="Ctrl"]')[1].classList.add('active');
      } else {
        event.preventDefault();
        const index = this.keyCodes.indexOf(keyCode);

        if (this.rusLang && this.capsLock) {
          keyValue = this.keysRusUpper[index];
        } else if (this.rusLang && !this.capsLock) {
          keyValue = this.keysRusLower[index];
        } else if (this.engLang && this.capsLock) {
          keyValue = this.keysEngUpper[index];
        } else if (this.engLang && !this.capsLock) {
          keyValue = this.keysEngLower[index];
        }

        const newText = `${this.textContainer.value.substring(0, this.textContainer.selectionStart) + keyValue + this.textContainer.value.substring(this.textContainer.selectionEnd)}`;
        const caretPos = this.textContainer.selectionStart + 1;
        this.textContainer.value = newText;
        this.result = this.textContainer.value;
        this.textContainer.setSelectionRange(caretPos, caretPos);
        this.textContainer.focus();
        document.querySelector(`.keyboard__key[value='${keyValue}']`).classList.add('active');
        this.inputEvent();
        this.writeSession();
      }
    });

    document.addEventListener('keyup', (event) => {
      const keyName = event.key;
      const eventCode = event.code;

      if (eventCode === 'AltLeft') {
        document.querySelectorAll('.keyboard__key[value="Alt"]')[0].classList.remove('active');
      } else if (eventCode === 'AltRight') {
        document.querySelectorAll('.keyboard__key[value="Alt"]')[1].classList.remove('active');
      } else if (eventCode === 'ShiftLeft') {
        document.querySelectorAll('.keyboard__key[value="Shift"]')[0].classList.remove('active');
      } else if (eventCode === 'ShiftRight') {
        document.querySelectorAll('.keyboard__key[value="Shift"]')[1].classList.remove('active');
      } else if (eventCode === 'ControlLeft') {
        document.querySelectorAll('.keyboard__key[value="Ctrl"]')[0].classList.remove('active');
      } else if (eventCode === 'ControlRight') {
        document.querySelectorAll('.keyboard__key[value="Ctrl"]')[1].classList.remove('active');
      } else if (this.controlKeys.includes(keyName)) {
        document.querySelector(`.keyboard__key[value='${keyName}']`).classList.remove('active');
      } else {
        document.querySelector(`.keyboard__key[value='${keyValue}']`).classList.remove('active');
      }
    });
  }

  inputEvent() {
    this.textContainer.oninput = () => {
      this.result = this.textContainer.value;
    };
  }

  toggleLayout() {
    // Create an array with indexes of navigation buttons (up, left, bottom, right)
    const navigationButtonInd = [53, 60, 61, 62];
    if (this.rusLang && !this.capsLock) {
      const keyboardKeys = document.querySelectorAll('.keyboard__key');
      this.currentLayout = this.keysRusLower;
      for (let i = 0; i < 64; i += 1) {
        if (navigationButtonInd.includes(i)) return;
        this.keys[i].textContent = this.keysRusLower[i];
        keyboardKeys[i].removeAttribute('value');
        keyboardKeys[i].setAttribute('value', this.keysRusLower[i]);
        keyboardKeys[i].textContent = this.keysRusLower[i];
      }
    } else if (this.rusLang && this.capsLock) {
      const keyboardKeys = document.querySelectorAll('.keyboard__key');
      this.currentLayout = this.keysRusUpper;
      for (let i = 0; i < 64; i += 1) {
        if (navigationButtonInd.includes(i)) return;
        this.keys[i].textContent = this.keysRusUpper[i];
        keyboardKeys[i].removeAttribute('value');
        keyboardKeys[i].setAttribute('value', this.keysRusUpper[i]);
        keyboardKeys[i].textContent = this.keysRusUpper[i];
      }
    } else if (this.engLang && !this.capsLock) {
      const keyboardKeys = document.querySelectorAll('.keyboard__key');
      this.currentLayout = this.keysEngLower;
      for (let i = 0; i < 64; i += 1) {
        if (navigationButtonInd.includes(i)) return;
        this.keys[i].textContent = this.keysEngLower[i];
        keyboardKeys[i].removeAttribute('value');
        keyboardKeys[i].setAttribute('value', this.keysEngLower[i]);
        keyboardKeys[i].textContent = this.keysEngLower[i];
      }
    } else if (this.engLang && this.capsLock) {
      const keyboardKeys = document.querySelectorAll('.keyboard__key');
      this.currentLayout = this.keysEngUpper;
      for (let i = 0; i < 64; i += 1) {
        if (navigationButtonInd.includes(i)) return;
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
    if (this.sessionStorage.getItem('text') !== null) {
      this.result = JSON.parse(this.sessionStorage.getItem('text'));
      this.textContainer.value = this.result;
    }
  }

  writeSession() {
    window.addEventListener('beforeunload', () => {
      this.sessionStorage.setItem('text', JSON.stringify(this.result));
    });
  }
}

const Final = new Keyboard();

window.addEventListener('load', () => {
  Final.init();
  Final.createKeys();
  Final.addFunctionality();
  Final.fisicalBoard();
  Final.getLastSession();
  Final.writeSession();
});
