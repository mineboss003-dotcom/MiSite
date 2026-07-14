const petals = document.getElementById("petals");

for(let i=0;i<70;i++){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.top=-Math.random()*100+"px";

petal.style.width=(12+Math.random()*12)+"px";

petal.style.height=petal.style.width;

petal.style.animationDuration=(6+Math.random()*6)+"s";

petal.style.animationDelay=(Math.random()*6)+"s";

petals.appendChild(petal);

}