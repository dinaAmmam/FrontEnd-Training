//1
//a
document.getElementById("im").style.width="300px";
document.getElementById("im").style.height="300px";
//b
var button = document.getElementById("btn");
button.addEventListener('click',change);
var img = document.getElementById("im");
var simg = document.getElementById("sim");
function change(){
img.style.display="none";
simg.style.display="inline";
}
//c
simg.addEventListener('mouseover',resize);
function resize(){
    simg.style.width="500px";
    simg.style.height="500px";
}
simg.addEventListener('mouseout',resizeo);
function resizeo(){
    simg.style.width="300px";
    simg.style.height="300px";
}
//d
 function remove (){
simg.removeEventListener("mouseover",resize);
simg.removeEventListener("mouseout",resizeo);
 }
 //2
 //a
 var getdata = document.getElementById("data");
 var username = document.getElementById("uname");
 var password = document.getElementById("pp");
 getdata.addEventListener('click' , data);
 function data(){
console.log("the name is :" , username.value);
console.log("password:", password.value);
 }
 //2
 function changing(){
     document.getElementById("uname").style.backgroundColor="yellow";
 }
 
