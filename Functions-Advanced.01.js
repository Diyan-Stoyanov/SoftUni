function solve(arr){
    let res = [];
    for(let line of arr){
       
       let [command , name] = line.split(' ');
       if(command == 'add'){
           res.push(name);
       }else if(command == 'remove'){
          if(res.includes(name)){
              while(res.includes(name)){
                  let index = res.indexOf(name);
                  res.splice(index,1)
              }
          }
       }else{
           console.log(res.join(','));
       }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']
)
