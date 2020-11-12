/*
Retornar verdadeiro se a sequeência recebida é um número válido dos EUA.
*/
function telephoneCheck(str) {
    let regex =/^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/; 
    return regex.test(str);
  }
console.log(telephoneCheck("123**&!!asdf#")); //false 
console.log(telephoneCheck("1 555 555 5555")); //true
console.log(telephoneCheck("1 555)555-5555")); //false
console.log(telephoneCheck("5555555")); //false
console.log(telephoneCheck("555-5555")); //false
console.log(telephoneCheck("1 555-555-5555")); //true
console.log(telephoneCheck("1 (555) 555-5555")); //true
console.log(telephoneCheck("5555555555")); //true
console.log(telephoneCheck("555-555-5555")); //true
console.log(telephoneCheck("(555)555-5555")); //true