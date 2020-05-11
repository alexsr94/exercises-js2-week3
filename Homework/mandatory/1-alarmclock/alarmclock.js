function setAlarm() {
  let seconds = document.getElementById("alarmSet").value;
  console.log((+seconds * 1000));
  setTimeout(function () { playAlarm(); clearInterval(intervalo)}, (+seconds * 1000)+1000);

  let intervalo =setInterval(function () {seconds -= 1; document.getElementById("timeRemaining").innerText ="Time Remaining: 00:0" + seconds;}, 1000);
  console.log(intervalo)
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
