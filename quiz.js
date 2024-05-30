let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score-value');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', checkAnswer);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score += 10;
        updateScore();
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function updateScore() {
    scoreElement.textContent = score;
}

function endQuiz() {
    questionElement.textContent = 'Quiz completed!';
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
    updateScore(); // Ensure the final score is displayed
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = 'block'; // Show the "Next" button
    } else {
        endQuiz();
    }
}

nextButton.addEventListener('click', nextQuestion);

loadQuestion();