const questions = [
    {
        question: "Как часто вы занимаетесь спортом?",
        options: [
            { text: "Каждый день", feedback: "Отлично! Регулярные тренировки полезны для здоровья." },
            { text: "Несколько раз в неделю", feedback: "Хорошо! Вы поддерживаете активный образ жизни." },
            { text: "Редко", feedback: "Попробуйте уделять больше времени физической активности." },
            { text: "Никогда", feedback: "Стоит задуматься о начале занятий спортом для улучшения здоровья." }
        ]
    },
    {
        question: "Какой жанр фильмов вы предпочитаете?",
        options: [
            { text: "Комедии", feedback: "Отличный выбор! Смех продлевает жизнь." },
            { text: "Драмы", feedback: "Драмы помогают лучше понять жизнь и эмоции." },
            { text: "Фантастика", feedback: "Фантастика позволяет погрузиться в удивительные миры." },
            { text: "Ужасы", feedback: "Ужасы — для любителей острых ощущений!" }
        ]
    },
    {
        question: "Как вы обычно проводите выходные?",
        options: [
            { text: "Встречаюсь с друзьями", feedback: "Отлично! Социальные связи важны для счастья." },
            { text: "Занимаюсь хобби", feedback: "Хобби помогает расслабиться и развиваться." },
            { text: "Отдыхаю дома", feedback: "Иногда полезно просто отдохнуть и ничего не делать." },
            { text: "Работаю", feedback: "Не забывайте отдыхать, чтобы избежать выгорания." }
        ]
    },
    {
        question: "Какой способ обучения вам ближе?",
        options: [
            { text: "Чтение книг", feedback: "Книги — источник знаний и вдохновения." },
            { text: "Просмотр видео", feedback: "Видео помогает визуализировать информацию." },
            { text: "Практика", feedback: "Практика — лучший способ закрепить знания." },
            { text: "Обсуждение с другими", feedback: "Обсуждения помогают глубже понять тему." }
        ]
    },
    {
        question: "Как вы относитесь к новым технологиям?",
        options: [
            { text: "Очень положительно", feedback: "Технологии делают нашу жизнь проще и интереснее." },
            { text: "Нейтрально", feedback: "Главное — использовать технологии с умом." },
            { text: "Скептически", feedback: "Технологии имеют свои плюсы и минусы." },
            { text: "Отрицательно", feedback: "Иногда стоит давать себе отдых от технологий." }
        ]
    }
];

let currentQuestion = 0;

const progressBar = document.getElementById('progress-bar');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'btn btn-danger w-100 mb-2 options';
        button.textContent = option.text;
        button.addEventListener('click', () => showFeedback(option.feedback));
        optionsElement.appendChild(button);
    });
    updateProgressBar();
}

function showFeedback(feedback) {
    feedbackElement.textContent = feedback;
    feedbackElement.style.display = 'block';
    nextButton.disabled = false;
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        feedbackElement.style.display = 'none';
        nextButton.disabled = true;
    } else {
        showCompletionMessage();
    }
});

function showCompletionMessage() {
    questionElement.textContent = "Спасибо за участие в опросе!";
    optionsElement.innerHTML = '';
    feedbackElement.style.display = 'none';
    nextButton.style.display = 'none';
}

loadQuestion();