window.addEventListener("load", ()=>{
  var boton1 = document.getElementById("boton1");
  var boton2 = document.getElementById("boton2");
  var boton3 = document.getElementById("boton3");

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
  boton2.addEventListener("click", ()=>{
    var cuerpo = document.getElementById("interior")
    var fondo = document.getElementById("cuerpo")
    if(cuerpo.style.animationPlayState == "running")
    {
      var cuerpo = document.getElementById("interior");
      cuerpo.style.animationPlayState = "paused";
      var fondo = document.getElementById("cuerpo");
      fondo.style.animationPlayState = "paused";
    }
    else
    {
      cuerpo.style.animationPlayState = "running";
      var fondo = document.getElementById("cuerpo");
      fondo.style.animationPlayState = "running";
    }
    console.log(eye.style);
  })
  boton3.addEventListener("click", ()=>{
    var ojo = document.getElementById("par1");
    if(ojo.style.animationPlayState == "running")
    {
      var ojo = document.getElementById("par1");
      ojo.style.animationPlayState = "paused";
      var ojo = document.getElementById("par2");
      ojo.style.animationPlayState = "paused";
    }
    else
    {
      ojo.style.animationPlayState = "running";
      var ojo = document.getElementById("par2");
      ojo.style.animationPlayState = "running";
    }
  })

  var rojo = document.getElementById("rojo"); 
  var amarillo = document.getElementById("amarillo"); 
  var verde = document.getElementById("verde"); 
  var azul = document.getElementById("azul"); 
  var interior = document.getElementById("interior")
  var parpado = document.getElementById("parpado")

  rojo.addEventListener("click", ()=>{
    interior.style.backgroundColor = "red";
    interior.style.borderColor = "red";
    parpado.style.backgroundColor = "red";
    parpado.style.borderColor = "red";
  })

  amarillo.addEventListener("click", ()=>{
    interior.style.backgroundColor = "yellow";
    interior.style.borderColor = "yellow";
    parpado.style.backgroundColor = "yellow";
    parpado.style.borderColor = "yellow";
  })

  verde.addEventListener("click", ()=>{
    interior.style.backgroundColor = "#00cc00";
    interior.style.borderColor = "#00cc00";
    parpado.style.backgroundColor = "#00cc00";
    parpado.style.borderColor = "#00cc00";
  })

  azul.addEventListener("click", ()=>{
    interior.style.backgroundColor = "blue";
    interior.style.borderColor = "blue";
    parpado.style.backgroundColor = "blue";
    parpado.style.borderColor = "blue";
  })
  
})