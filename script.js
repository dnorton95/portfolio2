document.addEventListener("DOMContentLoaded", function () {
    var headshot = document.querySelector('.headshot');
    var originalSrc = headshot.src;

    headshot.addEventListener("mouseenter", function () {
        headshot.style.opacity = 0; // Fade out
        setTimeout(function () {
            headshot.src = "assets/greyDan.png"; // Change image source
            headshot.style.opacity = 1; // Fade in
        }, 200);
    });

    headshot.addEventListener("mouseleave", function () {
        headshot.style.opacity = 0; // Fade out
        setTimeout(function () {
            headshot.src = originalSrc; // Restore original image source
            headshot.style.opacity = 1; // Fade in
        }, 200);
    });
});



