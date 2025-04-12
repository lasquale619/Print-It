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


let left =document.querySelector(".arrow_left");
let right =document.querySelector(".arrow_right");
let slider=document.querySelector("#banner");
let bannerImg =document.querySelector(".banner-img");
let bannerText=document.querySelector("#banner p");
let dots=document.querySelectorAll(".dot");
let dot=document.querySelector(".dot")
let DotSelected=document.querySelector(".dot_selected")

let i=0 ; 


function UpdateSlide () {
	bannerImg.src=`./assets/images/slideshow/${slides[i].image}`;
	bannerText.innerHTML = slides[i].tagLine;

	dots.forEach((dot, index) => {
        if (index === i) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}


right.addEventListener("click", () =>{
	if(i< slides.length -1){
		i++	
	}	
	else {
		i=0
	}

	UpdateSlide();
});

left.addEventListener("click", () => {
    if (i > 0) {
        i--;
    } else {
        i = slides.length - 1;
    }
    UpdateSlide();
});





