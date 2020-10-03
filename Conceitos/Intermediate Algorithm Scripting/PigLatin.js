function translatePigLatin(str) {
    const reg = /(^[^aeiou]+)(.*)/;
    return reg.test(str) ? str.replace(reg,'$2$1ay') : str+"way";
  
  }
  
  console.log(translatePigLatin("california"));
  console.log(translatePigLatin("paragraphs"));
  console.log(translatePigLatin("glove"));
  console.log(translatePigLatin("algorithm"));
  console.log(translatePigLatin("eight"));