const quizData = [
  {
  question: "Question 1",
  choices: ["Choice 1", "Choice 2", "Choice 3"],
  answer: 0,
  },
  // Add more questions here...
  ];
  
  // Set up quiz state
  let currentQuestionIndex = 0;
  let time = 60;
  let score = 0;
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
  // Hide the start screen
  document.getElementById("start-screen").classList.add("hide");
  // Show the questions container
  questionsContainer.classList.remove("hide");
  // Start the timer
  startTimer();
  // Display the first question
  displayQuestion();
  }
  
  // Function to start the timer
  function startTimer() {
  timerInterval = setInterval(function () {
  time--;
  timerContainer.textContent = time;
  if (time <= 0) {
  endQuiz();
  }
  }, 1000);
  }
  
  // Function to display a question
  function displayQuestion() {
  // Get the current question from the quiz data
  const currentQuestion = quizData[currentQuestionIndex];
  // Display the question title
  questionTitle.textContent = currentQuestion.question;
  // Clear the choices container
  choicesContainer.innerHTML = "";
  // Display the choices
  for (let i = 0; i < currentQuestion.choices.length; i++) {
  const choice = currentQuestion.choices[i];
  const choiceButton = document.createElement("button");
  choiceButton.textContent = choice;
  choiceButton.addEventListener("click", function () {
  checkAnswer(i);
  });
  choicesContainer.appendChild(choiceButton);
  }
  }