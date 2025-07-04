function checkAnswer() {
    const correctAnswer = "4"; // The correct answer to the quiz question

    // Select the checked radio button with name="quiz"
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');

    let userAnswer = '';
    if (selectedChoice) {
        userAnswer = selectedChoice.value; // Get the value of the selected radio button
    }

    const feedbackElement = document.getElementById('feedback'); // Get the feedback paragraph

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the "Submit Answer" button
// When the button is clicked, the checkAnswer function will be executed
document.getElementById('submit-answer').addEventListener('click', checkAnswer);