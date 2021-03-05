function sumTable() {
let result = document.getElementById('sum');
let tag = document.querySelectorAll('tr');
sum = 0;
for(let i = 1; i < tag.length-1 ; i++){
    sum += Number(tag[i].children[1].textContent)
}
result.textContent = sum;

}