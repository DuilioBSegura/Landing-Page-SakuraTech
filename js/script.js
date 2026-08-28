/**
 * Sakura Tech - Script de Interatividade
 * Menu Mobile Hambúrguer e Navegação Acessível
 */

document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const navList = document.getElementById('nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!btnMenu || !navList) return;

    // Alternar abertura e fechamento do menu ao clicar no botão
    btnMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navList.classList.toggle('active');
        btnMenu.classList.toggle('active');
        
        // Acessibilidade: atualiza o aria-expanded e aria-label
        btnMenu.setAttribute('aria-expanded', String(isOpen));
        btnMenu.setAttribute('aria-label', isOpen ? 'Fechar Menu' : 'Abrir Menu');
    });

    // Fechar o menu automaticamente ao clicar em qualquer link de navegação
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                btnMenu.classList.remove('active');
                btnMenu.setAttribute('aria-expanded', 'false');
                btnMenu.setAttribute('aria-label', 'Abrir Menu');
            }
        });
    });

    // Fechar ao clicar fora do menu
    document.addEventListener('click', (event) => {
        if (!navList.contains(event.target) && !btnMenu.contains(event.target)) {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                btnMenu.classList.remove('active');
                btnMenu.setAttribute('aria-expanded', 'false');
                btnMenu.setAttribute('aria-label', 'Abrir Menu');
            }
        }
    });

    // Fechar com a tecla Escape (acessibilidade via teclado)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navList.classList.contains('active')) {
            navList.classList.remove('active');
            btnMenu.classList.remove('active');
            btnMenu.setAttribute('aria-expanded', 'false');
            btnMenu.setAttribute('aria-label', 'Abrir Menu');
            btnMenu.focus();
        }
    });
});
