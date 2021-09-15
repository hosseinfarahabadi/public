const a = Number(prompt('please'));
const b = Number(prompt('please'));
const c = Number(prompt('please'));

if(a < 1e6 && a > 1 && c < 10 && c > 2 && b < 10 && b > 2 ){
    let sum = 0;
    let valid = a;
    let bb = 1;
    while(valid > 0){
        let temp =Math.floor(valid/10) ;
        let temp2 = valid - temp * 10;
        sum += temp2 * bb;
        valid = temp ;
        bb *= b ;
    }
    let sum1 = "";
    let valid1 = sum;
    while(valid1 > 0){
        let temp =Math.floor(valid1/c) ;
        let temp2 = valid1 - temp * c;
        sum1 = temp2 + sum1;
        valid1 = temp ;
    }
    console.log(sum1);
    


}else{
    alert('wrong number please enter number between 1 to 8')
}
