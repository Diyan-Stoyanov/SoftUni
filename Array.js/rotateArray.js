function rotateArray(arr,n){

    for(let i = 0;i < n;i++){
        let el = arr.pop();
        arr.unshift(el)
    }
    console.log(arr.join(' '));
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)