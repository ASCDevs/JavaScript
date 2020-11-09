/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward 
and backward, ignoring punctuation, case, and spacing.
*/

function palindrome(str) {
    let regex = /\W|_/g;
    let word = str.toLowerCase().replace(regex,"");
    let invertWord = word.split("").reverse().join("");
    return str+" = "+(word==invertWord);
}
  

console.log(palindrome("eye")); //true
console.log(palindrome("_eye")); //true
console.log(palindrome("race car")); //true
console.log(palindrome("not a palindrome")); //false
console.log(palindrome("A man, a plan, a canal. Panama")); //true
console.log(palindrome("never odd or even")); //true
console.log(palindrome("Alexandre")); //false
console.log(palindrome("Ana"))//true
console.log(palindrome("Subi no onibus")); //true