function inventory(arr){

   
    let result = [];
    for(let line of arr){
       let [name,level,items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
       
       result.push({name,level,items});
       
    }
    console.log(JSON.stringify(result));

}

inventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])
