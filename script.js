var boton1 = document.getElementById("boton1");

boton1.addEventListener("click", ()=>{
  var ojo = document.getElementById("derecha");
  ojo.style.animationPlayState = "running";
  var ojo = document.getElementById("izquierda");
  ojo.style.animationPlayState = "running";
  console.log(ojo.style);
})