function filtraPares(arr) {
return arr.filter(function(item){
return item % 2 === 0;});
}

const meuArray = [1, 23, 55, 63, 40, 22, 6];

console.log(filtraPares(meuArray));