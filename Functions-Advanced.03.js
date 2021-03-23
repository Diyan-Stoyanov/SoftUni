function solve(a){

    let sum = 0;
    sum += a;
    function add(a){
        sum += a;
        return add;
        
    }
    add.toString = () => sum;
    return add;

}
console.log(solve(3)(4));
