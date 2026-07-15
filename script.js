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