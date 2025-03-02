const questions = [
    { question: "Вопрос 1: Каким файлообменником ты пользуешься?", options: ["Конечно же скайпом", "Конечно же майлом", "Конечно же гугл диском", "Никаким"], answer: "Конечно же скайпом" },
    { question: "Вопрос 2: Угадай число?", options: ["1", "2", "3", "!3"], answer: "!3" },
    { question: "Вопрос 3: Фув?", options: ["Да", "Нет"], answer: "Да" },
    { question: "Вопрос 4: Ауф?", options: ["Даъ", "Пидора ответ"], answer: "Даъ" },
    { question: "Вопрос 5: Ъуъ?", options: ["Почти да", "Попич"], answer: "Почти да" },
    
    // Добавьте остальные вопросы здесь...
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('questionText').textContent = question.question;
    const optionsHtml = question.options.map(option => 
        `<button onclick="checkAnswer('${option}')" class="list-group-item list-group-item-action">${option}</button>`
    ).join('');
    document.getElementById('options').innerHTML = optionsHtml;
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('nextButton').style.display = 'none';
    updateProgressBar();
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
        document.getElementById('feedback').innerHTML = '<div class="alert alert-success">Правильно!</div>';
    } else {
        document.getElementById('feedback').innerHTML = `<div class="alert alert-danger">Неправильно. Правильный ответ: ${question.answer}</div>`;
    }
    document.getElementById('nextButton').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        window.location.href = 'final.html';
    }
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

document.getElementById('nextButton').addEventListener('click', nextQuestion);

displayQuestion();