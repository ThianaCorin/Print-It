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

// Ajout eventListener sur les fleches

let arrowLeft = document.getElementById("arrow_left");
let arrowRight = document.getElementById("arrow_right");

arrowLeft.addEventListener("click", () => {
	console.log("click gauche")
})

arrowRight.addEventListener("click", () => {
	console.log("click droit")
})

// Ajout bullet points
const dotsContainer = document.querySelector(".dots");
console.log(slides.length);

for (let i = 0; i < slides.length; i++) { 
	let dot = document.createElement("span");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
	if (i === 0)
		dot.classList.add("dot_selected");
	}

// let slide = getElementById("banner");
// slide.src = 