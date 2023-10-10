const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const submit = document.getElementById('submitsignup');

formsignup.addEventListener('submit', (e) => {
    e.preventDefault();
    checkUsername();
    checkEmail();
    checkPassword();
    checkConfirmPassword();
    validateSubmit();
});


function checkUsername(){
    var usernameValue = document.getElementById('username').value;

    if(usernameValue === ''){
        setErrorFor(username, 'Please enter username');
        return false;

    } else if(usernameValue.length < 8){
        setErrorFor(username, 'Username must be more than 8 characters');
        return false;
    } else {
        setSuccessFor(username, '');
        return true;
    }
}

function checkEmail(){
    var emailValue = document.getElementById('email').value;

    if(emailValue === ''){
        setErrorFor(email, 'Please enter E-mail');
        return false;
        
    } else if (!emailValue.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        setErrorFor(email, 'E-mail not valid');
        return false;

    } else {
        setSuccessFor(email, '');
        return true;
    }
}

function checkPassword(){
    var passwordValue = document.getElementById('password').value;

    if(passwordValue === ''){
        setErrorFor(password, 'Please enter password');
        return false;

    } else if(passwordValue.length < 8){
        setErrorFor(password, 'Password must be more than 8 characters');
        return false;
    } else {
        setSuccessFor(password, '');
        return true;
    }
}

function checkConfirmPassword(){
    var confirmpasswordValue = document.getElementById('confirmpassword').value;
    var passwordValue = document.getElementById('password').value;

    if(confirmpasswordValue === ''){
        setErrorFor(confirmpassword, 'Please enter password again');
        return false;

    } else if(confirmpasswordValue !== passwordValue){
        setErrorFor(confirmpassword, 'Passwords do not match');
        return false;

    } else {
        setSuccessFor(confirmpassword, '');
        return true;
    }
}

function validateSubmit(){
    if(checkUsername() && checkEmail() && checkPassword() && checkConfirmPassword()){
        setSuccessFor(submitsignup, 'Sign up successful');
        setTimeout(()=>{
            submitsignup.style.display = 'none';
        },0);
    }
}


function setErrorFor(input, message){
    const controlinput = input.parentElement;
    const small = controlinput.querySelector('small');

    small.innerText = message;

    controlinput.className = 'controlinput error';
}

function setSuccessFor(input, message){
    const controlinput = input.parentElement;
    const small = controlinput.querySelector('small');
    small.innerText = message;
    controlinput.className = 'controlinput success';
}



