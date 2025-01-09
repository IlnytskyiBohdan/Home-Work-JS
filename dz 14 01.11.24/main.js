"use strict";

let currentSlide = 0;
const slides = document.querySelectorAll(".slider-item");
const dotsContainer = document.querySelector(".dots");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slider = document.querySelector(".slider");

function updateButtons() {
  prevButton.style.display = currentSlide === 0 ? "none" : "block";
  nextButton.style.display = currentSlide === slides.length - 1 ? "none" : "block";
}

function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function showSlide(index) {
  currentSlide = Math.max(0, Math.min(index, slides.length - 1));
  slider.style.transform = `translateX(${-currentSlide * 100}%)`;
  updateButtons();
  updateDots();
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

showSlide(currentSlide);
