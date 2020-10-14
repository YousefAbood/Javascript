// Images
var animals = ["americaneagle.jpg", "cat.jpg", "dolphin.jpg", "fox.jpg", "lion.jpg", "monkey.jpg", "panda.jpg", "penguin.jpg", "dog.jpg"];

// Div
pics = document.getElementById("pics");
pictureHolder();
picturesAdder();

function pictureHolder() {
  for(var i = 0; i < 9; i++) {
    pictureHolder = document.createElement("div");
    pictureHolder.className = "animalPictures";
    pictureHolder.id = "picture-holder-" + i;
    pics.appendChild(pictureHolder);
  }
}

function picturesAdder() {
  pictureHolders = document.getElementsByClassName("animalPictures");
  console.log(pictureHolders);
  for(var i = 0; i < pictureHolders.length; i++){
    // Favorite
    favorite = document.createElement("div");
    favorite.className = "favorite";
    favorite.id = "favorite_" + i;
    // Adding Images
    img = document.createElement("img");
    img.src = animals[i];
    img.id = i;
    img.addEventListener("click", function() {
      makeFavorite(this.id);
    });
    pictureHolders[i].appendChild(favorite);
    pictureHolders[i].appendChild(img);
  }
}

function makeFavorite(id) {
  console.log(id);
  notfavorite = document.getElementsByClassName("favorite");
  for(var i = 0; i < notfavorite.length; i++) {
    notfavorite[i].style.backgroundImage = "none";
  }
  favorite = document.getElementById("favorite_" + id);
  favorite.style.backgroundImage = "url(heart.png)";
}



