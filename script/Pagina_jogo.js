const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(() => {
    let randomTime = Math.random() * 6000; 

    
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

 
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert("Vixe, game over :(");
        document.body.innerHTML = '<h1 class="game-over""> Atualize a página e jogue novamente </h1>'; 
    }

    setTimeout(isAlive, randomTime);
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});