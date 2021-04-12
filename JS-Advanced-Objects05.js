function townsToJason(arr){
   
    let name = arr.shift()
    let el = [];
    for(let line of arr){
        
        let [town,latitude,longitude] = line.split( '|' ).filter(x => x != "").map(x => x.trim());
        
        latitude = Number(Number(latitude).toFixed(2));
        longitude = Number(Number(longitude).toFixed(2));
        let obj = {
            Town: town,
            Latitude: latitude,
            Longitude: longitude
        }
       el.push(obj);
       
       
        

        
    }
console.log(JSON.stringify(el));
}

townsToJason(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])
