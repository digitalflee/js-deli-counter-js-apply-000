/* let katzDeliLine = [] */
// give the customer a number 
// katzDeliLine = [2,3]

function takeANumber(katzDeliLine) {
  for (let i = 0; i < katzDeliLine.length; i++) {
    if(katzDeliLine === 0) {
      return katzDeliLine.push([i])
    }
  }
 return `Welcome, You are number ` + number;
} 

// uses push method to add newName to the katzDeliLine array
// return string with Template literals for easier readability
// use indexOf method and adds one to return the actual place in line 

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!";
  }
  let currently = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${currently}.`;
  }
  
  // if the amount of elements within the array is 0 that means no one is waiting to be served
// created the variable currently to represent the person currently being served who is first in line
// then used the .shift method with katzDeliLine to remove the person who was served from the line
  
function currentLine(katzDeliLine) {
 
if (katzDeliLine.length === 0) {
  return 'The line is currently empty.';
}
let nowLine = '';
for (let i = 0; i < katzDeliLine.length; i++) {
  nowLine += `${i + 1}. ${katzDeliLine[i]}, `;
  }
  return `The line is currently: ` + nowLine.slice(0, -2);
}

/* currentLine function accepts katzDeliLine as the parameter
  created an if statement that returns the line is empty if the array is 0
 created nowLine variable as an empty string 
 in anticipation of creating a new string with a shallow copy of katzDeliLine
 created a for loop to iterate through the array, adding 1 to the index number
 returned the expected string and used slice method on nowLine 
the method append the array list from the zero index to the -2 index
using -2 index removes the extra comma number and period at the end of the string after last iteration  */