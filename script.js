console.log("Proyecto DC Tríada iniciado");
console.log(document.documentElement.scrollTop);



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

// Sonido del pie de pagina
const footer = document.getElementById('footerSection');
const sound = document.getElementById('hoverSound');

footer.addEventListener('mouseenter', function() {
  sound.currentTime = 0; 
  sound.play().catch(error => console.error("Error reproduciendo el sonido:", error));
});

footer.addEventListener('mouseleave', function() {
  sound.pause();
});



  


  
