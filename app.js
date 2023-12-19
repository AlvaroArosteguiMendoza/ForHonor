document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll(".mostrar-imagen");
    const divs = document.querySelectorAll(".oculto");
  
    imagenes.forEach((imagen) => {
      imagen.addEventListener("click", function() {
      
        const target = this.getAttribute("data-target");
  
       
        divs.forEach((div) => {
          div.style.display = "none";
        });
  
        const divMostrar = document.getElementById(target);
        divMostrar.style.display = "block";
      });
    });
  });

