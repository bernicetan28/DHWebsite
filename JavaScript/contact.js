const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const message = document.getElementById('message');

formfindhelp.addEventListener('submit', (e) => {
    e.preventDefault();
    checkFirstName();
    checkLastName();
    checkEmail();
    checkMessage();
    validateSubmit();
});

function checkFirstName(){
    var firstnameValue = document.getElementById('firstname').value;

    if(firstnameValue === ''){
        setErrorFor(firstname, 'First name is required');
        return false;
    } else {
        setSuccessFor(firstname, '');
        return true;
    }
}

function checkEmail(){
    var emailValue = document.getElementById('email').value;

    if(emailValue === ''){
        setErrorFor(email, 'E-mail is required');
        return false;

    } else if (!emailValue.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        setErrorFor(email, 'E-mail not valid');
        return false;
    
    } else {
        setSuccessFor(email, '');
        return true;
    }
}

function checkLastName(){
    var lastnameValue = document.getElementById('lastname').value;

    if(lastnameValue === ''){
        setErrorFor(lastname, 'Last name is required');
        return false;
    } else {
        setSuccessFor(lastname, '');
        return true;
    }
}

function checkMessage(){
    var messageValue = document.getElementById('message').value;

    if(messageValue === ''){
        setErrorFor(message, 'Please type message');
        return false;
    } else if(messageValue.length < 15) {
        setErrorFor(message, 'Must be at least 15 characters');
        return false;
    } else {
        setSuccessFor(message, '');
        return true;
    }
}

function validateSubmit(){
    if(checkFirstName() && checkLastName() && checkEmail() && checkMessage()){
        setSuccessFor(submitfindhelp, 'Successfully submitted');
        setTimeout(()=>{
            submitfindhelp.style.display = 'none';
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

