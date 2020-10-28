const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');        
const ipad = window.matchMedia('screen and (max-width:767px)');

ipad.addListener(validation);
validation(ipad); 

function validation(event){
    if(event.matches){
        burgerButton.addEventListener('click', hideShow)                    
    }else{
        burgerButton.removeEventListener('click', hideShow)                    
    }
}

function hideShow() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else { 
        menu.classList.add('is-active');
    }
}