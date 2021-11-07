const dino = document.getElementById('dinozavr');
const cactus = document.getElementById('cactus');

document.addEventListener("keydown",function(event) {
    jump();
})

function jump () {
    if(dino.classList != "jump") {
        dino.classList.add("jump")
    }
        setTimeout( function() {
        dino.classList.remove("jump")
    }, 1000)
}

let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 36 && cactusLeft > 0 && dinoTop >= 150) {
     alert("Oyin tugadi : Yutqizdingiz!!")
    }
}, 5)
