// person decleration
const reviews = [
    {
        id:1,
        name:'Hossein Ranjbar',
        job:'Web Developer',
        image : 'img/hossein.jpg',
        text : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, ullam perferendis veniam ipsam voluptatum magnam fuga, temporibus quaerat non assumenda magni, nemo sunt fugit placeat Doloremque eumtempore excepturi delectus.'
    },
    {
        id:1,
        name:'Mohammad Akbari',
        job:'UI Designer',
        image : 'img/mohammad.jpg',
        text : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, ullam perferendis veniam ipsam voluptatum magnam fuga, temporibus quaerat non assumenda magni'
    },
        {
        id:1,
        name:'Sara Khojaste',
        job:'Programmer',
        image : 'img/sara.jpg',
        text : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, ullam perferendis veniam ipsam voluptatum magnam fuga'
    },
        {
        id:1,
        name:'Bahare Arjmand',
        job:'Web Developer',
        image : 'img/bahare.jpg',
        text : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, ullam perferendis veniam ipsam voluptatum magnam fuga, temporibus quaerat non assumenda magni, nemo sunt fugit placeat Quibusdam, ullam perferendis veniam ipsam voluptatum magnam fuga, temporibus quaerat non assumenda magni, nemo sunt fugit placeat Quibusdam, ullam perferendis veniam ipsam voluptatum magnam fuga, temporibus quaerat non assumenda magni, nemo sunt fugit placeat'
    },
]
// variable define
const author = document.getElementById('author');
const job = document.getElementById('job');
const information = document.getElementById('info');
const avatar = document.getElementById('pic');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const randomBtn = document.querySelector('.random-btn');
// program start here
// set start item
let curentValue = 0;
// load initial item
window.addEventListener('DOMContentLoaded',function(){
    showPerson(curentValue);
})
// function for call person
function showPerson (){
    const item = reviews[curentValue];
    avatar.src = item.image;
    information.textContent = item.text;
    author.textContent = item.name ;
    job.textContent = item.job ;    
}
// show next person
next.addEventListener('click',function(){
    curentValue++;
        if (curentValue > reviews.length -1 ){
            curentValue = 0;
        }
    showPerson();
})
// show prev person
prev.addEventListener('click',function(){
    curentValue--;
    if (curentValue < 0){
        curentValue = reviews.length -1 ;
    }
    showPerson();
})
// show random person
randomBtn.addEventListener('click',function(){
    curentValue = Math.floor(Math.random()*reviews.length);
    showPerson();
})
