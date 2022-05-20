// Selecting DOM elements
const element = document.getElementById('content');
document.querySelectorAll('#content');
document.querySelectorAll('ul li');

// Get/Set content
element.textContent;
element.value;

//Traversing DOM
element.parentElement;
element.children;

//Create element
const paragraph = document.createElement('p');

//Adding to DOM
element.appendChild(paragraph);

// Removing from DOM
element.remove();

// Events
element.addEventListener('click', ev => {
   console.log(ev.target.className)
});
//Most common events:
//  click
//  mousemove
//  focus - when we select an input field
//  blur - when we unselect an input field
//  change - fire on <input>, <select> and <textarea> elements when an alternation to the element value is committed