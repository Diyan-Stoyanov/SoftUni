function create(words) {
   let parentDiv = document.querySelector('#content');

  
   for(let line of words){

      
      let div = document.createElement('div');
      let p = document.createElement('p');
       p.style.display = 'none'
      p.textContent = line;

      div.appendChild(p);
      div.addEventListener('click',onClick);
      parentDiv.appendChild(div)
      function onClick(e){

         p.style.display = 'block'
      }
      
      
   }
   
}