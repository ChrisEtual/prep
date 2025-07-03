console.log(0.1+0.2); //0.30000000000000004

let defaultValue = 0.1+0.2;
let precision = Number(defaultValue.toPrecision(1));
console.log(precision===0.3);


Math.floor(45.05); // 45
Math.floor(45.95); // 45