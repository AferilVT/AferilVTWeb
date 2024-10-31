document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((element) => {
        element.classList.add("visible")
    });
});

// Parallax effect for smooth scrolling
document.addEventListener("scroll", function() {
    const layers = document.querySelectorAll(".parallax-layer");
    layers.forEach((layer, index) => {
        const depth = index / 10;
        const scrollY = window.scrollY * depth;
        layer.style.transform = `translateY(${scrollY}px)`;
    });
});

// 3D Tilt Effect
const sections = document.querySelectorAll(".section");
sections.forEach(section => {
    section.addEventListener("mousemove", (e) => {
        const { offsetWidth: width, offsetHeight: height } = section;
        const { offsetX: x, offsetY: y } = e;
        const rotateX = ((y / height) - 0.5) * 15;
        const rotateY = ((x / width) - 0.5) * -15;
        section.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    section.addEventListener("mouseleave", () => {
        section.style.transform = "rotateX(0) rotateY(0)";
    });
});

window.addEventListener("scroll", function() {
    const parallax = document.querySelector(".parallax");
    const offset = window.scrollY;

    parallax.querySelector(".layer1").style.transform = `translateY(${offset * 0.2}px)`
    parallax.querySelector(".layer2").style.transform = `translateY(${100 + offset * 0.3}px)`
})