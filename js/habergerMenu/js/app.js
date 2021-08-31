const menuToggle = document.querySelector('.menu-bar');
const links = document.querySelector('.list-menu');
menuToggle.addEventListener('click',function(){
    
    if (links.classList.contains('add-animation')){
        links.classList.remove('add-animation');
    }else {
        links.classList.add('add-animation');
    }
})