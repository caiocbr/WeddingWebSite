window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');

    // Esconde a tela de loading quando todos os elementos são carregados e mostra o conteúdo principal
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';
});