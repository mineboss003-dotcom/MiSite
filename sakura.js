const petals=document.getElementById("petals");

for(let i=0;i<60;i++){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=5+Math.random()*8+"s";

petal.style.animationDelay=Math.random()*5+"s";

petals.appendChild(petal);

}
