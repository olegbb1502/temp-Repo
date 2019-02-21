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

// portfolio info block

let items = document.querySelectorAll('.portfolio__container ul li');

items.forEach(item=>{
  let info = item.querySelector('.info');
  let link = item.querySelector('a');
  let close = info.querySelector('.close');
  let img = item.querySelector('.picture').getAttribute('src');
  let infoImage = info.querySelector('.container .img');
  console.log(img)
  infoImage.src = img;

  link.addEventListener('click', ()=>{
    info.classList.add('active');
  });
  close.addEventListener('click', ()=>{
    info.classList.remove('active');
  });
});


