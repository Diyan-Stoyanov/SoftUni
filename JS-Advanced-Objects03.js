function price(arr){

    let obj = {};

    for(let el of arr){
        let line = el.split(' | ');
        let town = line[0];
        let fruit = line[1];
        let price = Number(line[2]);
         if(!obj[fruit] || price < obj[fruit].price){
            obj[fruit] = {
                town: town,
                price: price
            };
        }
            
    }
    for(let key in obj){
        console.log(`${key} -> ${obj[key].price} (${obj[key].town})`);
    }
}

price(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])
