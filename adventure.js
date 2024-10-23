
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
function op(img){
  modal.classList.toggle("show-modal");
  var modalimg= document.getElementById("img01");
  modalimg.src= img.src;
  // modalimg.style.height= "300px";
  
}
function cp() {
  modal.classList.toggle("show-modal");
}
closeButton.addEventListener("click", cp);
var downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', function() {
    window.location.href = 'apk/vrroompro.apk';
});
function down(){
  window.location.href = 'apk/mvrtest.apk'
}
function down2(){
  window.location.href = 'apk/newroom.apk'
}
function fo() {
  window.location.href ='apk/vrroompro.apk'
}