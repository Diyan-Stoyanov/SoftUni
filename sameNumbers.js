function sameNumbers(input){
    let str = input.toString();
    let isSame = true;
    let sum = 0
    for(let i = 0;i < str.length;i++){
        let current = str[i]
        let next = str[i+1]
        if(str[i]!==str[i+1] && next!==undefined){
            isSame = false;
        }
        
        sum += Number(str[i])
    }
    console.log(isSame);
    console.log(sum);


}

sameNumbers(2222222)
sameNumbers(1234)
