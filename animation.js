const images = document.querySelectorAll(".logo-img-4");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let interval;

// Création des points dynamiquement
images.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
        index = i;
        updateSlider();
        resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
});

// Fonction mise à jour slider
function updateSlider() {
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

// Auto-défilement
function autoSlide() {
    interval = setInterval(() => {
        index = (index + 1) % images.length;
        updateSlider();
    }, 4000); // 4 secondes
}

function resetAutoSlide() {
    clearInterval(interval);
    autoSlide();
}

// Bouton suivant
nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateSlider();
    resetAutoSlide();
});

// Bouton précédent
prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
    resetAutoSlide();
});

// Démarrage
updateSlider();
autoSlide();
