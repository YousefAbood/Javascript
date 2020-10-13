var mijnauto = {
  type: "Ford Cmax 2013 Hybrid",
  speed: "137km/h"
}

document.getElementById("horn").addEventListener("click", horn);
document.getElementById("horn").addEventListener("click", characteristics);
document.getElementById("speed").addEventListener("click", speed);
document.getElementById("speed").addEventListener("click", speedHTML);

function horn() {
  console.log("toot");
}

function characteristics() {
  document.getElementById("characteristics").innerHTML = mijnauto.type;
  document.getElementById("characteristics").innerHTML = mijnauto.type;
  document.getElementById("characteristics").innerHTML = mijnauto.type;
}

function speed() {
  console.log(mijnauto.speed);
}

function speedHTML() {
  document.getElementById("speedHTML").innerHTML = mijnauto.speed;
}


// NEXT ASSIGNMENT

var imageID = document.getElementsByTagName("img");

document.getElementById("image").addEventListener("click", changeImage);

function changeImage() {
    imageID.src = "fox.jpg";
}