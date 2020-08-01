// o método parseInt(str,raiz) pode receber a raiz de 2 a 36
// parseInt("10011",2) irá retornar do binário o número 19 
function exemplo(str) {
	return parseInt(str,2)
}

console.log(exemplo("10011"))
console.log(exemplo("11"))
console.log(exemplo("1011"))
console.log(exemplo("111001"))
console.log(exemplo("JamesBond"))
