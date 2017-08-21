
var userInput = prompt("Type a number");
var userResponse = parseInt(userInput);

var isDivisible2 = userResponse % 2;
var isDivisible3 = userResponse % 3;


if ((isDivisible3 + isDivisible2) === 0){
	console.log("The number is divisible by both");
 }else if(isDivisible2 === 0) {
	console.log("The number is divisible by 2 and the response is ");
  console.log(userInput/2);
} else if (isDivisible3 === 0){
	console.log("The number is divisible by 3 and the response is ");
  console.log(userInput/3);
} else if (isNaN(userResponse)) {
	console.log("Enter a number");
} else {
	console.log("Not divisible");
}
