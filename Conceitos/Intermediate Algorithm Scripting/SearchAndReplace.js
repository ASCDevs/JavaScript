function myReplace(str, before, after) {

    let index = str.indexOf(before);
  
    if(str[index]==str[index].toUpperCase()){
      after = after[0].toUpperCase()+after.slice(1);
    }else{
      after = after.toLowerCase();
    }
  
    let regex = new RegExp(`${before}`);
  
    return str.replace(regex,after);
  }
  
  console.log(myReplace("I think we should look up there", "up", "Down"));
  console.log(myReplace("Let us go to the store", "store", "mall"));
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));