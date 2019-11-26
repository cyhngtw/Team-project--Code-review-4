var button = document.getElementById("button");
button.addEventListener("click", popUp, false);

function popUp(){
    var name = document.getElementById("userName").value;
    alert("Thanks for writing to us, " + name + "!");
}
//just for presentation
// function servusPlay(){
//     var audio = new Audio("sound/servus.mp3");
//     audio.play();
// }

// button.addEventListener("click", servusPlay);

function close () {

document.getElementById("servus").innerHTML = "Bussi baba!";
}

button.addEventListener("click", close);