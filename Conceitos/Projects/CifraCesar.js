/*
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
*/
function rot13(str) {
    let resultado="";
    for(let i=0;i<str.length;i++){
      let code = str[i].charCodeAt(0);
      
      if(code>=65&&code<=90){
        resultado+= String.fromCharCode(90-(((90-code)+13)%26));
      }else{
        resultado+=str[i];
      }
    }
    return resultado;
  }
  
  function simpleRot13(str) {
    // LBH QVQ VG!
    return str.replace(/[A-Z]/g, L =>
      String.fromCharCode((L.charCodeAt(0) % 26) + 65)
    );
  }
  
  console.log(simpleRot13("LBH QVQ VG!"));
  console.log(rot13("SERR PBQR PNZC"));//FREE CODE CAMP
  console.log(rot13("SERR CVMMN!"));//FREE PIZZA!
  console.log(rot13("SERR YBIR?")); //FREE LOVE?
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
  console.log(simpleRot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));