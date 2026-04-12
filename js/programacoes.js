// Carregar programações do CMS
let allProgramacoes = [];

async function loadProgramacoes() {
    try {
        let response = await fetch('/data/programacoes.json');
        
        if (!response.ok) {
            response = await fetch('../data/programacoes.json');
        }
        
        if (!response.ok) {
            throw new Error('Arquivo programacoes.json não encontrado');
        }
        
        const data = await response.json();
        console.log('Programações carregadas:', data);
        
        allProgramacoes = data.programacoes || [];
        
        // ORDENA POR DIA E DEPOIS POR HORÁRIO
        const ordemDias = {
            "Domingo": 1,
            "Segunda-feira": 2,
            "Terça-feira": 3,
            "Quarta-feira": 4,
            "Quinta-feira": 5,
            "Sexta-feira": 6,
            "Sábado": 7
        };
        
        function horarioToNumber(horario) {
            let h = horario.replace('h', ':').replace('h30', ':30');
            let partes = h.split(':');
            let hora = parseInt(partes[0]);
            let minuto = partes[1] ? parseInt(partes[1]) : 0;
            if (isNaN(minuto)) minuto = 0;
            return hora * 60 + minuto;
        }
        
        allProgramacoes.sort((a, b) => {
            const diaA = ordemDias[a.dia] || 99;
            const diaB = ordemDias[b.dia] || 99;
            if (diaA !== diaB) return diaA - diaB;
            
            const horarioA = horarioToNumber(a.horario);
            const horarioB = horarioToNumber(b.horario);
            return horarioA - horarioB;
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
    
    container.innerHTML = allProgramacoes.map((prog, index) => `
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
                <div class="description-wrapper" data-id="${index}">
                    <p class="program-description" id="desc-${index}">${escapeHtml(prog.descricao)}</p>
                    <button class="read-more-btn" data-id="${index}" style="display: none;">
                        <i class="fas fa-chevron-down"></i> Ler mais
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Verifica cada descrição e mostra o botão se necessário
    document.querySelectorAll('.program-description').forEach((desc, idx) => {
        const btn = document.querySelector(`.read-more-btn[data-id="${idx}"]`);
        if (btn) {
            // Verifica se o texto tem mais de 4 linhas (usando altura real)
            const lineHeight = parseInt(getComputedStyle(desc).lineHeight);
            const maxHeight = lineHeight * 4;
            
            // Temporariamente remove o clamp para medir a altura real
            desc.style.webkitLineClamp = 'unset';
            const fullHeight = desc.scrollHeight;
            desc.style.webkitLineClamp = '4';
            
            if (fullHeight > maxHeight + 5) {
                btn.style.display = 'inline-flex';
            }
        }
    });
    
    // Adiciona eventos de "Ler mais" para todos os botões
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = this.getAttribute('data-id');
            const desc = document.getElementById(`desc-${id}`);
            const isExpanded = desc.classList.contains('expanded');
            
            if (isExpanded) {
                desc.classList.remove('expanded');
                desc.style.webkitLineClamp = '4';
                this.innerHTML = '<i class="fas fa-chevron-down"></i> Ler mais';
            } else {
                desc.classList.add('expanded');
                desc.style.webkitLineClamp = 'unset';
                this.innerHTML = '<i class="fas fa-chevron-up"></i> Ler menos';
            }
        });
    });
}

// Função para escapar HTML e evitar injeção de código
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function renderSchedule() {
    const container = document.getElementById('scheduleContainer');
    if (!container) return;
    
    if (allProgramacoes.length === 0) {
        container.innerHTML = '<div class="text-center py-12"><p class="text-gray-500">Nenhuma programação cadastrada.</p></div>';
        return;
    }
    
    const dias = {
        "Domingo": [],
        "Segunda-feira": [],
        "Terça-feira": [],
        "Quarta-feira": [],
        "Quinta-feira": [],
        "Sexta-feira": [],
        "Sábado": []
    };
    
    allProgramacoes.forEach(prog => {
        if (dias[prog.dia]) {
            dias[prog.dia].push(prog);
        }
    });
    
    const diasTraducao = {
        "Domingo": "DOMINGO",
        "Segunda-feira": "SEGUNDA",
        "Terça-feira": "TERÇA",
        "Quarta-feira": "QUARTA",
        "Quinta-feira": "QUINTA",
        "Sexta-feira": "SEXTA",
        "Sábado": "SÁBADO"
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
                            <span class="schedule-title font-semibold text-gray-800 text-base sm:text-lg">${escapeHtml(prog.titulo)}</span>
                        </div>
                        <i class="fas fa-chevron-right text-gray-400 hidden sm:block"></i>
                    </div>
                </div>
            `;
        });
    }
    
    container.innerHTML = html || '<div class="text-center py-12"><p class="text-gray-500">Nenhuma programação cadastrada.</p></div>';
}

// Inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProgramacoes);
} else {
    loadProgramacoes();
}