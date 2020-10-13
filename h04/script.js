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

document.getElementById("image").addEventListener("click", changeImage);
var animals = ["americaneagle.jpg", "cat.jpg", "dolphin.jpg", "fox.jpg", "lion.jpg", "monkey.jpg", "panda.jpg", "penguin.jpg", "dog.jpg"];
var counter = 0;

function changeImage() {
  if(counter == 9) {
      counter = 0;
    }
    document.getElementById("image").src = animals[counter];
  counter++;
}