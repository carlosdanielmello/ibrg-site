// Carregar programações do CMS
let allProgramacoes = [];

async function loadProgramacoes() {
    try {
        // Tenta caminhos diferentes para garantir que encontra o arquivo
        let response = await fetch('/data/programacoes.json');
        
        // Se não encontrar na raiz, tenta caminho relativo
        if (!response.ok) {
            response = await fetch('../data/programacoes.json');
        }
        
        if (!response.ok) {
            throw new Error('Arquivo programacoes.json não encontrado');
        }
        
        const data = await response.json();
        console.log('Programações carregadas:', data);
        
        allProgramacoes = data.programacoes || [];
        
        // NÃO ORDENA MAIS - mantém a ordem definida no CMS
        // O cliente pode arrastar os itens na ordem que quiser
        
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

// Inicializar - REMOVIDAS as funções duplicadas de menu
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProgramacoes);
} else {
    loadProgramacoes();
}