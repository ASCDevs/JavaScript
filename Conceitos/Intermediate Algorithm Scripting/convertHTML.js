/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.*/
function convertHTML(str) {
    str = str.replace(/&/g,"&amp;");
    str = str.replace(/</g,"&lt;");
    str = str.replace(/>/g,"&gt;");
    str = str.replace(/"/g,"&quot;");
    str = str.replace(/'/g,"&apos;");
    return str;
}

function convertHTML2(str){
    let entitiesHTML={
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        '"':"&quot;",
        "'":"&apos;"
    };

    return str.replace(/[&<>\"']/g, corresponde => entitiesHTML[corresponde]);
}
  
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("<>"));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("abc"));
console.log("------------");
console.log(convertHTML2("Dolce & Gabbana"));
console.log(convertHTML2("Hamburgers < Pizza < Tacos"));
console.log(convertHTML2("Sixty > twelve"));
console.log(convertHTML2('Stuff in "quotation marks"'));
console.log(convertHTML2("<>"));
console.log(convertHTML2("Schindler's List"));
console.log(convertHTML2("abc"));
  