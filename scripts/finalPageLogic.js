document.addEventListener('DOMContentLoaded', function () {
    // Получаем результаты из localStorage
    const score = localStorage.getItem('quizScore');
    const totalQuestions = localStorage.getItem('totalQuestions');

    // Отображаем результат на странице
    document.getElementById('finalScore').textContent = score;
    document.getElementById('totalQuestions').textContent = totalQuestions;

    // Очищаем localStorage после использования (опционально)
    //localStorage.removeItem('quizScore');
    //localStorage.removeItem('totalQuestions');
});