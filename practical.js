
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
function op(img){
  modal.classList.toggle("show-modal");
  var modalimg= document.getElementById("img01");
  modalimg.src= img.src;
  modalimg.style.height= "200px";
}
function cp() {
  modal.classList.toggle("show-modal");
}
closeButton.addEventListener("click", cp);
