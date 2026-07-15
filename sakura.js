// Получаем контейнер для лепестков
const petals = document.getElementById('petals');

// Создаём лепестки
for (let i = 0; i < 60; i++) {
    const petal = document.createElement('div');

    petal.className = 'petal';

    // Случайная позиция
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = -Math.random() * 100 + 'px';

    // Случайный размер
    const size = 10 + Math.random() * 18;
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';

    // Случайная скорость
    petal.style.animationDuration = 6 + Math.random() * 10 + 's';
    petal.style.animationDelay = Math.random() * 5 + 's';

    petals.appendChild(petal);
}