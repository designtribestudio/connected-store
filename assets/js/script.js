// mList = document.getElementById("mList");

// var myScrollFunc = function() {
//   var y = window.scrollY;
//   if (y >= 3400) {
//     mList.style.display='block';
//   } else {
//     mList.style.display='none';
//   }
// };

// window.addEventListener("scroll", myScrollFunc);

var card1 = document.getElementById("card1");
var card1icon = document.getElementById("card1icon");
var card1arrow = document.getElementById("card1iarrow");
var card2 = document.getElementById("card2");
var card2icon = document.getElementById("card2icon");
var card2arrow = document.getElementById("card2iarrow");
var card3 = document.getElementById("card3");
var card3icon = document.getElementById("card3icon");
var card3arrow = document.getElementById("card3iarrow");

var powercard = document.getElementById("powercard");
var powerbtns = header.getElementsByClassName("power-btn");
for (var i = 0; i < powerbtns.length; i++) {
  powerbtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var dynamic = document.getElementById("dynamic");
var dc = dynamic.getElementsByClassName("dc");
for (var i = 0; i < powerbtns.length; i++) {
  powerbtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
