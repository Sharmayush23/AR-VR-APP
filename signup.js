// Code for the typing headline effect
const headline = document.getElementById('typing-headline');
const text = "STUDENT'S DAY CELEBRATION VR EXPERIENCE!";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        headline.innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 80);
    }
}

typingEffect();
function openlog(){
    window.location.href="index.html";
}