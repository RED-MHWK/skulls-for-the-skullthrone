
console.log('Was loaded');

/*
function waitSync(milliSeconds) {
    milliSeconds += new Date().getTime();
    while (new Date() < milliSeconds){}
}

waitSync(10000)
console.log('time elapsed')

const wait = (milliSeconds) => return new Promise((resolve, reject)=> setTimeout(resolve, milliSeconds))
*/

const btnShow = document.querySelector('#btnShow');
const btnElement = document.querySelector("button")

function handleClick (event){
    const paragraphText = document.querySelector('#paragraphText');
    paragraphText.classList.toggle('hidden');
    if (btnElement.innerText === 'Hide') {
        btnElement.innerText = 'Show';
    }
    else{
        btnElement.innerText = 'Hide';
    }
}

btnShow.addEventListener('click', handleClick);



const loginForm = document.querySelector('#loginForm')

function handleSubmit(event){
    const formData = new FormData(loginForm);
    const userName = formData.get('username');
    const errorUsername = document.querySelector('#errorUsername');
    console.log(userName);

    if(userName.indexOf('@') < 0){
        errorUsername.classList.remove('hidden')
    }
else{
    errorUsername.classList.add('hidden');
    }
    event.preventDefault();
}

loginForm.addEventListener('submit', handleSubmit);


//btnShow.addEventListener('mousedown', handleClick);
//btnShow.addEventListener('mouseup', handleClick);

//const bodyElement = document.querySelector('body')

//const h1Element = document.createElement('h1');
//h1Element.innerText = 'Henlo there';
//h1Element.innerHTML = '<a href="#">Hello world!</a>'
//const aElement = document.querySelector('a');

//bodyElement.appendChild(h1Element);

//bodyElement.innerText = 'Changed';

//bodyElement.classList.toggle('color1');

//h1Element.classList.toggle('color2');



