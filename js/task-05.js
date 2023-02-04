const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),

};
refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    if (event.currentTarget.value < 1) {
        refs.nameLabel.textContent = 'Anonymous';

    } else {
        refs.nameLabel.textContent = event.currentTarget.value;
    }
}
h