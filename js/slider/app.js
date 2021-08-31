// select images
const imageBox = document.querySelector('.image-box1');
const slideContain = document.querySelector(".slider_container");
const slideImageOrig = document.querySelector(".slider_box");
const slideImage = document.querySelector(".slider_box").children;
// select arrow
const arrowRight = document.querySelector(".slider_right");
const arrowLeft = document.querySelector(".slider_left ");

const arraySlideImage = Array.from(slideImage);

let addRight = 0;
// calculate width of slide
const imageBoxWidth = imageBox.clientWidth;
const slideImageLenth = arraySlideImage.length;
const finishSlideShow = -((slideImageLenth * imageBoxWidth) - 1100);


// click event slide show
// left side slide
arrowLeft.addEventListener("click",()=> {
  
    if (parseInt(slideImageOrig.style.right) < finishSlideShow){

          slideImageOrig.style.right = finishSlideShow -200 + "px";

    }else {

          addRight -= 300;
          slideImageOrig.style.right = addRight +"px";
    }
})
//right side slide
arrowRight.addEventListener("click",()=> {
    if( parseInt(slideImageOrig.style.right)  > -50 ){
      slideImageOrig.style.right = "20px";
  }else { 
    addRight +=300;
    slideImageOrig.style.right = addRight +"px";
  }
})
// mouse event slide show 



//bg color change
const randBgc = ['dodgerblue' , 'cadetblue' , 'darkslategray' , 'rgb(255, 136, 239)']

const btnBachground = document.querySelector('.btn');
btnBachground.addEventListener ('click',function(){
  console.log(getRandom());
  document.body.style.backgroundColor = randBgc[getRandom()];
})

function getRandom (){
  return Math.floor(Math.random()*randBgc.length) ;
}


