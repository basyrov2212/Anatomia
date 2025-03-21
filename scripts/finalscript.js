// Предположим, что данные из опроса сохранены в localStorage
const userData = JSON.parse(localStorage.getItem('userData'));

// Данные пользователя (пример)
const user = {
    weight: userData.weight || 70, // вес в кг
    height: userData.height || 175, // рост в см
    age: userData.age || 30, // возраст
    gender: userData.gender || 'male', // пол (male/female)
    activityLevel: userData.activityLevel || 'Средний' // уровень активности (low, moderate, high)
};

// Расчет ИМТ
function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
}

// Категория ИМТ
function getBMICategory(bmi) {
    if (bmi < 18.5) return "Недостаточный вес";
    if (bmi >= 18.5 && bmi < 24.9) return "Нормальный вес";
    if (bmi >= 25 && bmi < 29.9) return "Избыточный вес";
    return "Ожирение";
}

// Расчет ежедневного потребления калорий (формула Харриса-Бенедикта)
function calculateDailyCalories(weight, height, age, gender, activityLevel) {
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Учет уровня активности
    const activityMultipliers = {
        Низкий: 1.2,
        Средний: 1.55,
        Высокий: 1.9
    };
    return Math.round(bmr * activityMultipliers[activityLevel]);
}

// Расчет ежедневного потребления воды
function calculateDailyWater(weight) {
    return Math.round(weight * 0.035); // 35 мл на 1 кг веса
}

// Обновление данных на странице
function updateResults() {
    const bmi = calculateBMI(user.weight, user.height);
    const bmiCategory = getBMICategory(bmi);
    const calories = calculateDailyCalories(user.weight, user.height, user.age, user.gender, user.activityLevel);
    const water = calculateDailyWater(user.weight);

    // ИМТ
    document.getElementById('bmi-value').textContent = `Ваш ИМТ: ${bmi}`;
    document.getElementById('bmi-category').textContent = `Категория: ${bmiCategory}`;
    document.getElementById('bmi-progress').style.width = `${(bmi / 40) * 100}%`; // Прогресс-бар (макс. 40)

    // Калории
    document.getElementById('calories-value').textContent = `${calories} ккал`;

    // Вода
    document.getElementById('water-value').textContent = `${water} л`;
}

// Запуск при загрузке страницы
updateResults();