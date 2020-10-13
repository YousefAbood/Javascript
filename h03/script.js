var images = document.getElementsByTagName("img");
var animals = ["americaneagle.jpg", "cat.jpg", "dolphin.jpg", "fox.jpg", "lion.jpg", "monkey.jpg", "panda.jpg", "penguin.jpg", "dog.jpg"];
var randomNumber;

for(var i = 0; i < images.length; i++){
  randomNumber = Math.floor(Math.random() * animals.length);
  images[i].src = animals[randomNumber];
  animals.splice(randomNumber, 1);
  console.log(randomNumber);
}