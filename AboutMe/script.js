document.addEventListener("DOMContentLoaded", function() {
    const photosContainer = document.querySelector('.photos');
    const photos = document.querySelectorAll('.photos img');
    const totalPhotos = photos.length;
    const photoWidth = photos[0].clientWidth;
    let currentIndex = 0;

    function scrollToIndex(index) {
        photosContainer.style.transform = `translateX(-${index * photoWidth}px)`;
    }

    function nextPhoto() {
        currentIndex = (currentIndex + 1) % totalPhotos;
        scrollToIndex(currentIndex);
    }

    function prevPhoto() {
        currentIndex = (currentIndex - 1 + totalPhotos) % totalPhotos;
        scrollToIndex(currentIndex);
    }

    document.querySelector('.arrow-left').addEventListener('click', prevPhoto);
    document.querySelector('.arrow-right').addEventListener('click', nextPhoto);

    // Auto-scroll functionality
    setInterval(nextPhoto, 3000); // Change photo every 3 seconds
});


let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("myPhotos");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      plusSlides(-1); // Move to the previous slide when the left arrow key is pressed
    } else if (event.key === "ArrowRight") {
      plusSlides(1); // Move to the next slide when the right arrow key is pressed
    }
  });

  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}