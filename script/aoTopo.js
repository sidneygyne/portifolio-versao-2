let voltaAoTopo = document.getElementById("botaoVoltarTopo");

// Quando rolar 20px a partir do topo do documento, mostra o botão
window.onscroll = function() {
  funcaoScroll();
};

function funcaoScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    voltaAoTopo.style.display = "block";
  } else {
    voltaAoTopo.style.display = "none";
  }
}
  
  // Ao clicar no botão, rola até o topo do documento
  function irAoTopo() {
    document.body.scrollTop = 0; // Para o Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
  }