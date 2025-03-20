// je crée les nouvelles élements
const newP = document.createElement("p");
const newDiv = document.createElement("div");
const newH2 = document.createElement("h2");
const newButton = document.createElement("button");
const img = document.createElement("img");
const textRemoveImg = "Clique pour supprimer l'image";
const textShowImg = "remettre l’image";

// Je mets les attributs et les text content
newP.class = "okPourLePrem";
newP.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quidem aspernatur facere inventore enim vero iste amet ut dolore quae, assumenda eos voluptatibus recusandae architecto debitis expedita illum nesciunt sapiente.";
newDiv.id = "myDiv2";
newH2.textContent = "Quelle belle image !";
img.src = "img.jpg";
img.alt = "belle image";
newButton.textContent = textRemoveImg;

// J'insère les enfants dans la div
newDiv.append(newH2, newButton, img);

// Je crée la fonction
function toggleImg() {
  if (newButton.textContent == textRemoveImg) {
    img.remove();
    newButton.textContent = textShowImg;
  } else {
    newDiv.append(img);
    newButton.textContent = textRemoveImg;
  }
}
newButton.onclick = toggleImg;


//  CORRECTION : Version ecouteur d'evenement 
newButton.addEventListener("click", function(){
    if (newButton.textContent == textRemoveImg) {
        img.remove();
        newButton.textContent = textShowImg;
      } else {
        newDiv.append(img);
        newButton.textContent = textRemoveImg;
      }
});


// J'insère les nouvelles élements au DOM
document.querySelector("#myDiv").append(newP);
document.querySelector("#myDiv").after(newDiv);

// console.log(newP);
// console.log(newDiv);
// console.log(newH2);
// console.log(newButton);
// console.log(img);
