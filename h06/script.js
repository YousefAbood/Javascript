// Scoreboard

var counter = 0;
var alex = 0;
var armin = 0;
var alexTurn = true;
var arminTurn = false;

document.getElementById("turns").innerHTML = "It is Alex's turn";
document.getElementById("armin").innerHTML = "Armin: " + armin;
document.getElementById("alex").innerHTML = "Alex: " + alex;


// Image Placement

// Array of images
var animals = ["americaneagle.jpg", "cat.jpg", "dolphin.jpg", "fox.jpg", "lion.jpg", "monkey.jpg", "panda.jpg", "penguin.jpg", "dog.jpg", "americaneagle.jpg", "cat.jpg", "dolphin.jpg", "fox.jpg", "lion.jpg", "monkey.jpg", "panda.jpg", "penguin.jpg", "dog.jpg"];
var randomAnimals = [];
var pictureHoldersArray = [];
var firstPictureEvent = false;
var secondPictureEvent = false;
var firstPictureID, secondPictureID, firstClickID, secondclickID, fraudPreventionFirstPicture, fraudPreventionSecondPicture;

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
  pictureHolder.id = v;
  images.appendChild(pictureHolder);
  pictureHolder.addEventListener("click", function(){
      const currentPicture = this.id;
      if(!(firstPictureEvent)) {
        firstPictureClick(currentPicture);
      }
      else if(!(secondPictureEvent)) {
        secondPictureClick(currentPicture);
      }
  });
  
  pictureHoldersArray[v] = pictureHolder;
}


function firstPictureClick(id) {
  fraudPreventionFirstPicture = pictureHoldersArray[id];
  firstPictureEvent = true;
  firstClickID = id;
  firstPictureID = pictureHoldersArray[id].style.backgroundImage = "url(" + randomAnimals[id] + ")";
}

function secondPictureClick(id) {
  fraudPreventionSecondPicture = pictureHoldersArray[id];
  secondPictureEvent = true;
  secondClickID = id;
  secondPictureID = pictureHoldersArray[id].style.backgroundImage = "url(" + randomAnimals[id] + ")";
  if(firstPictureID == secondPictureID && fraudPreventionFirstPicture != fraudPreventionSecondPicture) {
    ScoreBoard();
    firstPictureEvent = false;
    secondPictureEvent = false;
  }
  else {
    playerTurn();
    setTimeout(function () { 
      changeTurns();
    }, 1000);
  }
}


function changeTurns() {
  pictureHoldersArray[firstClickID].style.backgroundImage = "none";
  pictureHoldersArray[secondClickID].style.backgroundImage = "none";
  firstPictureEvent = false;
  secondPictureEvent = false;
}

function ScoreBoard() {
  if(alexTurn){
    alex++;
    alexTurn = false;
    arminTurn = true;
  } 
  else if(arminTurn) {
    armin++;
    alexTurn = true;
    arminTurn = false;
  }
  
  // ScoreBoard
  document.getElementById("armin").innerHTML = "Armin: " + armin;
  document.getElementById("alex").innerHTML = "Alex: " + alex;
}



function playerTurn() {
  counter++;
  if(counter%2 == 0) {
    document.getElementById("turns").innerHTML = "It is Alex's turn";
  } else {
    document.getElementById("turns").innerHTML = "It is Armin's turn";
  }
  console.log(counter);
}
