function cooking(num,com1,com2,com3,com4,com5){
    num = Number(num);
    let arr = [com1,com2,com3,com4,com5];

    for(let i = 0 ; i < arr.length;i++){

        
        if(arr[i] == 'chop'){
            num /= 2;
        }else if(arr[i] == 'dice'){
           num = Math.sqrt(num);
        }else if(arr[i] == 'spice'){
            num += 1;
        }else if(arr[i] == 'bake'){
            num *= 3;
        }else if(arr[i] == 'fillet'){
            num =(num* 0.80).toFixed(1);
        }
       


       console.log(num);
    }
}

cooking('9', 'dice', 'spice', 'chop', 'bake','fillet')
