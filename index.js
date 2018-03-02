

var katzDeli = [];

var n = 1;

function takeANumber (DeliLine, name) {


  DeliLine.push(name);

  n++;

  return  `Welcome, ${name}. You are number ${[n-1]} in line.`


}


function currentLine(DeliLine) {
var newArray = [];

if (!DeliLine.length) {
  return "The line is currently empty."
}

for(var i = 0; i<DeliLine.length;i++) {

newArray.push([i+1] + ". " + DeliLine[i] + "")
 console.log(newArray)
}

return "The line is currently: " + newArray.join("")
}



function nowServing (DeliLine) {


  if (!DeliLine.length) {
    return "There is nobody waiting to be served!"
  }
  else return "Currently serving " + DeliLine.shift() + "."
  //Removes first person from line.
}
