const petals=document.getElementById("petals");

for(let i=0;i<60;i++){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.top=-Math.random()*100+"px";

const size=10+Math.random()*18;

petal.style.width=size+"px";
petal.style.height=size+"px";

petal.style.animationDuration=6+Math.random()*10+"s";

petal.style.animationDelay=Math.random()*5+"s";

petals.appendChild(petal);

}
// ------------------- Светлячки -------------------

const fireflies = document.getElementById("fireflies");

if (fireflies) {

    for (let i = 0; i < 35; i++) {

        const firefly = document.createElement("div");

        firefly.className = "firefly";

        firefly.style.left = Math.random() * 100 + "vw";
        firefly.style.top = Math.random() * 100 + "vh";

        firefly.style.animationDuration =
            4 + Math.random() * 6 + "s";

        firefly.style.animationDelay =
            Math.random() * 5 + "s";

        fireflies.appendChild(firefly);
    }

}