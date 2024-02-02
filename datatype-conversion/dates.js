//create a date
let date1 = new Date("2023-01-23T14:23:02-05:00");
console.log(`Date 1: ${date1}`);

//display just the calendar date
console.log(`Date only: ${date1.toDateString()}`); //output with shortform day,month

//Display a locale-specific date string
console.log(`Locale en-US: ${date1.toLocaleDateString('en-US')}`);
console.log(`Locale en-MY: ${date1.toLocaleDateString('en-MY')}`);
console.log(`Locale en-GB: ${date1.toLocaleDateString('en-GB')}`);
console.log(`Locale ja-JP: ${date1.toLocaleDateString('ja-JP')}`);

//Display just the time
console.log(`Time onleh: ${date1.toTimeString()}`);

//Display a locale-specific time
console.log(`Locale en-US: ${date1.toLocaleTimeString('en-US')}`);
console.log(`Locale en-MY: ${date1.toLocaleTimeString('en-MY')}`);
console.log(`Locale en-GB: ${date1.toLocaleTimeString('en-GB')}`);
console.log(`Locale ja-JP: ${date1.toLocaleTimeString('ja-JP')}`);

//Custom date
let options ={
    dateStyle: "short",
    timeStyle: "short"
};
console.log(`Custom Date: ${date1.toLocaleString('en-US', options)}`);
console.log(`Custom Date: ${date1.toLocaleString('ar-KW', options)}`);