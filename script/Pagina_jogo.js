const carro = document.getElementById("carro");
const cone = document.getElementById("cone");

function jump() {
    if (carro.classList != "jump") {
        carro.classList.add("jump");

        setTimeout(function () {
            carro.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(() => {
    let randomTime = Math.random() * 6000; 

    
    let carroTop = parseInt(window.getComputedStyle(carro).getPropertyValue("top"));

 
    let coneLeft = parseInt(window.getComputedStyle(cone).getPropertyValue("left"));

    
    if (coneLeft < 50 && coneLeft > 0 && carroTop >= 140){
        alert("Vixe, Ta barbeiro ein :(");
        document.body.innerHTML = '<h1 class="game-over""> Atualize a página e jogue novamente </h1>'; 
    }

    setTimeout(isAlive, randomTime);
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});