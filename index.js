/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString)
{
  let time = timeString.split(":")
  if(time[0]<12)
  return "Good Morning";
  else if(time[0]>=12&&time[0]<=17)
  return "Good Afternoon";
  else if(time[0]>17)
  return "Good Evening"
}
/* Write your implementation of displayMessage() */
function displayMessage(greetString){
  document.getElementById("greeting").innerText =greetString;
}