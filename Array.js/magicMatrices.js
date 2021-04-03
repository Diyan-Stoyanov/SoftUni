function magic(arr){

    arr1 = arr.shift();
    arr2 = arr.shift();
    arr3 = arr.shift();
    
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sumLine1 = arr1[0] + arr2[0] + arr3[0];
    let sumLine2 = arr1[1] + arr2[1] + arr3[1];
    let sumLine3 = arr1[2] + arr2[2] + arr3[2];
    let isValid = false;
    for(let line of arr1){
        sum1+=line;
    }
    for(let line of arr2){
        sum2+=line;
    }
    for(let line of arr3){
        sum3+=line;
    }
    if(sum1 == sum2 && sum2 == sum3 && sum3 == sumLine1 && sumLine1 == sumLine2 && sumLine2 == sumLine3){
        isValid = true;
    }
    console.log(isValid);



}

magic([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])
