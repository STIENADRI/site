// hier komt je code
// console.log("Hallo wereld!");

//Menu menu
let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
function toonMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";}
    else {
		navMenu.style.display = "flex";
    console.log("klik werkt")}
}

menuKnop.addEventListener("click",toonMenu);
let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
  console.log("klik 2 werkt")
}
mainGedeelte.addEventListener("click",verbergMenu);



let naam = document.querySelector(".naam");

window.addEventListener("scroll", function() {
      scrollPositiePx = window.pageYOffset;
      naam.style.left = (scrollPositiePx - 370) + "px";
      naam.style.top = (window.innerHeight - 300 +  scrollPositiePx) + "px";

});


let mijnParagraaf = document.querySelector("p");
let mijnH1 = document.querySelector("h1");

window.addEventListener("scroll", function() {
      if (window.pageYOffset > 200) {
            mijnH1.classList.add("onzichtbaar");
      } else {
            mijnH1.classList.remove("onzichtbaar");
      }
});
