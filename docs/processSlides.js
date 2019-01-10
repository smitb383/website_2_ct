var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var i;
    var ssSlides = document.getElementsByClassName("ssSlides");
    var circle = document.getElementsByClassName("circle");
    if (n > ssSlides.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = ssSlides.length
    }
    for (i = 0; i < ssSlides.length; i++) {
        ssSlides[i].style.display = "none";
    }
    for (i = 0; i < circle.length; i++) {
        circle[i].className = circle[i].className.replace("active", "");
    }
    ssSlides[slideIndex2 - 1].style.display = "block";
    circle[slideIndex2 - 1].className += " active";
}