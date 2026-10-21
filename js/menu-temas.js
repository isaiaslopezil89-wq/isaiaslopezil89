/* ============================================================
   MENÚ DE TEMAS Y SUMARIO · Comportamiento interactivo
   ============================================================ */
(function () {
  function iniciar() {
    const botonesTema = document.querySelectorAll(".panel-menu.temas .tema-boton");
    
    botonesTema.forEach(function (b) {
      b.addEventListener("click", function (e) {
        var item = b.parentNode;
        var abierto = item.classList.toggle("abierto");
        b.setAttribute("aria-expanded", abierto ? "true" : "false");
        
        botonesTema.forEach(function (o) {
          if (o !== b) { 
            o.parentNode.classList.remove("abierto"); 
            o.setAttribute("aria-expanded", "false"); 
          }
        });
      });
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".tema-item")) {
        botonesTema.forEach(function (o) { 
          o.parentNode.classList.remove("abierto"); 
          o.setAttribute("aria-expanded", "false"); 
        });
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();