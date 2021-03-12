function solve(arr){

    let obj = {};
    let buttles = {};
    
    for(let line of arr){
        let[juice , price] = line.split(' => ');
        price = Number(price);
        
        if(obj[juice]){
            obj[juice] += price;
        }else{
            obj[juice] = price;
        }
        if(obj[juice] >= 1000){
            buttles[juice] = 0;
        }
    }
    Object.keys(obj).forEach(el =>{
        if(buttles[el] !== undefined){
            buttles[el] = Math.floor(obj[el] / 1000);
        }
    })
    Object.keys(buttles).forEach(el =>{
        console.log(`${el} => ${buttles[el]}`);
    })

   
   
}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])
