
console.log('Was loaded');

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