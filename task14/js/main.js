//concat
function con (str1 , str2 , str3 , str4) {
    return str1.concat(str2,str3,str4)
}
console.log(con("dina ", "mohamed ", "ali ","ammam"))
//2
var str = "welcome mr ahmed"
console.log(str.indexOf("ahmed"));
console.log(str.slice(11,16));
console.log(str.charAt(11));
console.log(str.replace("ahmed","mohammed"));
console.log(str.toUpperCase());
console.log(str.includes("yasser"));
//3
var num = "10.879879";
console.log(Number.parseInt("10.879879"));
console.log(Number.parseFloat("10.879879"));
x = Number("10.879879");
console.log(x.toFixed());
console.log(x.toFixed(1));