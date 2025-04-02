document.addEventListener("DOMContentLoaded", function () {
    // Переключение между вкладками
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');


    // Открытие/закрытие сайдбара на мобильных устройствах
    const sidebar = document.getElementById('sidebar');
    const offcanvasButton = document.querySelector('[data-toggle="offcanvas"]');
    const offcanvasButtonClose = document.querySelector('.close-btn');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');

            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            document.getElementById(target).style.display = 'block';

            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            sidebar.classList.remove('show');
        });
    });

    // Функция для проверки ширины экрана
    function updateSidebarVisibility() {
        if (window.innerWidth >= 768) { // Ширина экрана md и выше
            sidebar.classList.add('show');
        } else {
            // На мобильных устройствах сайдбар скрыт по умолчанию
            if (!sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
            }
        }
    }

    // Проверяем ширину экрана при загрузке страницы
    updateSidebarVisibility();

    // Проверяем ширину экрана при изменении размера окна
    window.addEventListener('resize', updateSidebarVisibility);

    offcanvasButtonClose.addEventListener('click', function () {
        sidebar.classList.remove('show');
    });

    offcanvasButton.addEventListener('click', function () {
        sidebar.classList.toggle('show');
    });
});

// Переключение вкладок
function toggleTab(headerElement, tabId) {
    const tabContent = document.getElementById(tabId);
    const isActive = headerElement.classList.contains('active');

    // Закрываем все вкладки
    document.querySelectorAll('.tab-header').forEach(h => h.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');

    // Открываем текущую, если она была закрыта
    if (!isActive) {
        headerElement.classList.add('active');
        tabContent.style.display = 'block';
    }
}

// Расчет ИМТ
function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100; // в метры
    const weight = parseFloat(document.getElementById('weight').value);
    const resultDiv = document.getElementById('bmi-result');

    // Валидация
    if (!height || !weight || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = `
        <div class="alert alert-danger">
          Пожалуйста, введите корректные значения роста и веса
        </div>
      `;
        resultDiv.style.display = 'block';
        return;
    }

    // Расчет
    const bmi = (weight / (height * height)).toFixed(1);
    let category = '';
    let alertClass = '';

    if (bmi < 18.5) {
        category = 'Недостаточный вес';
        alertClass = 'alert-warning';
    } else if (bmi < 25) {
        category = 'Нормальный вес';
        alertClass = 'alert-success';
    } else if (bmi < 30) {
        category = 'Избыточный вес';
        alertClass = 'alert-warning';
    } else {
        category = 'Ожирение';
        alertClass = 'alert-danger';
    }

    // Вывод результата
    resultDiv.innerHTML = `
      <div class="alert ${alertClass}">
        <h5>Результат:</h5>
        <p>Ваш ИМТ: <strong>${bmi}</strong></p>
        <p>Категория: <strong>${category}</strong></p>
        <p class="mb-0">${getBMITip(bmi)}</p>
      </div>
    `;
    resultDiv.style.display = 'block';
}

// Советы по ИМТ
function getBMITip(bmi) {
    bmi = parseFloat(bmi);
    if (bmi < 18.5) return "Рекомендуется проконсультироваться с врачом о наборе массы.";
    if (bmi < 25) return "Отличный результат! Поддерживайте текущий образ жизни.";
    if (bmi < 30) return "Рекомендуется увеличить физическую активность и пересмотреть питание.";
    return "Рекомендуется обратиться к специалисту для разработки плана снижения веса.";
}