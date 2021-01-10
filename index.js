// Generates a random number between 1 and 6

function rand6(){
  return Math.floor(Math.random() * 6 + 1);
}

left_number = rand6();
right_number = rand6();

var left_die = "images/dice" + left_number + ".png";
var right_die = "images/dice" + right_number + ".png";

document.querySelector(".img1").setAttribute("src", left_die);
document.querySelector(".img2").setAttribute("src", right_die);


if (left_number > right_number){
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
  document.querySelectorAll(".fa-flag")[0].classList.toggle("invisible");
}
else if (left_number <  right_number){
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  document.querySelectorAll(".fa-flag")[0].classList.toggle("invisible");
}
else{
  document.querySelector("h1").textContent = "It's a Draw!";
}
