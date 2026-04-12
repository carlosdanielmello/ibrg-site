// Congregações page script - Lendo do CMS
let allCongregacoes = [];
let currentPage = 1;
const itemsPerPage = 6;
let filteredCongregacoes = [];

async function loadCongregacoesFromJSON() {
    try {
        const response = await fetch('/data/congregacoes.json');
        if (!response.ok) throw new Error('Erro ao carregar congregações');
        
        const data = await response.json();
        allCongregacoes = data.congregacoes || [];
        filteredCongregacoes = [...allCongregacoes];
        
        renderCongregations(currentPage);
        updatePaginationControls();
        
    } catch (error) {
        console.error('Erro ao carregar congregações:', error);
        const container = document.getElementById('congregationsContainer');
        if (container) {
            container.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <i class="fas fa-exclamation-triangle text-4xl text-red-500"></i>
                    <p class="text-gray-500 mt-4">Erro ao carregar congregações. Tente novamente mais tarde.</p>
                </div>`;
        }
    }
}

function renderCongregations(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const congregationsToShow = filteredCongregacoes.slice(startIndex, endIndex);
    const container = document.getElementById('congregationsContainer');
    container.innerHTML = '';

    if (congregationsToShow.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-search fa-3x text-gray-400 mb-4"></i>
                <h3 class="text-xl font-semibold text-gray-700">Nenhuma congregação encontrada</h3>
                <p class="text-gray-500 mt-2">Tente usar termos diferentes ou verifique a ortografia</p>
            </div>`;
        return;
    }

    congregationsToShow.forEach(congregation => {
        const card = document.createElement('div');
        card.className = 'congregation-card bg-white cursor-pointer';
        card.setAttribute('data-id', congregation.nome);
        card.innerHTML = `
            <div class="congregation-image">
                <img src="${congregation.imagem || '/img/congregacao/default.jpg'}" alt="${congregation.nome}" class="w-full h-64 object-cover" onerror="this.src='/img/congregacao/default.jpg'">
            </div>
            <div class="congregation-info">
                <h3 class="text-xl font-bold mb-3 text-gray-800">${congregation.nome}</h3>
                <div class="flex items-center mb-2">
                    <i class="fas fa-map-marker-alt text-[#C2994D] mr-2"></i>
                    <span class="text-gray-600">${congregation.localizacao}</span>
                </div>
                <div class="flex items-center mb-4">
                    <i class="fas fa-user-tie text-[#C2994D] mr-2"></i>
                    <span class="text-gray-600">${congregation.pastor}</span>
                </div>
                <div class="mt-auto">
                    <button data-nome="${congregation.nome}"
                        class="w-full btn-primary px-4 py-2 rounded-md font-medium">
                        <i class="fas fa-info-circle mr-2"></i>Ver detalhes
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);

        card.addEventListener('click', function (e) {
            if (!e.target.closest('button')) {
                const congregationNome = this.getAttribute('data-id');
                const congregation = allCongregacoes.find(c => c.nome === congregationNome);
                if (congregation) {
                    openCongregationModal(congregation);
                }
            }
        });

        card.querySelector('button').addEventListener('click', function () {
            const congregationNome = this.getAttribute('data-nome');
            const congregation = allCongregacoes.find(c => c.nome === congregationNome);
            if (congregation) {
                openCongregationModal(congregation);
            }
        });
    });
}

function updatePaginationControls() {
    const totalPages = Math.ceil(filteredCongregacoes.length / itemsPerPage);
    const pageNumbersContainer = document.getElementById('pageNumbers');
    pageNumbersContainer.innerHTML = '';

    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `px-4 py-2 rounded-md ${currentPage === i ? 'bg-[#A67C36]' : 'bg-[#C2994D] hover:bg-[#A67C36]'} text-white`;
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderCongregations(currentPage);
            updatePaginationControls();
        });
        pageNumbersContainer.appendChild(pageButton);
    }
}

function openCongregationModal(congregation) {
    document.getElementById('modalCongregationName').textContent = congregation.nome;
    document.getElementById('modalLocation').textContent = congregation.localizacao;
    document.getElementById('modalPastor').textContent = congregation.pastor;
    document.getElementById('modalCongregationImage').src = congregation.imagem || '/img/congregacao/default.jpg';
    document.getElementById('modalCongregationImage').alt = congregation.nome;
    document.getElementById('modalCongregationDescription').textContent = congregation.descricao;

    // Botão Como chegar (Google Maps ou link de localização)
    const directionsLink = document.getElementById('modalDirectionsLink');
    const newDirectionsLink = directionsLink.cloneNode(true);
    directionsLink.replaceWith(newDirectionsLink);
    
    newDirectionsLink.addEventListener('click', (e) => {
        e.stopPropagation();
        if (congregation.directionsUrl) {
            window.open(congregation.directionsUrl, '_blank');
        }
        hideCongregationModal();
    });

    // Botão Contato (WhatsApp)
    const contactLink = document.getElementById('modalContactLink');
    const newContactLink = contactLink.cloneNode(true);
    contactLink.replaceWith(newContactLink);
    
    newContactLink.addEventListener('click', (e) => {
        e.stopPropagation();
        if (congregation.contactUrl) {
            window.open(congregation.contactUrl, '_blank');
        }
        hideCongregationModal();
    });

    document.getElementById('congregationModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function performSearch(searchTerm) {
    filteredCongregacoes = allCongregacoes.filter(congregation => {
        return congregation.nome.toLowerCase().includes(searchTerm) ||
            congregation.localizacao.toLowerCase().includes(searchTerm) ||
            congregation.pastor.toLowerCase().includes(searchTerm);
    });

    currentPage = 1;
    renderCongregations(currentPage);
    updatePaginationControls();

    const paginationWrapper = document.querySelector('.mt-12.flex.justify-center');
    if (filteredCongregacoes.length === 0) {
        if (paginationWrapper) paginationWrapper.style.display = 'none';
    } else {
        if (paginationWrapper) paginationWrapper.style.display = 'flex';
    }
}

let searchTimeout;
function debounceSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const searchTerm = document.getElementById('searchCongregationInput').value.toLowerCase();
        if (searchTerm.length === 0) {
            filteredCongregacoes = [...allCongregacoes];
            currentPage = 1;
            renderCongregations(currentPage);
            updatePaginationControls();
            const paginationWrapper = document.querySelector('.mt-12.flex.justify-center');
            if (paginationWrapper) paginationWrapper.style.display = 'flex';
        } else {
            performSearch(searchTerm);
        }
    }, 300);
}

function hideCongregationModal() {
    document.getElementById('congregationModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function initCongregationsPage() {
    document.getElementById('prevPage').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderCongregations(currentPage);
            updatePaginationControls();
        }
    });

    document.getElementById('nextPage').addEventListener('click', () => {
        const totalPages = Math.ceil(filteredCongregacoes.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderCongregations(currentPage);
            updatePaginationControls();
        }
    });

    const searchInput = document.getElementById('searchCongregationInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounceSearch);
    }

    const searchForm = document.getElementById('searchCongregationForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const searchTerm = document.getElementById('searchCongregationInput').value.toLowerCase();
            if (searchTerm.length === 0) {
                filteredCongregacoes = [...allCongregacoes];
                currentPage = 1;
                renderCongregations(currentPage);
                updatePaginationControls();
                const paginationWrapper = document.querySelector('.mt-12.flex.justify-center');
                if (paginationWrapper) paginationWrapper.style.display = 'flex';
            } else {
                performSearch(searchTerm);
            }
        });
    }

    const closeBtn = document.getElementById('closeCongregationModal');
    if (closeBtn) closeBtn.addEventListener('click', hideCongregationModal);
    
    const modal = document.getElementById('congregationModal');
    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                hideCongregationModal();
            }
        });
    }

    loadCongregacoesFromJSON();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCongregationsPage);
} else {
    initCongregationsPage();
}