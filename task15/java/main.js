//1
var firstName = "ahmed2020";
var lastName = "belal";
//a
console.log(firstName.substr(0,5));
//b
console.log(firstName.length);
//c
console.log(firstName.indexOf("m"))
//d
console.log(firstName.includes("z"));
//e
console.log(firstName.replace("ahmed" , "mohamed"))
//2
var student = [];
//a
student[0]="mohamed";
student[1]="belal";
console.log(student);
//b
student[2]=30;
console.log(student);
//c
student[student.length]="egypt";
console.log(student);
//d
student.unshift("grade2");
console.log(student);
//e
student.splice(3,0,88,79,66);
console.log(student);
//f
var sport = ["football" , "swimming"];
console.log(student.concat(sport));
//g
var narr = student.concat(sport);
console.log(narr.reverse());
//3
var arr =[10,30,-5,13,6,55];
//a
console.log(Math.max.apply(null,arr));
console.log(Math.min.apply(null,arr));
//b
console.log(arr.sort(function(x,y){return x-y}));
//c
console.log(arr.sort(function(x,y){return y-x}));
//d
var arr =[10,30,-5,13,6,55];
function mul(x){
    return x*2
}
console.log(arr.map(mul));
//e
var arr =[10,30,-5,13,6,55];
function con(x){
    return x%2==0
}
console.log(arr.filter(con));
//f
var arr =[10,30,-5,13,6,55];
function conn(x){
    return x>0
}
console.log(arr.every(conn));





