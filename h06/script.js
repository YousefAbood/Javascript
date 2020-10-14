// ScoreBoard

var alex = 0;
var armin = 0;

document.getElementById("alex").innerHTML = "Alex: " + alex;
document.getElementById("armin").innerHTML = "Armin: " + armin;


// Image Placement

// Array of images
var animalPictures = document.getElementsByTagName("img");

var animals = ["americaneagle.jpg", "cat.jpg", "dolphin.jpg", "fox.jpg", "lion.jpg", "monkey.jpg", "panda.jpg", "penguin.jpg", "dog.jpg", "americaneagle2.jpg", "cat2.jpg", "dolphin2.jpg", "fox2.jpg", "lion2.jpg", "monkey2.jpg", "panda2.jpg", "penguin2.jpg", "dog2.jpg"];
console.log(!("panda.jpg1" == "panda.jpg2"))

// Elements Creation
images = document.getElementById("images");
generateImages();

function generateImages() {
  
  // Creating a Class that is the Picture Holder
  for(var i = 0; i < 18; i++){
    // Hide
    hide = document.createElement("div");
    hide.className = "hide";
    hide.id = "hide" + i;


    // Picture Holder Background, Creates Picture Holders when the images are invisible.
    pictureHolder = document.createElement("div");
    pictureHolder.className = "pictureHolder";
    pictureHolder.id = "pictureHolder-" + i;
    
    // Images Generation & Random Placement around the Images Division in HTML
    img = document.createElement("img");
    randomNumber = Math.floor(Math.random() * animals.length);
    img.id = animals[randomNumber];
    img.src = animals[randomNumber];
    animals.splice(randomNumber, 1);
    // Appending the picture holder & the image
    pictureHolder.appendChild(img);
    images.appendChild(pictureHolder);
  }
}


