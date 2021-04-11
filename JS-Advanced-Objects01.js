function calorieObject(arr){

    let obj = {};

    for(let i = 0; i < arr.length;i+=2){
        let el = arr[i];
        let num = Number(arr[i+1]);
        obj[el] = num;
        
    }
    console.log(obj);

}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
© 2021 GitHub, Inc.
