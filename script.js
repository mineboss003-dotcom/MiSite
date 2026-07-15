// ---------------- Музыка ----------------

const music = document.getElementById("bgMusic");

document.addEventListener("click", () => {
    if (music) {
        music.play().catch(() => {});
    }
}, { once: true });


// ---------------- Сердечки ----------------

document.addEventListener("click", function (e) {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);

});


// ---------------- Звёзды ----------------

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


// ---------------- Переход между страницами ----------------

const btn = document.querySelector(".btn");

if (btn) {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        const fade = document.getElementById("fade");

        if (fade) {

            fade.classList.add("active");

            setTimeout(() => {

                window.location = btn.href;

            }, 800);

        } else {

            window.location = btn.href;

        }

    });

}
``