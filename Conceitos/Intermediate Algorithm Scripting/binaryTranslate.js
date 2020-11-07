/*
Return an English translated sentence of the passed binary string.
*/

function binaryTranslate(str) {
    let binToCode = str.split(" ");
    let finalMsg ="";
    binToCode = binToCode.map(x =>{
      let code=0;
      let i = 0;
      for(let y=x.length-1;y>=0;y--){
        code+=parseInt(x[y])*(Math.pow(2,i));
        i++;
      }
      return code;
    });
  
    finalMsg = String.fromCharCode(...binToCode);
    return finalMsg;
    
  }

  //Outra Solução
  function binaryAgent(str) {
    return String.fromCharCode(...str.split(" ").map(function(char) { return parseInt(char, 2); }) );
    //paseInt(char,2); ja retorna o numero binario em dcimal, ex: parseInt("101110101",2) = 373
  }
  
  //Aren't bonfires fun!?
  console.log(binaryTranslate("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
  //I love FreeCodeCamp!
  console.log(binaryTranslate("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
  console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
