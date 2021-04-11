function store(input){
    input.sort()
    let obj = {};
    for(let line of input){
        let [product,price] = line.split(' : ');

        price = Number(price);
        let group = product[0];
        if(!obj[group]){
            obj[group] = [];
        }
        obj[group].push({product,price});
    }
    Object.keys(obj).forEach(key=>{
        obj[key].sort((curr,next)=>curr.product.localeCompare(next.price))
    })

    Object.keys(obj)
    .sort((curr,next)=>curr.localeCompare(next))
    .forEach(key =>{
        console.log(key);
        obj[key].forEach(x =>console.log(`  ${x.product}: ${x.price}`))
    });
}

store(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])
