console.log("Proyecto DC Tríada iniciado");
console.log(document.documentElement.scrollTop);


// Funcion del boton de volver al inicio
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  const btn = document.getElementById("scrollTopBtn");
  if (window.pageYOffset > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Funcion de Sonido para la pagina
const footer = document.getElementById('footerSection');
const texto = document.getElementById('texto'); 

const soundFooter = document.getElementById('hoverSoundFooter');
const soundTexto = document.getElementById('hoverSoundTexto');

// Sonido para el footer
footer.addEventListener('mouseenter', function() {
  soundFooter.currentTime = 0;
  soundFooter.play().catch(error => console.error("Error reproduciendo el sonido del footer:", error));
});
footer.addEventListener('mouseleave', function() {
  soundFooter.pause();
});

// Sonido para el texto
texto.addEventListener('mouseenter', function() {
  soundTexto.currentTime = 0;
  soundTexto.play().catch(error => console.error("Error reproduciendo el sonido del texto:", error));
});
texto.addEventListener('mouseleave', function() {
  soundTexto.pause();
});




  


  
