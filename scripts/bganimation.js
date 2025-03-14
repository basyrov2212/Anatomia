
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        const randomSize = Math.random() * 100 + 50;

        circle.style.left = `${randomX}px`;
        circle.style.top = `${randomY}px`;
        circle.style.width = `${randomSize}px`;
        circle.style.height = `${randomSize}px`;

        const duration = Math.random() * 20 + 10;
        circle.style.animationDuration = `${duration}s`;
    });
});