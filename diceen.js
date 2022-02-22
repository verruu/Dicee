var nr1 = Math.floor(Math.random() * 6) + 1;
var nr2 = Math.floor(Math.random() * 6) + 1;
var randomImageS1 = "images/dice" + nr1 + ".png";
var randomImageS2 = "images/dice" + nr2 + ".png";
document.querySelector(".img1").setAttribute("src", randomImageS1);
document.querySelector(".img2").setAttribute("src", randomImageS2);

if (nr1 === nr2) {
  document.querySelector(".winner").innerHTML = "We got a draw!";
} else if (nr1 > nr2) {
  document.querySelector(".winner").innerHTML = "🚩Player 1 winns!";
} else {
  document.querySelector(".winner").innerHTML = "Player 2 winns!🚩";
}
