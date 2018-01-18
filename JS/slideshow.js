/* Slideshow function */

var slideIndex = 0;
autoSlides();

window.onload = autoSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(autoSlides, 3000); // Change image every x seconds
}
$( document ).ready(function autoSlides(n) {
	
    var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(autoSlides, 3000); // Change image every x seconds
});

/* Next and previouse button function */

var dotIndex = 1;
showSlides(dotIndex);

function plusSlides(n) {
	showSlides((dotIndex += n));
}

function currentSlide(n) {
	showSlides((dotIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		dotIndex = 1;
	}
	if (n < 1) {
		dotIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[dotIndex - 1].style.display = "block";
	dots[dotIndex - 1].className += " active";
}

/* Shop Slide show */

var shopSlideIndex = 1;
showSlides2(shopSlideIndex);

function plusSlides2(x) {
	showSlides2((shopSlideIndex += x));
}

function currentSlide2(x) {
	showSlides2((shopSlideIndex = x));
}

function showSlides2(x) {
	var i;
	var shopSlides = document.getElementsByClassName("bigShop");
	if (x > shopSlides.length) {
		shopSlideIndex = 1;
	}
	if (x < 1) {
		shopSlideIndex = shopSlides.length;
	}
	for (i = 0; i < shopSlides.length; i++) {
		shopSlides[i].style.display = "none";
	}
	shopSlides[shopSlideIndex - 1].style.display = "block";
}
