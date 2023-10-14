const form = document.getElementById('quiz-form');
const resultsDiv = document.getElementById('quiz-results');
const answerP = document.getElementById('answer');

const questions = [
    {
        question: 'What is the capital of France?',
        correctAnswer: 'paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        correctAnswer: 'mars',
    },
    {
        question: 'What is the largest mammal in the world?',
        correctAnswer: 'blue-whale',
    },
];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;
    const formData = new FormData(form);
    let i = 0;
    for (let entry of formData) {
        if (entry[1] === questions[i].correctAnswer) {
            score++;
        }
        i++;
    }
    const totalQuestions = questions.length;
    const finalScore = Math.floor((score / totalQuestions) * 100);
    showResults(finalScore);
    // console.log("hai");
});

function showResults(score) {
    const totalScore = document.getElementById('score');
    totalScore.innerText = `Your Score: ${score}`;
    resultsDiv.style.display = 'block';
    answerP.style.display = 'block'
}

