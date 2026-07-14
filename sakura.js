const petals = document.getElementById("petals");

for (let i = 0; i < 60; i++) {
    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = -Math.random() * 100 + "px";

    petal.style.width = (10 + Math.random() * 15) + "px";
    petal.style.height = petal.style.width;

    petal.style.animationDuration = (5 + Math.random() * 8) + "s";
    petal.style.animationDelay = (Math.random() * 5) + "s";

    petals.appendChild(petal);
}