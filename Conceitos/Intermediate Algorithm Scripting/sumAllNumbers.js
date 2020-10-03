//Somando todos os números dado um certo alcance de um array de dois númeors

const arrays = [
    [1,4],
    [5,1],
    [3,9],
    [9,1],
    [5,10]
];
console.log(arrays);

function sumAll(arr){
    let sum = 0;
    arr.sort((a,b)=>{
        return a === b? 0 : a < b ? -1 : 1;
    });
    for(let i=arr[0];i<=arr[1];i++){
        sum+=i;
    }
    return sum;
}

const resultados = arrays.map((item)=> sumAll(item));
console.log(resultados);
