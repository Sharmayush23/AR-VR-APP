// Highlight active link in table of contents
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('nav ul li a');

function makeLinkActive() {
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
      links.forEach((link) => link.classList.remove('active'));
      links[index].classList.add('active');
    }
  });
}

window.addEventListener('scroll', makeLinkActive);
