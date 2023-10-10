
const username = document.getElementById('username');
const password = document.getElementById('password');
const submit = document.getElementById('submitlogin');

formlogin.addEventListener('submit', (e) => {
    e.preventDefault();

    checkUsername();
    checkPassword();
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

function validateSubmit(){
    if(checkUsername() && checkPassword()){
        setSuccessFor(submitlogin, 'Successfully logged in');
        setTimeout(()=>{
            submitlogin.style.display = 'none';
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



