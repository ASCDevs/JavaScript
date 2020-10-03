// Comparar dois arrays e retorna novo array com os itens não encontrados
// dentro dos dois arrays,

function diffArray(arr1,arr2){
    let newArr = [];
    for(let i=0;i<arr1.length;i++){
        let index = arr2.indexOf(arr1[i]);
        
        if(index!=-1){
            arr2.splice(index,1);
        }else{
            newArr.push(arr1[i]);
        }
    }
    newArr = newArr.concat(arr2);

    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

//Solução mais enxuta
function diff2(arr1,arr2){
    return arr1.concat(arr2).filter((item)=> !arr1.includes(item)||!arr2.includes(item));
}

console.log("\nSegunda solução\n");
console.log(diff2([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diff2(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diff2(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diff2([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));