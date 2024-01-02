// Function to check the answer
function checkAnswer(choiceIndex) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (choiceIndex === currentQuestion.answer) {
  // Correct answer
  score++;
  feedbackContainer.textContent = "Correct!";
  feedbackContainer.style.color = "green";
  } else {
  // Incorrect answer
  time -= 10;
  feedbackContainer.textContent = "Wrong!";
  feedbackContainer.style.color = "red";
  }
  // Show the feedback container briefly
  feedbackContainer.classList.remove("hide");
  setTimeout(function () {
  feedbackContainer.classList.add("hide");
  }, 1000);
  // Go to the next question
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
  displayQuestion();
  } else {
  endQuiz();
  }
  }
  
  // Function to end the quiz
  function endQuiz() {
  clearInterval(timerInterval);
  questionsContainer.classList.add("hide");
  endScreenContainer.classList.remove("hide");
  scoreContainer.textContent = score;
  }
  
  // Event listeners
  startButton.addEventListener("click", startQuiz);
  submitButton.addEventListener("click", function () {
  const initials = initialsInput.value;
  saveScore(initials, score);
  });
  
  // Function to save the score
  function saveScore(initials, score) {
  }