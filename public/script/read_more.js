document.querySelectorAll('.btn-ler-mais').forEach(botao => {
  botao.addEventListener('click', function() {
    // Pega a div '.conteudo-extra' que está logo acima do botão
    const conteudo = this.previousElementSibling;
    
    // Alterna a visibilidade
    if (conteudo.style.display === 'none' || conteudo.style.display === '') {
      conteudo.style.display = 'block';
      this.textContent = 'Ler menos';
    } else {
      conteudo.style.display = 'none';
      this.textContent = 'Ler mais...';
    }
  });
});