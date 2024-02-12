function changeAnswer() {
    // Get the element with class "answer"
    var answerElement = document.querySelector('.answer');

    // Check if the element exists
    if (answerElement) {
        // Get the current text content
        var eightBallText = answerElement.textContent.trim();

        var answers = ["yes", "no", "maybe", "odds are slim", "odds are good", "if you work real hard, yes.."];
        var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

        // Update the content if it's "..."
        if (eightBallText === "...") {
            answerElement.textContent = randomAnswer;
        }
        else {
            answerElement.textContent = randomAnswer;
        }
    }
}
