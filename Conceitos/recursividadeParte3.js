function rangeOfNumbers(startNum, endNum) {
  if(endNum<startNum){
    return [];
  }else{
    var range = rangeOfNumbers(startNum,endNum-1)
    range.push(endNum)
    return range
  }
};

console.log(rangeOfNumbers(7,7))
console.log(rangeOfNumbers(3,10))
console.log(rangeOfNumbers(1,2))