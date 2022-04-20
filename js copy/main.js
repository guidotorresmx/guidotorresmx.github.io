var path = document.querySelector("path");
const length = path.getTotalLength();

path.style.strokeDasharray = length + " " + length;
path.style.strokeDashoffset = length;

window.addEventListener("scroll", () => {
  var scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  var drawLength = path.getTotalLength() * scrollPercentage;
  path.style.strokeDashoffset = path.getTotalLength() - drawLength;

  const target = document.querySelectorAll(".scroll");

  var index = 0,
    length = target.length;
  for (index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate;

    if (target[index].dataset.direction === "vertical") {
      target[index].style.transform = "translateY(" + pos + "px)";
    } else {
      var posX = window.pageXOffset * target[index].dataset.ratex;
      var posY = window.pageYOffset * target[index].dataset.ratey;

      target[index].style.transform =
        "translate3d(" + pos + "px, " + pos + "px, 0px)";
    }
  }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
  prevScrollpos = currentScrollPos;
};
