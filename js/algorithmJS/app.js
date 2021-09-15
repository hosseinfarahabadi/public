const num = Number(prompt('please enter a number'));
let arr = [2]
if(num < 8 && num > 1){
    let x =1 ;
    for (let i = 0; i < num; i++) {
        
         x = x * 10 ;
      }
      let y =1 ;
    for (let i = 1; i < num; i++) {
        
         y = y * 10 ;
      }
    for (let i = 3; i < x; i++) {
        let flag = 0;
        for (let j = 0; j < arr.length; j++) {
              let vara = i % arr[j];
            if (vara == 0){
                flag =1;
            }
        }
        if (flag == 0){
            arr.push(i);
        }
    } 
    arr.map((item,i,arr) => {
        if(item > y){
        let valid  = Math.floor(item/10);
        let flag2 = 0 ;
        while(valid > 0 ){
            let check = arr.includes(valid);
            if (!check){
                flag2 = 1;
            }
            valid =  Math.floor(valid/10);
        }
        if (flag2 == 0 ){
            console.log(item)
       }

        }
    })
}else{
    alert('wrong number please enter number between 1 to 8')
}
