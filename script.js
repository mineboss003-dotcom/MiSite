// ==========================
// ПЛАВНЫЙ ПЕРЕХОД
// ==========================

const link = document.querySelector(".btn");

if(link){

    link.addEventListener("click", function(e){

        e.preventDefault();

        const url = this.href;

        const fade = document.getElementById("fade");

        if(fade){

            fade.classList.add("active");

            setTimeout(()=>{

                window.location.href = url;

            },800);

        }else{

            window.location.href = url;

        }

    });

}



// ==========================
// АВТОЗАПУСК МУЗЫКИ ПО КЛИКУ
// ==========================

const music = document.getElementById("bgMusic");


document.addEventListener("click", function(){

    if(music){

        music.volume = 0.4;

        music.play()
        .catch(error=>{

            console.log("Музыка ждёт разрешения браузера");

        });

    }

});



// ==========================
// СЧЁТЧИК КЛИКОВ
// ==========================

document.addEventListener("click", function(e){


    const heart = document.createElement("div");


    heart.className="heart";

    heart.innerHTML="❤️";


    heart.style.left=e.pageX+"px";

    heart.style.top=e.pageY+"px";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },2000);


});