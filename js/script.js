/* ===========================================
   SCRIPT PRINCIPAL - IBR Graça
   =========================================== */

// Menu mobile toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Dropdown mobile toggle - Sobre Nós
const mobileDropdownButton1 = document.getElementById('mobile-dropdown-button-1');
const mobileDropdown1 = document.getElementById('mobile-dropdown-1');
const chevronIcon1 = mobileDropdownButton1.querySelector('i');

mobileDropdownButton1.addEventListener('click', () => {
    mobileDropdown1.classList.toggle('hidden');
    chevronIcon1.classList.toggle('rotate-180');
});

// Dropdown mobile toggle - Missões
const mobileDropdownButton2 = document.getElementById('mobile-dropdown-button-2');
const mobileDropdown2 = document.getElementById('mobile-dropdown-2');
const chevronIcon2 = mobileDropdownButton2.querySelector('i');

mobileDropdownButton2.addEventListener('click', () => {
    mobileDropdown2.classList.toggle('hidden');
    chevronIcon2.classList.toggle('rotate-180');
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('.relative')) {
        mobileDropdown1.classList.add('hidden');
        mobileDropdown2.classList.add('hidden');
        chevronIcon1.classList.remove('rotate-180');
        chevronIcon2.classList.remove('rotate-180');
    }
});

// Função para fechar o menu mobile e dropdowns
function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileDropdown1.classList.add('hidden');
    mobileDropdown2.classList.add('hidden');
    chevronIcon1.classList.remove('rotate-180');
    chevronIcon2.classList.remove('rotate-180');
}

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();

            // Fecha o menu mobile se estiver aberto (para links internos)
            if (this.classList.contains('mobile-nav-link') ||
                this.parentElement.classList.contains('mobile-nav-link')) {
                closeMobileMenu();
            }

            // Scroll suave para o elemento alvo
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Atualiza a URL sem recarregar a página
            history.pushState(null, null, targetId);
        }
    });
});

// Fecha o menu ao clicar em links do dropdown mobile
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function () {
        if (this.getAttribute('href').startsWith('#')) {
            closeMobileMenu();
        }
    });
});
