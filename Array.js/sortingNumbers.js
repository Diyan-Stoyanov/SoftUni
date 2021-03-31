function sortingNumbers(arr){

        arr.sort((a,b)=>(a-b));
        let array = [];
        let el = arr.length/2;
        for(let i = 0;i < el;i++){
            let first = arr.shift();
            let second = arr.pop();
            array.push(first,second)
            
        }
        return array


}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));