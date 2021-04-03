function listOfNames(arr){
    let count = 0;
    arr.sort((a,b)=> a.localeCompare(b))
    .forEach(el=> {
        count++
        console.log(`${count}.${el}`);
    });
   

}

listOfNames(["John", "Bob", "Christina", "Ema"])
