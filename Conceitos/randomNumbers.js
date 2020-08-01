
//números aleatórios de 0 a 10
for(let x=0;x<10;x++){
	let num = Math.random()
	let valor = num*11
	let fim = Math.floor(valor)
	console.log("Numero gerado: "+num)
	console.log("Valor arredondado: "+valor)
	console.log("Aleatorio final(0 á 10): "+fim)
	console.log("   ")
}