// mobile header button

let mobileButton = document.querySelector('.mobile-button');
let menu = document.querySelector('.nav');
let showMenu = false;

mobileButton.addEventListener('click', ()=>{
  if(!showMenu){
    mobileButton.classList.add('active');
    menu.classList.add('active');
    showMenu=true;
  }
  else{
    mobileButton.classList.remove('active');
    menu.classList.remove('active');
    showMenu=false;
  }
});

// active menu link

let bodyClass = document.querySelector('body').getAttribute('class');
let links = document.querySelectorAll('nav ul li a');

links.forEach(link=>{
  let className = link.getAttribute('class');
  link.classList.remove('active');
  if(className === bodyClass){
    link.classList.add('active')
  }
});


