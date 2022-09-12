var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("scroll").style.display = "none";
  prevScrollpos = currentScrollPos;
};


const element = document.getElementById("footer");
const scroller = document.getElementById("scroll");
scroller.onclick = function () {
  element.scrollIntoView({behavior: "smooth"});
}