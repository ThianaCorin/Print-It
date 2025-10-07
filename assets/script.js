const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");


// Ajout eventListener sur les fleches

let arrowLeft = document.getElementById("arrow_left");
let arrowRight = document.getElementById("arrow_right");

arrowLeft.addEventListener("click", () => {
	currentSlide--;	
	if (currentSlide < 0 ) {
		currentSlide = slides.length -1 }
	updateSlide();
})

arrowRight.addEventListener("click", () => {
	currentSlide++;
	if (currentSlide >= slides.length) {
		currentSlide = 0 }
	updateSlide();
	
})

// Ajout bullet points
const dotsContainer = document.querySelector(".dots");
// console.log(slides.length);

for (let i = 0; i < slides.length; i++) { 
	let dot = document.createElement("span");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
	if (i === 0)
		dot.classList.add("dot_selected");
	}

	const dots = document.querySelectorAll(".dot");
function updateSlide() {
	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	bannerText.innerHTML = slides[currentSlide].tagLine;
	dots.forEach(dot => dot.classList.remove("dot_selected"));
dots[currentSlide].classList.add("dot_selected");

	}


