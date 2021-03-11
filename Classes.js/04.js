class List{
    constructor(){
        this.size = 0;
        this.list = [];
    }
    add(el){
        this.list.push(el);
        this.size++;
        this.list.sort((a,b) => a - b);
    }
    remove(i){
        if(i >= 0 && i < this.size){
            this.list.splice(i,1);
            this.size--;
        }
    }
    get(i){
        if(i >= 0 && i < this.size){
            return this.list[i]
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
