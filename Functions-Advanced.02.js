function solve(){

    let text = '';
        return {
            append,
            removeStart,
            removeEnd,
            print
        }
    function append(n){
         text = text += n;
    }
    function removeStart(n){
      text = text.slice(n);
    }
    function removeEnd(n){
      text = text.slice(0,-n);
    }
    function print(n){
        console.log(text);
    }

}

let firstZeroTest = solve();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print()
