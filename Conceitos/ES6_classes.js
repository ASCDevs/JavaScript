//Demonstrando conceito de classes e heranças
class Carro{
	constructor(nome){
		this.marca = nome;
	}

	present(){
		return 'I have a '+this.marca;
	}
}

let carro1 = new Carro("Ford")
let carro2 = new Carro("Nissan")
console.log(carro1.present())
console.log(carro2.present())

//herança
class Modelo extends Carro{
	constructor(nome,mod){
		super(nome);
		this.modelo = mod;
	}
	show(){
		return this.present() + ', it is a ' + this.modelo;
	}
}
let car1 = new Modelo("Ford","Mustang");
let car2 = new Modelo("Nissan","Versa")
console.log(car1.show())
console.log(car2.show())
