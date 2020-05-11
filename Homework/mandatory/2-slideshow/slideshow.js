// Write your code here
let imagesSrcArray = [
  "https://images.unsplash.com/photo-1588698947572-5563eed6d86a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
  "https://images.unsplash.com/photo-1588997770450-d3c08572ab49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1516&q=80",
  "https://images.unsplash.com/photo-1588977535129-778a64a82cc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80",
  "https://cdn.ticbeat.com/src/uploads/2018/02/vender-fotos-por-internet-810x540.jpeg",
];
let interval1;
let interval2;
let timing = 5000;
document.querySelector("#back").disabled = true;
document.getElementById("imagesApp").src = imagesSrcArray[0];

document.querySelector("#back").addEventListener("click", backFunction);
document.querySelector("#forward").addEventListener("click", forwardFunction);
document
  .querySelector("#autoforward")
  .addEventListener("click", autoForwardFunction);
document.querySelector("#autoback").addEventListener("click", autoBackFunction);
document.querySelector("#stop").addEventListener("click", stop);

function backFunction() {
  let index = imagesSrcArray.indexOf(document.getElementById("imagesApp").src);
  backButton(index);
  document.getElementById("imagesApp").src = imagesSrcArray[index - 1];
}
function forwardFunction() {
  let index = imagesSrcArray.indexOf(document.getElementById("imagesApp").src);

  forwardButton(index + 1);
  document.getElementById("imagesApp").src = imagesSrcArray[index + 1];
}
function autoForwardFunction() {
  document.getElementById("stop").disabled = false;
  let index = imagesSrcArray.indexOf(document.getElementById("imagesApp").src);

  interval1 = setInterval(function () {
    index += 1;
    forwardButton(index);
    document.getElementById("imagesApp").src = imagesSrcArray[index];
    if (index === +imagesSrcArray.length - 1) {
      clearInterval(interval1);
      document.querySelector("#stop").disabled = true;
    }
  }, timing);
}

function autoBackFunction(b) {
  document.getElementById("stop").disabled = false;
  let index = imagesSrcArray.indexOf(document.getElementById("imagesApp").src);

  interval2 = setInterval(function () {
    index -= 1;
    backButton(index);
    document.getElementById("imagesApp").src = imagesSrcArray[index];
    if (index === 0) {
      clearInterval(interval2);
      document.querySelector("#stop").disabled = true;
    }
  }, timing);
}

function backButton(param) {
  if (param - 1 < imagesSrcArray.length) {
    document.querySelector("#forward").disabled = false;
  }
  if (param - 1 === 0) {
    document.querySelector("#back").disabled = true;
  }
}
function forwardButton(param) {
  if (param + 1 > 0) {
    document.querySelector("#back").disabled = false;
  }
  if (param + 1 === imagesSrcArray.length) {
    document.querySelector("#forward").disabled = true;
  }
}
function stop() {
  document.querySelector("#stop").disabled = true;
  clearInterval(interval1);
  clearInterval(interval2);
}
function setUi() {
  
  timing = +document.getElementById("uiSeconds").value * 1000;
  
}
