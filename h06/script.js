// ScoreBoard

var alex = 0;
var armin = 0;

document.getElementById("alex").innerHTML = "Alex: " + alex;
document.getElementById("armin").innerHTML = "Armin: " + armin;


// Image Placement

// Array of images
var animals = ["americaneagle.jpg", "cat.jpg", "dolphin.jpg", "fox.jpg", "lion.jpg", "monkey.jpg", "panda.jpg", "penguin.jpg", "dog.jpg", "americaneagle2.jpg", "cat2.jpg", "dolphin2.jpg", "fox2.jpg", "lion2.jpg", "monkey2.jpg", "panda2.jpg", "penguin2.jpg", "dog2.jpg"];
var randomAnimals = [];
var pictureHoldersArray = [];

// Elements Creation
images = document.getElementById("images");
generateArray();
console.log(animals);
console.log(randomAnimals);


// I created a randomized array that correlates directly with the pictureHolderID. 
// For Example if index[0] of the array randomAnimals is "cat.jpg" then pictureHolder-0 is cat.jpg


function generateArray() {
  for(var i = 0; i < 18; i++) {
    var randomNumber = Math.floor(Math.random() * animals.length);
    randomAnimals.push(animals[randomNumber]);
    randomAnimal = animals[randomNumber];
    animals.splice(randomNumber, 1);

  }
}

for(var v = 0; v < 18; v++) {
  pictureHolder = document.createElement("div");
  pictureHolder.className = "pictureHolderClass";
  pictureHolder.id = "" + v;
  images.appendChild(pictureHolder);
  pictureHolder.addEventListener("click", function(){
      var counter = 2;
      const currentPicture = this.id;
      
  });
  
  pictureHoldersArray[v] = pictureHolder;
  console.log(pictureHoldersArray);
}



function showPicture(id) {
  console.log(randomAnimals[id]);
  pictureHoldersArray[id].style.backgroundImage = "url(" + randomAnimals[id] + ")";
}

function hidePicture(id) {
  console.log(randomAnimals[id]);
}




