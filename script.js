var boton1 = document.getElementById("boton1");

boton1.addEventListener("click", ()=>{
  var ojo = document.getElementById("derecha");
  if(ojo.style.animationPlayState == "running")
  {
    var ojo = document.getElementById("derecha");
    ojo.style.animationPlayState = "paused";
    var ojo = document.getElementById("izquierda");
    ojo.style.animationPlayState = "paused";
  }
  else
  {
    ojo.style.animationPlayState = "running";
    var ojo = document.getElementById("izquierda");
    ojo.style.animationPlayState = "running";
  }
})

var rojo = document.getElementById("rojo"); 
var amarillo = document.getElementById("amarillo"); 
var verde = document.getElementById("verde"); 
var azul = document.getElementById("azul"); 
var interior = document.getElementById("interior")

rojo.addEventListener("click", ()=>{
  interior.style.backgroundColor = "red";
})

amarillo.addEventListener("click", ()=>{
  interior.style.backgroundColor = "yellow";
})

verde.addEventListener("click", ()=>{
  interior.style.backgroundColor = "#00cc00";
})

azul.addEventListener("click", ()=>{
  interior.style.backgroundColor = "blue";
})