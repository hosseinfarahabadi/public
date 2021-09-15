const num = Number(prompt('please'));
if(num < 1e6 && num > 1){
    let x =Number(prompt('get'));
    let max = x;

    let min = x;

    let ave = 0;

    let sum = x;

    for (let i = 1; i < num; i++) {
         x =Number(prompt('get'));
        if (x > max){
            max = x;
        }
        if(x < min){
            min = x;
        }
        sum = x + sum;
     }
     ave = sum/Number(num);
     console.log(max,min,ave)

}else{
    alert('wrong number please enter number between 1 to 8')
}
