// get the element 

// element --- property
const sE = document.getElementById('num1')  //element object
var num1= parseInt(sE.textContent);
var num2 = parseInt(document.getElementById('num2').textContent); 
console.log("num1 is " + num1 + " num2 is " + num2)


//process
var c = num1 + num2;

//display
document.write(c);