//  definition of variable
let counter = 0;
const cntDisplay  = document.querySelector('.cnt');
const btns        = document.querySelectorAll('.btn');
// programming start here
// click event
btns.forEach(function(arr){
    arr.addEventListener('click',function(e){
        const target = e.currentTarget.classList;
        if (target.contains('decrease')){
            counter--;
        }else if(target.contains('increase')){
            counter++;
        }else {
            counter = 0;
        }
        if (counter > 0){
            cntDisplay.style.color = 'green';
        }else if(counter < 0){
            cntDisplay.style.color = 'red';
        }else {
            cntDisplay.style.color = 'black';
        }
        cntDisplay.textContent = counter ;
    })
    
})





// decreaseBtn.addEventListener('click',function(){
//     counterDefault--;
//     const cntDecrease = cntDisplayNow + counterDefault;
//     cntDisplay.textContent = cntDecrease;
//     if (cntDecrease > 0){
//         cntDisplay.style.color = "green";

//     }else {
//         cntDisplay.style.color = "red";    
//     }
// })
// // Increase click event
// increaseBtn.addEventListener('click',function(){
//     counterDefault++;
//     const cntDecrease = cntDisplayNow + counterDefault;
//     cntDisplay.textContent = cntDecrease;
//     if (cntDecrease > 0){
//         cntDisplay.style.color = "green";
//     }else {
//         cntDisplay.style.color = "red";    
//     }
// })
// // Reset click event
// resetBtn.addEventListener('click',function(){
//     counterDefault = 0;
//     cntDisplay.textContent = counterDefault;
//     cntDisplay.style.color = "black";    
// })
