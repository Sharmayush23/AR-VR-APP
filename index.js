const pages = document.querySelectorAll('.page');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showPage(index) {
  pages.forEach(page => page.classList.remove('active'));
  pages[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  // currentIndex = currentIndex === 0 ? pages.length - 1 : currentIndex - 1;
  currentIndex = (currentIndex - 1) % pages.length;
  showPage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % pages.length;
  showPage(currentIndex);
});

showPage(currentIndex);



function openPage() {
  window.open("https://www.amazon.in/IBS-Anti-Radiation-Adjustable-Smartphones-Replacement/dp/B0BVFVTBTR/ref=sr_1_5?keywords=vr+headsets+for+mobile&qid=1680451348&sprefix=vr+head%2Caps%2C241&sr=8-5");
}
function openPagevideo() {
  window.open("https://www.youtube.com/watch?v=8qNmRi-gNqE");
}
const text = "Experience the future of corporate and educational training with our cutting-edge VR solutions";
let currentindex = 0;
function typeText() {
  const typingElement = document.getElementById("typing-text");
  if (currentIndex < text.length) {
    const currentLetter = text[currentIndex];
    typingElement.innerHTML += currentLetter;
    currentIndex++;
  }
}

setInterval(typeText, 70);



document.getElementById("downloadButton").addEventListener("click", function() {
  // Replace 'your-apk-file.apk' with the actual path to your APK file
  var apkPath = 'apk/archhindi2.apk';

  // Create a link element
  var link = document.createElement('a');
  link.href = apkPath;
  link.download = 'arbook.apk'; // You can set the desired file name here
  document.body.appendChild(link);

  // Trigger the click event on the link
  link.click();

  // Clean up
  document.body.removeChild(link);
});


$('input').on('change', function() {
  $('body').toggleClass('blue');
});
