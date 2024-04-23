//1
//a
var date = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"];
console.log("today is :" , days[date.getDay()]);
//b
console.log("current time is :" ,date.getHours(),"pm",':',date.getMinutes(),":",date.getSeconds());
//2
function area(tall){
    return Math.pow(tall,2);
}
console.log("the area is", area(10),"cm");
//3
var degrees = [55,77,15,54];
var sum = 0;
function add(x){
    sum+=x;
}
degrees.forEach(add);
console.log(sum);
if(sum<50){
    console.log("fail");
}
else if(50<sum<65){
    console.log("succeed");
}
else if(65<sum<75){
    console.log("good");
}
else if(75<sum<85){
    console.log("very good");
}
else if(85<sum){
    console.log("exellent");
}
//4
function comparison (a,b){
   if(a>b){
       return "first is larger"
    }
    else{
      return "second is larger"
    }
}
console.log(comparison(10,20));
//5
function randomNnumber(min,max){
    return Math.abs(Math.round(Math.floor(Math.random()*(max - min) + min)));
}
console.log(randomNnumber(-100.5,100));