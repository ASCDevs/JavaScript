function countup(n){
	if(n<1){
		return [];
	}else{
		var countArray = countup(n-1);
		countArray.push(n);
		return countArray
	}
}

console.log(countup(5))

function countdown(n){
  if(n>=1){
    var down = countdown(n-1)
    down.unshift(n)
    return down
  }else{
    return [];
  }
}
console.log(countdown(5))
console.log(countdown(7))