function printEveryN(arr,n){
    let array = []
    for(let i = 0; i < arr.length; i+=n){
        array.push(arr[i])
        
    }
return array;
}
console.log(printEveryN(['dsa',
'asd', 
'test', 
'tset'], 
2));
