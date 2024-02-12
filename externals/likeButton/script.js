function toggleLike(likeDisplay) {
    var currentLikes = parseInt(likeDisplay.textContent);
    var newLikes = 0;

    if (currentLikes === 0) {
        newLikes = 1;
    } else {
        newLikes = 0;
    }
    likeDisplay.textContent = newLikes + " ninjas have liked this post";

    if (currentLikes === 0) {
        likeDisplay.textContent = newLikes + " ninja has liked this post"
    }
}

function likeIncrease1() {
    var likeDisplay1 = document.querySelector('.likeDisplay1');
    toggleLike(likeDisplay1);
}

function likeIncrease2() {
    var likeDisplay2 = document.querySelector('.likeDisplay2');
    toggleLike(likeDisplay2);
}

function likeIncrease3() {
    var likeDisplay3 = document.querySelector('.likeDisplay3');
    toggleLike(likeDisplay3);
}