//define number value
let num1= 7;
let num2 = -10000000;
let num3 = 1.456;

//define big and small number
let num4 = 154898989898989892839;
console.log(num4);
let num5 = 0.0000000000000000003;
console.log(num5);

//creating numbers with e notation
let num6 = 1.2e+10;
console.log(num6);

//how big and small can we get with the number type
console.log(`Minimum Value: ${Number.MIN_VALUE}`);
console.log(`Minimum Safe Value: ${Number.MIN_SAFE_INTEGER}`);
console.log(`Maximum Value: ${Number.MAX_VALUE}`);
console.log(`Maximum Safe Value: ${Number.MAX_SAFE_INTEGER}`);

//create BIGINT
let bigInt1 = 1n;
let bigInt2 = 1_560_0000_00000_0000n;
console.log(bigInt1);
console.log(bigInt1);
console.log(bigInt2);