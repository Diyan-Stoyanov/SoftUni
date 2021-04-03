function extraktFromArray(arr){

    let count = 0;
    let array = [];

    for(let i = 0 ; i < arr.length; i ++){
        let line = arr[i];
        if(line >= count){
            array.push(line);
            count = line;
        }

    }
    return array;
}

extraktFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])
