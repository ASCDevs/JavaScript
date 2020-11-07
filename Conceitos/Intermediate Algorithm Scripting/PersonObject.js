/*
Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
*/

var Person = function(firstAndLast) {
  let nome = firstAndLast;
  this.getFullName = function() {
    return nome;
  };
  this.getFirstName = ()=>{
    return nome.split(" ")[0];
  };
  this.getLastName = ()=>{
    return nome.split(" ")[1];
  }
  this.setFirstName = (primeiroNome)=>{
    nome = primeiroNome+" "+nome.split(" ")[1];
  }
  this.setFullName = (nomeCompleto)=>{
    nome = nomeCompleto;
  }
  this.setLastName = (ultimoNome)=>{
    nome = nome.split(" ")[0]+" "+ultimoNome;
  }
};

var bob = new Person("Bob Ross");

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());

bob.setFirstName("Alexandre");
console.log(bob.getFullName());
bob.setLastName("Cavalcante");
console.log(bob.getFullName());

bob.setFullName("Outro nome");
console.log(bob.getFullName());

