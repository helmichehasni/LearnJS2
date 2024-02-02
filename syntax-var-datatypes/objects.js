//create object with literal
let obj1 = {};

//create object with constructor
let obj2 = new Object();

//populate properties on an object
obj1.firstName = "Namgung";
obj1.lastName = "Hansung";
obj1.martialArt = "Sword Path";
obj1.isActive = true;
obj1.startDate = new Date("January 1,2023");
obj1.kda = 25;
console.log(obj1);

//populating an object on creation with object literal syntax

let obj3 = {
    firstName: "Wudang",
    lastName:"Baekyun",
    martialArt:"Saint Path",
    isActive: true,
    startDate:new Date("January 15,2023"),
    kda: 25
};
console.log(obj3);

//accessing properties from an object
console.log(`First Name: ${obj3.firstName}`);
console.log(`Last Name: ${obj3["lastName"]}`);

//deleting properties from an object
delete obj3.firstName;
console.log(obj3);

//accessing properties doesnt exist
console.log(`Non-existent value: ${obj3.familyName}`);

//Objects are passed by reference,not value
let obj4 = obj3;
obj4.lastName = "Daesung";
console.log(`Last Name (obj3); ${obj3.lastName}`);