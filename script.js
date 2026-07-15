// ===== Запуск музыки =====
const music = document.getElementById("bgMusic");

document.addEventListener("click", () => {
    if (music && music.paused) {
        music.play().catch(err => console.log(err));
    }
}, { once: true });


// ===== Сердечки при клике =====
document.addEventListener("click", function (e) {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.className = "heart";

    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
});


// ===== Создание звёзд =====
const stars = document.getElementById("stars");

if (stars) {

    for (let i = 0; i < 120; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay = Math.random() * 2 + "s";

        stars.appendChild(star);
    }

}
// Плавный переход между страницами
const btn = document.querySelector(".btn");

if (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        const fade = document.getElementById("fade");
        fade.classList.add("active");

        setTimeout(() => {
            window.location.href = "love.html";
        }, 800);
    });
}
// ===== Светлячки =====

const fireflies = document.getElementById("fireflies");

if (fireflies) {

    for (let i = 0; i < 35; i++) {

        const firefly = document.createElement("div");

        firefly.className = "firefly";

        firefly.style.left = Math.random() * window.innerWidth + "px";
        firefly.style.top = Math.random() * window.innerHeight + "px";

        firefly.style.animationDuration =
            (8 + Math.random() * 8) + "s, " +
            (1.5 + Math.random()) + "s";

        firefly.style.animationDelay =
            Math.random() * 5 + "s";

        fireflies.appendChild(firefly);

    }

}