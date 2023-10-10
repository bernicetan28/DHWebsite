const name = document.getElementById('name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const desc = document.getElementById('desc');
const submit = document.getElementById('submitfindhelp');


formfindhelp.addEventListener('submit', (e) => {
    e.preventDefault();
    checkName();
    checkEmail();
    checkTel();
    checkDesc();
    validateSubmit();
});

function checkName(){
    var nameValue = document.getElementById('name').value;

    if(nameValue === ''){
        setErrorFor(name, 'Name is required');
        return false;
    } else {
        setSuccessFor(name, '');
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

function checkTel(){
    var telValue = document.getElementById('tel').value;

    if(telValue === ''){
        setErrorFor(tel, 'Phone number is required');
        return false;
    } else {
        setSuccessFor(tel, '');
        return true;
    }
}

function checkDesc(){
    var descValue = document.getElementById('desc').value;

    if(descValue === ''){
        setErrorFor(desc, 'Please describe what you need help with');
        return false;
    } else if(descValue.length < 15) {
        setErrorFor(desc, 'Must be at least 15 characters');
        return false;
    } else {
        setSuccessFor(desc, '');
        return true;
    }
}

function validateSubmit(){
    if(checkName() && checkEmail() && checkTel() && checkDesc()){
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

