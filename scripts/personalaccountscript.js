document.addEventListener("DOMContentLoaded", function() {
    // Переключение между вкладками
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    
    // Открытие/закрытие сайдбара на мобильных устройствах
    const sidebar = document.getElementById('sidebar');
    const offcanvasButton = document.querySelector('[data-toggle="offcanvas"]');
    const offcanvasButtonClose = document.querySelector('.close-btn');

    // Калькулятор ИМТ
    const bmiCalculator = document.getElementById('bmi-calculator');
    const bmiResult = document.getElementById('bmi-result');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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

    bmiCalculator.addEventListener('submit', function(e) {
        e.preventDefault();
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100;

        if (weight && height) {
            const bmi = (weight / (height * height)).toFixed(2);
            bmiResult.textContent = `Ваш ИМТ: ${bmi}`;
        } else {
            bmiResult.textContent = 'Пожалуйста, введите корректные данные.';
        }
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

    offcanvasButtonClose.addEventListener('click', function(){
        sidebar.classList.remove('show');
    });

    offcanvasButton.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });
});