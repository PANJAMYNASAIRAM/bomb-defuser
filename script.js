
let defuser = document.getElementById("defuser");
let timer = document.getElementById("timer");

let countdown = 10;
let uniqueId = setInterval(function() {
    countdown = countdown - 1;
    timer.textContent = countdown;
if (countdown === 0) {  
        timer.textContent= "BooM"; 
        clearInterval(uniqueId);
    }
}, 1000);

function sai() {
    let textvalue = defuser.value;
    if (textvalue === "defuse") {
        timer.textContent = "you did it!!";
        clearInterval(uniqueId);
    }
}
defuser.addEventListener("keydown", sai);