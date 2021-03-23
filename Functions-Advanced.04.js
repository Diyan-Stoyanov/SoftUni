function solve(data,criteria){


    data = JSON.parse(data);
    let[first,info] = criteria.split('-');
    let arr = [];
    for(let line of data){
        
        if(line[first] == info ){
            arr.push(line);

        }
        
    }
    for(let i = 0 ; i < arr.length;i++){
        
        console.log(`${i}. ${arr[i].first_name} ${arr[i].last_name} - ${arr[i].email}`);
    }
    
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')
