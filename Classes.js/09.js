function solve(arr){

    let obj = {};
    let res = {};
    let str = ''
    for(let line of arr){
        let[cars,model,qty] = line.split(' | ');
        qty = Number(qty);

       if(!obj[cars]){
           obj[cars] = [];
       }
       obj[cars].push({model,qty})
       
       
        
    }
    Object.entries(obj).forEach(([key , value]) =>{
        str = `${key.trim()}\n`
        value.forEach(el =>{
          
            str += `###${el['model']} -> ${el['qty']}\n`
        })
        console.log(str.trim());
    })

}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])
