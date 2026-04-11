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

// ============================================
// MISSIONÁRIOS - LENDO DO JSON (EDITÁVEL PELO CMS)
// ============================================

let allMissionaries = [];
let currentPage = 1;
const missionariesPerPage = 6;
let filteredMissionaries = [];

// Mapeamento de logos por agência (automático)
const baseImages = {
    "Igreja Batista Regular da Graça": "/img/info/logo.png",
    "Paulo de Tarso": "/img/MBRPT.png",
    "MAB": "/img/info/MAB.png",
    "MBBF": "/img/info/MBBF.png",
    "Maranata": "/img/info/maranata.png",
    "Novas Tribos": "/img/info/NT.png",
    "Independente": "/img/info/indi.png"
};

// Mapeamento de bandeiras por país (automático)
const countryFlags = {
    "Brasil": "/img/info/BR.png",
    "Venezuela": "/img/info/VEN.png",
    "Bolívia": "/img/info/BOL.png",
    "Portugal": "/img/info/PT.png",
    "EUA": "/img/info/EUA.png",
    "Outro": "/img/info/BR.png"
};

// Bandeiras de estado removidas - apenas texto
const stateFlags = {};

// Função para carregar missionários do arquivo JSON
async function loadMissionariesFromJSON() {
    try {
        const response = await fetch('/data/missionarios.json');
        if (!response.ok) throw new Error('Erro ao carregar missionários');
        
        const data = await response.json();
        let missionaries = data.missionarios || [];
        
        // Ordena por nome (ordem alfabética)
        missionaries.sort((a, b) => {
            const nomeA = a.name || '';
            const nomeB = b.name || '';
            return nomeA.localeCompare(nomeB);
        });
        
        // Adiciona IDs e flags (automático)
        return missionaries.map((m, index) => ({
            id: index + 1,
            name: m.name || '',
            description: m.description || '',
            church: m.church || '',
            location: m.location || '',
            city: m.city || '',
            state: m.state || '',
            stateFlag: '',  // SEM BANDEIRA, SÓ TEXTO
            country: m.country || 'Brasil',
            countryFlag: countryFlags[m.country] || '/img/info/BR.png',
            base: m.base || 'Igreja Batista Regular da Graça',
            baseImg: m.baseImg || baseImages[m.base] || '/img/info/logo.png',
            phone: m.phone || '',
            image: m.image || '/img/missionarios/default.png',
            video: m.video || '',
            report: m.report || ''
        }));
    } catch (error) {
        console.error('Erro ao carregar missionários:', error);
        return [];
    }
}

// Display missionaries
function displayMissionaries(missionariesToDisplay, page) {
    const container = document.getElementById('missionariesContainer');
    if (!container) return;
    
    container.innerHTML = '';

    const startIndex = (page - 1) * missionariesPerPage;
    const endIndex = startIndex + missionariesPerPage;
    const paginatedMissionaries = missionariesToDisplay.slice(startIndex, endIndex);

    if (paginatedMissionaries.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-search fa-3x text-gray-400 mb-4"></i>
                <h3 class="text-xl font-semibold text-gray-700">Nenhum missionário encontrado</h3>
                <p class="text-gray-500 mt-2">Tente usar termos diferentes ou verifique a ortografia</p>
            </div>`;
        const paginationDiv = document.querySelector('.mt-12.flex.justify-center');
        if (paginationDiv) paginationDiv.style.display = 'none';
        return;
    } else {
        const paginationDiv = document.querySelector('.mt-12.flex.justify-center');
        if (paginationDiv) paginationDiv.style.display = 'flex';
    }

    paginatedMissionaries.forEach(missionary => {
        const card = document.createElement('div');
        card.className = 'missionary-card bg-white cursor-pointer';
        card.setAttribute('data-id', missionary.id);
        card.innerHTML = `
            <div class="flex flex-col h-full">
                <div class="missionary-image">
                    <img src="${missionary.image}" alt="${missionary.name}" class="w-full h-full object-cover" onerror="this.src='/img/missionarios/default.png'">
                </div>
                <div class="missionary-info">
                    <h3 class="text-xl font-bold mb-3 text-gray-800 cursor-pointer hover:text-[#C2994D]">${missionary.name}</h3>
                    <p class="text-gray-600 mb-4 line-clamp-4">${missionary.description}</p>
                    <div class="mb-2 space-y-1 mt-auto">
                        <div class="location-info flex items-center">
                            <img src="${missionary.baseImg}" alt="Sede de ${missionary.base}" style="height:35px; margin-right:0.8rem;" onerror="this.style.display='none'">
                            <span class="text-gray-700">${missionary.base}</span>
                        </div>
                        <div class="location-info flex items-center">
                            <img src="${missionary.countryFlag}" alt="${missionary.country}" style="height:20px; margin-right:0.8rem;" onerror="this.style.display='none'">
                            <span class="text-gray-700">${missionary.city}, ${missionary.state}</span>
                        </div>
                    </div>
                    <div class="mt-auto">
                        <button onclick="openMissionaryDetails(${missionary.id})" 
                            class="w-full btn-primary px-4 py-2 rounded-md font-medium flex items-center justify-center">
                            <i class="fas fa-info-circle mr-2"></i> Ver detalhes
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);

        card.addEventListener('click', function(e) {
            if (!e.target.closest('button')) {
                openMissionaryDetails(missionary.id);
            }
        });
    });
}

