function pairElement(str) {
    let array = [];
    let tamanho = str.length;
  
    for(let i=0;i<tamanho;i++){
      let tempArray = [];
  
      str[i]=="A"? tempArray.push("A","T"):
      str[i]=="T"? tempArray.push("T","A"):
      str[i]=="C"? tempArray.push("C","G"):
      tempArray.push("G","C");
  
      array.push(tempArray);
    }
  
    return array;
  }
  
  console.log(pairElement("GCG"));
  console.log(pairElement("ATCGA"));
  console.log(pairElement("TTGAG"));
  console.log(pairElement("CTCTA"));
  
  