//Javascript object
let hero = {
    heroName: "Belerick",
    heroRole: "Tank/Roamer",
    releaseDate: new Date("January 4,2017"),
    numLobbyPlayer: 5,
    isActive: true,
    heroPrice: 32000
};

//convert to JSON string
let jsonValue = JSON.stringify(hero);
console.log(jsonValue);
jsonValue = JSON.stringify(hero,null,2);//2 refer to tab
console.log(jsonValue);

//convert JSON to Object
let newHero = JSON.parse(jsonValue);
console.log(newHero);

//writing JSON directly
let jsonString = `{
    "heroName": "Uranus",
    "role": "Tank"
}`;

let obj = JSON.parse(jsonString);
console.log(obj);

//convert improper JSON format

let heroDetail = "Hayabusa";
let jsonToObj = JSON.parse(heroDetail);
console.log(jsonToObj);