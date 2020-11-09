/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
The values should be rounded to the nearest whole number. The body being orbited is Earth.

*/

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    let matriz = arr.map(x =>{
      let a = Math.pow(earthRadius+x.avgAlt,3);
      let b = Math.sqrt(a/GM);
      let resultado = Math.round((2*Math.PI)*b);
  
      let obj = {
        name:x.name,
        orbitalPeriod:resultado
      }
      return obj;
    });
    return matriz;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
  