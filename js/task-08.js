const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!');
    }
    const object = {email: email.value, password: password.value};
    console.log(object);
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
   
}
h