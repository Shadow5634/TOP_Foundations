// Query selector method is helpful to get the first element that matches a particular selector
// Note that it fetches only one match - the first match

let heading = document.querySelector('h1');
heading.textContent = 'Edited with JS';

// special sibling and child targeting is permitted with the returned element
let firstHeader = document.querySelector("#firstHeader");
firstHeader.nextElementSibling.textContent = 'para edited with js';

// Only affects the first match i.e. the first header
let headers = document.querySelector('.headers');
headers.style.color = 'red';

// you can normal css selectors and operators
let secondHeader = document.querySelector('p + .headers')
secondHeader.style.color = 'green'

let newPara = document.createElement('p');
newPara.textContent = 'Newly created para';
document.body.appendChild(newPara)

// set css properties to '' to remove inline/external css
let firstPara = document.querySelector('p')
firstPara.style.color = ''