//rounding number to an integer
let num1 = 5.442235;
console.log(`Round: ${Math.round(num1)}`);
console.log(`Ceiling: ${Math.ceil(num1)}`);
console.log(`Floor: ${Math.floor(num1)}`);

//Fixed
let fixed = num1.toFixed(3);
console.log(`Fixed type: ${typeof(fixed)} Fixed Value: ${fixed}`);

//Display in locale-specific format
let num2 = 1_000_000;
console.log(`USA: ${num2.toLocaleString('en-US')}`);
console.log(`Greece: ${num2.toLocaleString('el-EL')}`);
console.log(`Bangladesh: ${num2.toLocaleString('bg-BG')}`);
console.log(`Punjab: ${num2.toLocaleString('pa-PA')}`);

//Intl Format CUrrency
let salary = 32000;
let monthlySalary = salary/12;
console.log(`Montly Salary: ${monthlySalary.toFixed(2)}`);

let formatter1 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'} );
console.log(`US Dollars: ${formatter1.format(monthlySalary)}`);

let formatter2 = new Intl.NumberFormat('en-MY', {style: 'currency', currency: 'MYR'});
console.log(`Ringgit Malaysia: ${formatter2.format(monthlySalary)}`);

let formatter3 = new Intl.NumberFormat('de-DE', { style:'currency', currency: 'EUR'});
console.log(`Euros: ${formatter3.format(monthlySalary)}`);

let formatter4 = new Intl.NumberFormat('ja-JA', { style: 'currency', currency: 'JPY'});
console.log(`Yen: ${formatter4.format(monthlySalary)}`);

let formatter5 = new Intl.NumberFormat('zh-HK', {style:'currency', currency:'HKD'});
console.log(`Hong Kong $: ${formatter5.format(monthlySalary)}`);
