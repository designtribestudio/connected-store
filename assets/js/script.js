mList = document.getElementById("mList");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 3400) {
    mList.style.display='block';
  } else {
    mList.style.display='none';
  }
};

window.addEventListener("scroll", myScrollFunc);