
// ===============================
// МУЗЫКА
// ===============================

const audio = document.getElementById("bgMusic");

let musicStarted = false;

function startMusic(){

    if(musicStarted) return;

    musicStarted = true;

    audio.volume = 0.4;

    audio.play().catch(()=>{});

}

document.addEventListener("click",startMusic,{once:true});
document.addEventListener("touchstart",startMusic,{once:true});
document.addEventListener("keydown",startMusic,{once:true});

// ===============================
// ЛЕПЕСТКИ
// ===============================

const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left = Math.random()*window.innerWidth+"px";

    petal.style.top = "-40px";

    petal.style.animationDuration =
        (8 + Math.random()*8) + "s";

    petal.style.opacity =
        0.5 + Math.random()*0.5;

    petal.style.transform =
        `scale(${0.5 + Math.random()})`;

    petals.appendChild(petal);

    petal.addEventListener("animationend",()=>{

        petal.remove();

    });

}

setInterval(createPetal,250);