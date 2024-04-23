//1
var student ={
    firstName : "ahmed ",
    lastName : "belal",
    age : "20",
    fullName: function(){return this.firstName + this.lastName},
    degrees : {
        arabic : 60,
        english : 70,
        french : 88,
        total: function()
        { return this.arabic + this.english + this.french},
    }
}
//a
console.log(student.degrees.total());
//b
console.log(student.fullName());
//c
console.log (student.firstName , student.lastName , 
    student.fullName(), student.age, student.degrees, 
    student.degrees.total());
//c 2
console.log( student["firstName"],student["lastName"],
 student["age"], student.degrees["arabic"], 
 student.degrees["english"], student.degrees["french"]);
 //2
 var date = new Date ();
 console.log(date);
 console.log(date.getFullYear());
 var months = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October",
   "November", "December"];
   console.log(months[date.getMonth()]);
   console.log(date.getDate());
   var days = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
    console.log(days[date.getDay()]);
    console.log(date.getMilliseconds());
    console.log(date.getTime());
    console.log(date.getHours() , date.getMinutes() , date.getSeconds());
    
    



