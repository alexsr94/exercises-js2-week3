/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

setTimeout(function(){
    document.body.style.backgroundColor= "#011334"
},5000)

setInterval(function(){
    console.log(Math.random() * 100000)
    document.body.style.backgroundColor = "#"+ (Math.random() * 1000000).toFixed(0) ;
},
5000)