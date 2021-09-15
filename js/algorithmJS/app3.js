const a = Number(prompt('please'));
const b = Number(prompt('please'));
const c = Math.floor(a);
const d = Math.floor(b);
const diff = a - b ;
if(a == c && a > 0 && b > 0 && b == d){
 if (b < a ){
    if (diff % 2 == 0) {
        for (let i = 1; i <= a; i++) {
            let z = '';
            let y = diff/2;
            for (let j = 1; j <= a; j++) {
                if (j <= y || j > a - y || i <= y || i > a - y){
                    z += '*';                    
                }else{
                    z+=' ';
                }
    
            }
            console.log(z);
        }
    }else{
        alert('wrong Diffrence!')
    }

 }else{
    alert('wrong order')
 }
}else{
    alert('wrong number please enter number between 1 to 8')
}
