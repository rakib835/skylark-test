let lastScrollTop='0';
navbar=document.getElementById('navbar');
window.addEventListener('scroll',function(){
    let scrollTop=window.pageYOffset||document
    .documentElement.scrollTop;
    if(scrollTop>lastScrollTop){
        navbar.style.top='-100%'
    }
    else{
        navbar.style.top='0'
    }
    lastScrollTop=scrollTop;
})

const icon=document.getElementById('icon');
const menu=document.getElementById('menu');
icon.onclick=function(){
    menu.classList.toggle('active');
    icon.classList.toggle('active');
}

const nav=document.querySelector('nav');
window.addEventListener('scroll',function(){
    nav.classList.toggle('sticky',window.scrollY>0);
})

