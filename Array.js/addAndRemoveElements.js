function addAndRemoveElements(arr){
    let array = []
    for(let i = 0 ; i < arr.length;i++){
        let sum = 1;
        let command = arr[i];
        if(command == 'add'){
           sum += i;
           array.push(sum);
        }
        if(command == 'remove'){
            array.pop();
        }
    }
    if(array.length == 0){
        console.log('Empty');
    }else{
        for(let line of array){
            console.log(line);
        }
    } 
}
addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add'])
addAndRemoveElements(['add', 
'add', 
'add', 
'add'])
