//create single line string
let firstName = "Ed";
let lastName = 'Rognalt';
let title = `Mage`;
//string is primitive datatypes so it is immutable
title = `Magic Swordsman`
//string concatenation with + operator
let fullName = firstName + " " + lastName;

//string concatenation with template literals
fullName = `${firstName} ${lastName}`;
console.log(fullName);
console.log(title);

//creating multi-line strings with \n
let elements = "Fire\nWind\nEarth";
console.log(elements);

//creating multi-line strings with backticks
bio = `About Ed:
Ed Ragnalt is form noble family.
He is the main character for this novel.`;
console.log(bio);

//Escaping Characters
let quote1 = 'Ed said, "I am the main character of this world."';
quote2 = "Ed said,\"I am the main character of this world\"";
quote3 = `Now you can use 'single' and "double" quote`;
quote4 = `escape using slash \\ only one will shown`;
console.log(quote1);
console.log(quote2);
console.log(quote3);
console.log(quote4);

//string length
let length = quote1.length;
console.log(`Quote1 length:${length}`);

//access second characters
let secondChar = quote1[1];
console.log(secondChar);

//changing case
let uppercaseName = fullName.toUpperCase();
console.log(uppercaseName);
let lowercaseName = fullName.toLowerCase();
console.log(lowercaseName);

//Finding substring
let idx1 = fullName.indexOf("Ed");
console.log(`Index 1:${idx1}`);
let idx2 = fullName.indexOf("nalt");
console.log(`Index 2:${idx2}`);
let idx3 = fullName.indexOf("xyz");
console.log(`Index 3:${idx3}`);

//Check if string have this substring
let doesContain = fullName.includes("Rog");
let doesNotContain = fullName.includes("Rag");
console.log(doesContain);
console.log(doesNotContain);

//THE END



