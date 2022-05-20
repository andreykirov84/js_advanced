function create(words) {
   const content = document.getElementById('content');
   content.addEventListener('click', makeVisible);
   for (let word of words) {
      const divElement = document.createElement('div');
      const parElement = document.createElement('p');
      parElement.textContent = word;
      parElement.style.display = "none";
      divElement.appendChild(parElement);
      content.appendChild(divElement);
   }
   function makeVisible(ev){
      ev.target.children[0].style.display = "";
   }
}