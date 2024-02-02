let firstName = "Mash";
let lastName = "Burndead";
let upper = firstName.toUpperCase();
console.log(`Welcome ${firstName} ${lastName} ${upper}`);

class CalendarDay{
    //private fields
    #month;
    #day;
    #year;
    //constructor
    constructor(year,month,day){
        this.month = month;
        this.day = day;
        this.year = year;
    }
    //public method
    toString(){
        return `${this.year}-${this.month+1}-${this.day}`;
    }

}

let day1 = new CalendarDay(2024,1,11);
console.log(typeof(day1.toString()));
console.log(day1.toString());