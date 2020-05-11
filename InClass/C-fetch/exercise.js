/*
================

Create an HTML file that uses this javascript file.
The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160 with 
user latitude and longitude.
When you get the response from the server, print the current temperature in an <h3> marker.


================
*/

function getInfo() {
  let input1 = document.querySelector("#lat").value;
  let input2 = document.querySelector("#lon").value;
    fetch("https://fcc-weather-api.glitch.me/api/current?lat="+input1+"&lon="+input2).then((res) => {
        res.json().then((r)=>{document.getElementById("result").innerText=r.main.temp ;})
    
  })
}
