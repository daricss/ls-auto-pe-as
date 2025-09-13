// Menu mobile
function toggleMenu() {
  const menu = document.querySelector("#menu ul");
  menu.classList.toggle("show");
}

// Sombra no header ao rolar
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const galleryImages = document.querySelectorAll(".galeria-grid img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});
