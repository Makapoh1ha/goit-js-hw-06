const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', inputBlur);
function inputBlur(event) {
    const inputLength = event.currentTarget.value.length;
    if (inputLength === Number(inputEl.dataset.length)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');

    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');

    }
}
h