// Setup pagination
function setupPagination(missionariesToPaginate) {
    const pageNumbers = document.getElementById('pageNumbers');
    if (!pageNumbers) return;
    
    pageNumbers.innerHTML = '';

    const pageCount = Math.ceil(missionariesToPaginate.length / missionariesPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `px-4 py-2 rounded-md ${i === currentPage ? 'bg-[#A67C36] text-white' : 'bg-[#C2994D] hover:bg-[#A67C36]'} text-white`;
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayMissionaries(filteredMissionaries, currentPage);
            setupPagination(filteredMissionaries);
            window.scrollTo({
                top: document.getElementById('missionarios').offsetTop - 100,
                behavior: 'smooth'
            });
        });
        pageNumbers.appendChild(pageButton);
    }

    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === pageCount;
}

// Função para realizar a busca
function performSearch(searchTerm) {
    filteredMissionaries = allMissionaries.filter(missionary =>
        missionary.name.toLowerCase().includes(searchTerm) ||
        missionary.location.toLowerCase().includes(searchTerm) ||
        missionary.description.toLowerCase().includes(searchTerm) ||
        missionary.city.toLowerCase().includes(searchTerm) ||
        missionary.state.toLowerCase().includes(searchTerm) ||
        missionary.country.toLowerCase().includes(searchTerm)
    );

    currentPage = 1;
    displayMissionaries(filteredMissionaries, currentPage);
    setupPagination(filteredMissionaries);
}

// Debounce
let searchTimeout;
function debounceSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const searchTerm = document.getElementById('searchMissionaryInput')?.value.toLowerCase() || '';
        if (searchTerm.length === 0) {
            filteredMissionaries = [...allMissionaries];
            currentPage = 1;
            displayMissionaries(filteredMissionaries, currentPage);
            setupPagination(filteredMissionaries);
        } else {
            performSearch(searchTerm);
        }
    }, 300);
}

// Inicialização
async function initMissionaries() {
    allMissionaries = await loadMissionariesFromJSON();
    filteredMissionaries = [...allMissionaries];
    displayMissionaries(filteredMissionaries, currentPage);
    setupPagination(filteredMissionaries);
    
    // Event listeners
    const searchInput = document.getElementById('searchMissionaryInput');
    const searchForm = document.getElementById('searchMissionaryForm');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    
    if (searchInput) searchInput.addEventListener('input', debounceSearch);
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = document.getElementById('searchMissionaryInput')?.value.toLowerCase() || '';
            if (searchTerm.length === 0) {
                filteredMissionaries = [...allMissionaries];
                currentPage = 1;
                displayMissionaries(filteredMissionaries, currentPage);
                setupPagination(filteredMissionaries);
            } else {
                performSearch(searchTerm);
            }
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayMissionaries(filteredMissionaries, currentPage);
                setupPagination(filteredMissionaries);
                window.scrollTo({
                    top: document.getElementById('missionarios')?.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const pageCount = Math.ceil(filteredMissionaries.length / missionariesPerPage);
            if (currentPage < pageCount) {
                currentPage++;
                displayMissionaries(filteredMissionaries, currentPage);
                setupPagination(filteredMissionaries);
                window.scrollTo({
                    top: document.getElementById('missionarios')?.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Modal functions
window.openMissionaryDetails = function(missionaryId) {
    const modal = document.getElementById('missionaryDetailsModal');
    const missionary = allMissionaries.find(m => m.id == missionaryId);
    if (missionary && modal) {
        document.getElementById('missionaryDetailsName').textContent = missionary.name;
        document.getElementById('missionaryDetailsImage').src = missionary.image;
        document.getElementById('missionaryDetailsImage').alt = missionary.name;
        document.getElementById('missionaryDetailsChurch').textContent = missionary.church;
        document.getElementById('missionaryDetailsBase').textContent = missionary.base;
        document.getElementById('missionaryDetailsBaseImg').src = missionary.baseImg;
        document.getElementById('missionaryDetailsCity').textContent = missionary.city;
        document.getElementById('missionaryDetailsState').textContent = missionary.state;
        document.getElementById('missionaryDetailsStateFlag').src = missionary.stateFlag;
        document.getElementById('missionaryDetailsCountry').textContent = missionary.country;
        document.getElementById('missionaryDetailsCountryFlag').src = missionary.countryFlag;
        document.getElementById('missionaryDetailsLocation').textContent = missionary.location;
        document.getElementById('missionaryDetailsPhone').textContent = missionary.phone;
        document.getElementById('missionaryDetailsDescription').textContent = missionary.description;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

function closeMissionaryDetailsModal() {
    const modal = document.getElementById('missionaryDetailsModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

const closeBtn = document.getElementById('closeMissionaryDetailsModal');
if (closeBtn) closeBtn.addEventListener('click', closeMissionaryDetailsModal);

const modalBg = document.getElementById('missionaryDetailsModal');
if (modalBg) {
    modalBg.addEventListener('click', (e) => {
        if (e.target === modalBg) {
            closeMissionaryDetailsModal();
        }
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

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMissionaries);
} else {
    initMissionaries();
}