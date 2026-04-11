// Carregar programações do CMS
let allProgramacoes = [];

async function loadProgramacoes() {
    try {
        // Tenta caminhos diferentes para garantir que encontra o arquivo
        let response = await fetch('/data/programacoes.json');
        
        // Se não encontrar na raiz, tenta caminho relativo
        if (!response.ok) {
            response = await fetch('data/programacoes.json');
        }
        
        if (!response.ok) {
            throw new Error('Arquivo programacoes.json não encontrado');
        }
        
        const data = await response.json();
        console.log('Programações carregadas:', data); // Para debug
        
        allProgramacoes = data.programacoes || [];
        
        // Ordenar por dia da semana
        const ordemDias = {
            "Segunda-feira": 1,
            "Terça-feira": 2,
            "Quarta-feira": 3,
            "Quinta-feira": 4,
            "Sexta-feira": 5,
            "Sábado": 6,
            "Domingo": 7
        };
        
        allProgramacoes.sort((a, b) => {
            return (ordemDias[a.dia] || 99) - (ordemDias[b.dia] || 99);
        });
        
        renderProgramacoes();
        renderSchedule();
        
    } catch (error) {
        console.error('Erro ao carregar programações:', error);
        const container = document.getElementById('programacoesContainer');
        if (container) {
            container.innerHTML = `
                <div class="text-center py-12 col-span-full">
                    <i class="fas fa-exclamation-triangle text-4xl text-red-500"></i>
                    <p class="text-gray-500 mt-4">Erro ao carregar programações. Tente novamente mais tarde.</p>
                    <p class="text-gray-400 text-sm mt-2">Detalhe: ${error.message}</p>
                </div>`;
        }
    }
}

function renderProgramacoes() {
    const container = document.getElementById('programacoesContainer');
    if (!container) return;
    
    if (allProgramacoes.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 col-span-full">
                <i class="fas fa-calendar-alt text-4xl text-gray-400"></i>
                <p class="text-gray-500 mt-4">Nenhuma programação cadastrada ainda.</p>
            </div>`;
        return;
    }
    
    container.innerHTML = allProgramacoes.map(prog => `
        <div class="program-card bg-white">
            <div class="program-image">
                <img src="${prog.imagem || '/img/atividades/default.jpg'}" alt="${prog.titulo}" onerror="this.src='/img/atividades/default.jpg'">
            </div>
            <div class="program-content">
                <div class="flex flex-wrap items-center gap-3 mb-3">
                    <span class="program-day"><i class="fas fa-calendar-day mr-2"></i> ${prog.dia}</span>
                    <span class="program-time"><i class="fas fa-clock mr-2"></i> ${prog.horario}</span>
                </div>
                <h3 class="program-title">${prog.titulo}</h3>
                <p class="program-description">${prog.descricao}</p>
            </div>
        </div>
    `).join('');
}

function renderSchedule() {
    const container = document.getElementById('scheduleContainer');
    if (!container) return;
    
    if (allProgramacoes.length === 0) {
        container.innerHTML = '<div class="text-center py-12"><p class="text-gray-500">Nenhuma programação cadastrada.</p></div>';
        return;
    }
    
    // Agrupar por dia
    const dias = {
        "Segunda-feira": [],
        "Terça-feira": [],
        "Quarta-feira": [],
        "Quinta-feira": [],
        "Sexta-feira": [],
        "Sábado": [],
        "Domingo": []
    };
    
    allProgramacoes.forEach(prog => {
        if (dias[prog.dia]) {
            dias[prog.dia].push(prog);
        }
    });
    
    const diasTraducao = {
        "Segunda-feira": "SEGUNDA",
        "Terça-feira": "TERÇA",
        "Quarta-feira": "QUARTA",
        "Quinta-feira": "QUINTA",
        "Sexta-feira": "SEXTA",
        "Sábado": "SÁBADO",
        "Domingo": "DOMINGO"
    };
    
    let html = '';
    
    for (const [dia, programas] of Object.entries(dias)) {
        if (programas.length === 0) continue;
        
        programas.forEach(prog => {
            html += `
                <div class="schedule-card p-5">
                    <div class="schedule-item flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                        <div class="flex flex-wrap items-center gap-3 sm:gap-6">
                            <span class="schedule-day text-base sm:text-lg"><i class="fas fa-calendar-day mr-2 text-[#C2994D]"></i>${diasTraducao[dia]}</span>
                            <span class="schedule-time"><i class="fas fa-clock mr-1 text-gray-400"></i>${prog.horario}</span>
                        </div>
                        <div class="flex-1">
                            <span class="schedule-title font-semibold text-gray-800 text-base sm:text-lg">${prog.titulo}</span>
                        </div>
                        <i class="fas fa-chevron-right text-gray-400 hidden sm:block"></i>
                    </div>
                </div>
            `;
        });
    }
    
    container.innerHTML = html || '<div class="text-center py-12"><p class="text-gray-500">Nenhuma programação cadastrada.</p></div>';
}

// Menu mobile toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
}

// Dropdown mobile toggle - Sobre Nós
const mobileDropdownButton1 = document.getElementById('mobile-dropdown-button-1');
const mobileDropdown1 = document.getElementById('mobile-dropdown-1');
if (mobileDropdownButton1 && mobileDropdown1) {
    const chevronIcon1 = mobileDropdownButton1.querySelector('i');
    mobileDropdownButton1.addEventListener('click', () => {
        mobileDropdown1.classList.toggle('hidden');
        chevronIcon1.classList.toggle('rotate-180');
    });
}

// Dropdown mobile toggle - Missões
const mobileDropdownButton2 = document.getElementById('mobile-dropdown-button-2');
const mobileDropdown2 = document.getElementById('mobile-dropdown-2');
if (mobileDropdownButton2 && mobileDropdown2) {
    const chevronIcon2 = mobileDropdownButton2.querySelector('i');
    mobileDropdownButton2.addEventListener('click', () => {
        mobileDropdown2.classList.toggle('hidden');
        chevronIcon2.classList.toggle('rotate-180');
    });
}

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProgramacoes);
} else {
    loadProgramacoes();
}