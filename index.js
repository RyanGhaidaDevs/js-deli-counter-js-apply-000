

var katzDeli = [];

var n = 1;

function takeANumber (DeliLine, name) {


  DeliLine.push([n] + name);

  n++;

  return  `Welcome, ${name}. You are number ${[n-1]} in line.`


}


function currentLine(DeliLine) {
  //To Iterate over array I created a new array.
var newArray = [];
//!0 Truey and thus will execute when array has legnth 0.
if (!DeliLine.length) {
  return "The line is currently empty."
}

else for(var i = 0; i<DeliLine.length;i++) {

newArray.push(`${i+1}. ${DeliLine[i]}`)
}

return "The line is currently: " + newArray.join(", ")

}

function nowServing (DeliLine) {


  if (!DeliLine.length) {
    return "There is nobody waiting to be served!"
  }
  else return "Currently serving " + DeliLine.shift() + "."
  //Removes first person from line.
}
