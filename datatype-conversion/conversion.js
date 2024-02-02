//using typeof function
let strValue = "Hi";
console.log(typeof(strValue));
let numValue = 7;
console.log(typeof(numValue));
let boolValue = true;
console.log(typeof(boolValue));

//Joining a non-str val with a string

let level = 15;
let heroName = "Balmond";
let description = `${heroName} max level is ${level}`;
console.log(description);

//convert a string to a number
let ageString = "15";
let ageNum = Number(ageString);
console.log(typeof(ageNum));
let ageNewNum = new Number(ageString); //we dont want this
console.log(typeof(ageNewNum));

//What about NaN aka not a number
let ageString2 = "fifteen";
let ageNum2 = Number(ageString2);
console.log(`ageString2 convert to number: ${ageNum2}`);
let isInvalid = isNaN(ageNum2);
console.log(`Is Invalid: ${isInvalid}`);

//Convert a value to a boolean
let num1 = 1;
let num2 = 0;
let bool1 = Boolean(num1);
let bool2 = Boolean(num2);
console.log(`Num1: ${bool1} Num2: ${bool2}`);

let str1 = "Login";
let bool3 = Boolean(str1);
let val1 ;
let bool4 =Boolean(val1);
console.log(`Bool3: ${bool3} Bool4: ${bool4}`);

//Convert boolean to string

let bool5 = true;
console.log(`Bool 5: ${bool5}`);
