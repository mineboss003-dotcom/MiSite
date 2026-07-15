// ==========================
// ЛЕПЕСТКИ САКУРЫ
// ==========================

const petals = document.getElementById("petals");

if (petals) {

    for(let i = 0; i < 60; i++){

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.top = Math.random() * -100 + "px";

        let size = 10 + Math.random() * 15;

        petal.style.width = size + "px";
        petal.style.height = size + "px";

        petal.style.animationDuration =
        5 + Math.random() * 8 + "s";

        petal.style.animationDelay =
        Math.random() * 5 + "s";

        petals.appendChild(petal);

    }

}

// ==========================
// ЗВЁЗДЫ
// ==========================

const stars = document.getElementById("stars");

if(stars){

    for(let i = 0; i < 120; i++){

        const star = document.createElement("div");

        star.className="star";

        star.style.left =
        Math.random()*100+"vw";

        star.style.top =
        Math.random()*100+"vh";

        star.style.animationDelay =
        Math.random()*3+"s";

        stars.appendChild(star);

    }

}

// ==========================
// СВЕТЛЯЧКИ
// ==========================

const fireflies = document.getElementById("fireflies");

if(fireflies){

    for(let i = 0; i < 35; i++){

        const firefly =
        document.createElement("div");

        firefly.className="firefly";

        firefly.style.left =
        Math.random()*100+"vw";

        firefly.style.top =
        Math.random()*100+"vh";

        firefly.style.animationDuration =
        2 + Math.random()*5 + "s";

        firefly.style.animationDelay =
        Math.random()*5+"s";

        fireflies.appendChild(firefly);

    }

}

// ==========================
// МУЗЫКА
// ==========================

const music = document.getElementById("bgMusic");

document.addEventListener("click",()=>{

    if(music){

        music.volume = 0.4;

        music.play()
        .catch(()=>{});

    }

},{once:true});

// ==========================
// СЕРДЕЧКИ ПО КЛИКУ
// ==========================

document.addEventListener("click",(e)=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=e.pageX+"px";

    heart.style.top=e.pageY+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },2000);

});
