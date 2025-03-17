const questions = [
    {
        question: "Какой ваш основной мотив для похудения?",
        options: [
            { text: "Здоровье", feedback: "Сюда нужен дополнительный текст." },
            { text: "Внешний вид", feedback: "Сюда нужен дополнительный текст" },
            { text: "Уверенность в себе", feedback: "Сюда нужен дополнительный текст." }
        ]
    },
    {
        question: "Какого результата вы хотите достичь?",
        options: [
            { text: "Сбросить 5-10 кг.", feedback: "Сюда нужен дополнительный текст" },
            { text: "Сбросить 10-15 кг.", feedback: "Сюда нужен дополнительный текст" },
            { text: "Сбросить более 15 кг.", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Ваш возраст",
        options: [
            { text: "до 18 лет", feedback: "А зачем, на главной уже идет отбор по возрасту. И сюда нужен дополнительный текст." },
            { text: "18-35 лет", feedback: "А зачем, на главной уже идет отбор по возрасту. И сюда нужен дополнительный текст." },
            { text: "35-50 лет", feedback: "А зачем, на главной уже идет отбор по возрасту. И сюда нужен дополнительный текст." },
            { text: "Более 50 лет", feedback: "А зачем, на главной уже идет отбор по возрасту. И сюда нужен дополнительный текст." }
        ]
    },
    {
        question: "Укажите ваш рост:",
        options: [
            { text: "", input: true } 
        ]
    },
    {
        question: "У вас есть медицинские противопоказания для похудения?",
        options: [
            { text: "Да", feedback: "Сюда нужен дополнительный текст" },
            { text: "Нет", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Как вы оцениваете свой уровень стресса?",
        options: [
            { text: "Очень высокий", feedback: "Сюда нужен дополнительный текст" },
            { text: "Высокий", feedback: "Сюда нужен дополнительный текст" },
            { text: "Средний", feedback: "Сюда нужен дополнительный текст" },
            { text: "Низкий", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Есть ли у вас хронические заболевания?",
        options: [
            { text: "Да (укажите)" } ,
            { text: "", input: true } ,
            { text: "Нет", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "На сколько важен для вас быстрый результат?",
        options: [
            { text: "Очень важен", feedback: "Сюда нужен дополнительный текст" },
            { text: "Важен", feedback: "Сюда нужен дополнительный текст" },
            { text: "Не очень важен", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Вы уже пробовали худеть ранее?",
        options: [
            { text: "Да", feedback: "Сюда нужен дополнительный текст" },
            { text: "Нет", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    //10 вопрос
    {
        question: "Какой срок вы себе ставите для достижения результата?",
        options: [
            { text: "Менее месяца", feedback: "Сюда нужен дополнительный текст" },
            { text: "1-3 месяца", feedback: "Сюда нужен дополнительный текст" },
            { text: "3-6 месяцев", feedback: "Сюда нужен дополнительный текст" },
            { text: "Более 6 месяцев", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Сколько времени в среднем вы спите за ночь?",
        options: [
            { text: "Менее 6 часов", feedback: "Сюда нужен дополнительный текст" },
            { text: "6-7 часов", feedback: "Сюда нужен дополнительный текст" },
            { text: "7-8 часов", feedback: "Сюда нужен дополнительный текст" },
            { text: "Более 8 часов", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Сколько воды вы выпиваете в день?",
        options: [
            { text: "Менее 1 литра", feedback: "Сюда нужен дополнительный текст" },
            { text: "1-1,5 литра", feedback: "Сюда нужен дополнительный текст" },
            { text: "1,5-2 литра", feedback: "Сюда нужен дополнительный текст" },
            { text: "Более 3 литров", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Как часто вы едите вне дома?",
        options: [
            { text: "Ежедневно", feedback: "Сюда нужен дополнительный текст" },
            { text: "3-4 раза в неделю", feedback: "Сюда нужен дополнительный текст" },
            { text: "1-2 раза в неделю", feedback: "Сюда нужен дополнительный текст" },
            { text: "Реже", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Готовы ли вы изменить свой рацион питания?",
        options: [
            { text: "Да", feedback: "Сюда нужен дополнительный текст" },
            { text: "Нет", feedback: "Сюда нужен дополнительный текст" },
            { text: "Частично", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Как Вы относитесь к БАДам (добавки с биоактивными компонентами для дополнения рациона питания)?",
        options: [
            { text: "Положительно", feedback: "Сюда нужен дополнительный текст" },
            { text: "Отрицательно", feedback: "Сюда нужен дополнительный текст" },
            { text: "Нейтрально", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Готовы ли Вы добавить комплекс Бадов в свой рацион питания для полноценного эффекта?",
        options: [
            { text: "Да", feedback: "Сюда нужен дополнительный текст" },
            { text: "Нет", feedback: "Сюда нужен дополнительный текст" },
        ]
    },
    {
        question: "Есть ли у вас вредные привычки?",
        options: [
            { text: "Да", feedback: "Сюда нужен дополнительный текст" },
            { text: "Нет", feedback: "Сюда нужен дополнительный текст" },
        ]
    },
    {
        question: "Готовы ли вы отказаться от вредных привычек (алкоголь, курение)?",
        options: [
            { text: "Да", feedback: "Сюда нужен дополнительный текст" },
            { text: "Нет", feedback: "Сюда нужен дополнительный текст" },
            { text: "Частично", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Есть ли у вас аллергии на продукты питания?",
        options: [
            { text: "Да", feedback: "Сюда нужен дополнительный текст" },
            { text: "Нет", feedback: "Сюда нужен дополнительный текст" },
        ]
    },
    {
        question: "Как вы оцениваете свой уровень физической активности?",
        options: [
            { text: "Очень низкий", feedback: "Сюда нужен дополнительный текст" },
            { text: "Низкий", feedback: "Сюда нужен дополнительный текст" },
            { text: "Средний", feedback: "Сюда нужен дополнительный текст" },
            { text: "Высокий", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Сколько шагов в день в среднем Вы проходите?",
        options: [
            { text: "до 10 000 шагов", feedback: "Сюда нужен дополнительный текст" },
            { text: "10 000-15 000 шагов", feedback: "Сюда нужен дополнительный текст" },
            { text: "более 20 000 шагов", feedback: "Сюда нужен дополнительный текст" },
            { text: "Не считаю количество шагов", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Как часто вы готовы заниматься спортом?",
        options: [
            { text: "Ежедневно", feedback: "Сюда нужен дополнительный текст" },
            { text: "3-4 раза в неделю", feedback: "Сюда нужен дополнительный текст" },
            { text: "1-2 раза в неделю", feedback: "Сюда нужен дополнительный текст" },
            { text: "Реже", feedback: "Сюда нужен дополнительный текст" },
            { text: "Не готов", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Вы предпочитаете тренироваться дома или в спортзале?",
        options: [
            { text: "Дома", feedback: "Сюда нужен дополнительный текст" },
            { text: "В спортзале", feedback: "Сюда нужен дополнительный текст" },
            { text: "На свежем воздухе", feedback: "Сюда нужен дополнительный текст" },
        ]
    },
    {
        question: "Вы готовы вести дневник питания?",
        options: [
            { text: "Да", feedback: "Сюда нужен дополнительный текст" },
            { text: "Нет", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Готовы ли вы консультироваться со специалистом (диетолог, нутрициолог, тренер)?",
        options: [
            { text: "Да", feedback: "Сюда нужен дополнительный текст" },
            { text: "Нет", feedback: "Сюда нужен дополнительный текст" }
        ]
    },
    {
        question: "Что для вас является самым большим препятствием на пути к похудению?",
        options: [
            { text: "Нехватка времени", feedback: "Сюда нужен дополнительный текст" },
            { text: "Сила воли", feedback: "Сюда нужен дополнительный текст" },
            { text: "Отсутствие мотивации", feedback: "Сюда нужен дополнительный текст" },
            { text: "Другое (укажите)"},
            { text: "", input: true }
        ]
    },
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
        if (option.input) {
            // Создаем текстовое поле
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'input-text';
            input.placeholder = 'Введите ваш ответ';
            input.addEventListener('input', () => {
                feedbackElement.textContent = `Вы ввели: ${input.value} см.`;
                feedbackElement.style.display = 'block';
                nextButton.disabled = false;
            });
            optionsElement.appendChild(input);
        } else {
            const button = document.createElement('button');
            button.className = 'btn btn-danger w-100 mb-2 options';
            button.textContent = option.text;
            button.addEventListener('click', () => showFeedback(option.feedback));
            optionsElement.appendChild(button);
        }
        
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