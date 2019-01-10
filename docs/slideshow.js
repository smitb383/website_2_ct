var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// var slideshow1 = document.getElementById("slideshow1");
// slideshow1.currentSlideIndex = 1;
// showSlides(slideshow1.currentSlideIndex, slideshow1);

// var slideshow2 = document.getElementById("slideshow2");
// slideshow2.currentSlideIndex = 1;
// showSlides(slideshow2.currentSlideIndex, slideshow2);


// function plusSlides(n, slideshow) {
//     showSlides(slideshow.currentSlideIndex += n, slideshow);
// }

// function currentSlide(n, slideshow) {
//     showSlides(slideshow.currentSlideIndex = n, slideshow);
// }

// function showSlides(n, slideshow) {



//     var i;
//     var slides = slideshow.getElementsByClassName("mySlides");
//     var dots = slideshow.getElementsByClassName("dot");
//     if (n > slides.length) {
//         slideshow.currentSlideIndex = 1
//     }
//     if (n < 1) {
//         slideshow.currentSlideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideshow.currentSlideIndex - 1].style.display = "block";
//     dots[slideshow.currentSlideIndex - 1].className += " active";
// }