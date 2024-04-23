//1
document.getElementById("first").innerHTML="welcome from js";
document.getElementsByTagName("h1")[1].innerHTML="second from js";
document.getElementsByClassName("snd")[0].innerHTML="second class";
document.querySelector(".third #three h1").innerHTML="query";
//2
print = (n,y) => {
    return n+y;
}
console.log(print("dina " , "ammam"));
//3
add = (x,z) => {
    return x + z;
}
console.log(add(10 , 5));
