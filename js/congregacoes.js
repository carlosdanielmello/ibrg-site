// Congregações page script
const congregationsData = [
    {
        id: 1,
        name: "Congregação Batista Regular da Águas Claras",
        location: "Manaus/AM",
        pastor: "Pr. Isac Santos",
        image: "/img/congregacao/c1.png",
        description: "Localizada no bairro Águas Claras, na cidade de Manaus (AM), esta congregação é parte do trabalho da Igreja Batista Regular da Graça. Sob a liderança do pastor Isac Santos. Como extensão da IBRG, ela compartilha dos mesmos princípios doutrinários e do compromisso com a Palavra de Deus.",
        directionsUrl: "https://maps.app.goo.gl/JyEXarhG3AMtJULU8",
        contactUrl: "https://wa.me/5592994589762"
    },
    {
        id: 2,
        name: "Congregação Batista Regular Antioquia",
        location: "Manaus/AM",
        pastor: "Pr. André Carneiro",
        image: "/img/congregacao/c2.png",
        description: "Situada no bairro Antioquia, em Manaus (AM), esta congregação integra a obra da Igreja Batista Regular da Graça. Está sob a liderança do pastor André Carneiro e caminha em unidade com os mesmos valores bíblicos e doutrinários da IBRG, firmada no compromisso de anunciar fielmente a Palavra de Deus.",
        directionsUrl: "https://maps.app.goo.gl/uk1RmDWLoUafcVVS6",
        contactUrl: "https://wa.me/5592994100718"
    },
    {
        id: 3,
        name: "Congregação Batista Regular de Éfeso",
        location: "Careiro Castanho Km22",
        pastor: "Pr. Willian Crispin",
        image: "/img/congregacao/c3.png",
        description: "Situada no Km 22 do Careiro Castanho (AM), a Congregação Batista Regular de Éfeso é fruto do trabalho missionário da Igreja Batista Regular da Graça. Sob a liderança do pastor Willian Crispin, essa congregação mantém firme o compromisso com a sã doutrina e com a pregação fiel da Palavra de Deus, sendo uma extensão viva da missão da IBRG na região.",
        directionsUrl: "https://wa.me/5592985405324",
        contactUrl: "https://wa.me/5592985405324"
    },
    {
        id: 4,
        name: "Congregação Batista Regular da Graça",
        location: "Rio Preto da Eva/AM",
        pastor: "Pr. Amarildo Nunes",
        image: "/img/congregacao/c4.jfif",
        description: "Localizada na cidade de Rio Preto da Eva (AM), esta congregação é parte do trabalho da Igreja Batista Regular da Graça. Sob a liderança do pastor Amarildo Nunes. Como extensão da IBRG, ela compartilha dos mesmos princípios doutrinários e do compromisso com a Palavra de Deus.",
        directionsUrl: "https://wa.me/5592999686404",
        contactUrl: "https://wa.me/5592999686404"
    },
    {
        id: 5,
        name: "Congregação Batista Regular Maranata",
        location: "Anori/AM",
        pastor: "Pr. Jânio Júnior",
        image: "/img/congregacao/c5.jpg",
        description: "Localizada na cidade de Anori (AM), a Congregação Batista Regular Maranata é fruto do esforço missionário da Igreja Batista Regular da Graça. Liderada pelo pastor Jânio Júnior, essa congregação tem se dedicado intensamente ao discipulado e à formação de líderes locais, visando o fortalecimento da igreja e a propagação do Reino de Deus na região.",
        directionsUrl: "https://wa.me/5592992851029",
        contactUrl: "https://wa.me/5592992851029"
    }
];

const itemsPerPage = 6;
let currentPage = 1;

function renderCongregations(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const congregationsToShow = congregationsData.slice(startIndex, endIndex);
    const container = document.getElementById('congregationsContainer');
    container.innerHTML = '';

    congregationsToShow.forEach(congregation => {
        const card = document.createElement('div');
        card.className = 'congregation-card bg-white cursor-pointer';
        card.setAttribute('data-id', congregation.id);
        card.innerHTML = `
            <div class="congregation-image">
                <img src="${congregation.image}" alt="${congregation.name}" class="w-full h-64 object-cover">
            </div>
            <div class="congregation-info">
                <h3 class="text-xl font-bold mb-3 text-gray-800">${congregation.name}</h3>
                <div class="flex items-center mb-2">
                    <i class="fas fa-map-marker-alt text-[#C2994D] mr-2"></i>
                    <span class="text-gray-600">${congregation.location}</span>
                </div>
                <div class="flex items-center mb-4">
                    <i class="fas fa-user-tie text-[#C2994D] mr-2"></i>
                    <span class="text-gray-600">${congregation.pastor}</span>
                </div>
                <div class="mt-auto">
                    <button data-id="${congregation.id}"
                        class="w-full btn-primary px-4 py-2 rounded-md font-medium">
                        <i class="fas fa-info-circle mr-2"></i>Ver detalhes
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);

        card.addEventListener('click', function (e) {
            if (!e.target.closest('button')) {
                const congregationId = parseInt(this.getAttribute('data-id'));
                const congregation = congregationsData.find(c => c.id === congregationId);
                if (congregation) {
                    openCongregationModal(congregation);
                }
            }
        });

        card.querySelector('button').addEventListener('click', function () {
            const congregationId = parseInt(this.getAttribute('data-id'));
            const congregation = congregationsData.find(c => c.id === congregationId);
            if (congregation) {
                openCongregationModal(congregation);
            }
        });
    });

    updatePaginationControls();
}

function updatePaginationControls() {
    const totalPages = Math.ceil(congregationsData.length / itemsPerPage);
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
        });
        pageNumbersContainer.appendChild(pageButton);
    }
}

function openCongregationModal(congregation) {
    document.getElementById('modalCongregationName').textContent = congregation.name;
    document.getElementById('modalLocation').textContent = congregation.location;
    document.getElementById('modalPastor').textContent = congregation.pastor;
    document.getElementById('modalCongregationImage').src = congregation.image;
    document.getElementById('modalCongregationImage').alt = congregation.name;
    document.getElementById('modalCongregationDescription').textContent = congregation.description;

    const directionsLink = document.getElementById('modalDirectionsLink');
    const contactLink = document.getElementById('modalContactLink');
    const newDirectionsLink = directionsLink.cloneNode(true);
    const newContactLink = contactLink.cloneNode(true);
    directionsLink.replaceWith(newDirectionsLink);
    contactLink.replaceWith(newContactLink);

    newDirectionsLink.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(congregation.directionsUrl, '_blank');
        hideCongregationModal();
    });

    newContactLink.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(congregation.contactUrl, '_blank');
        hideCongregationModal();
    });

    document.getElementById('congregationModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function performSearch(searchTerm) {
    const filteredCongregations = congregationsData.filter(congregation => {
        return congregation.name.toLowerCase().includes(searchTerm) ||
            congregation.location.toLowerCase().includes(searchTerm) ||
            congregation.pastor.toLowerCase().includes(searchTerm);
    });

    const container = document.getElementById('congregationsContainer');
    const paginationWrapper = document.querySelector('.mt-12.flex.justify-center');

    if (filteredCongregations.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-search fa-3x text-gray-400 mb-4"></i>
                <h3 class="text-xl font-semibold text-gray-700">Nenhuma congregação encontrada</h3>
                <p class="text-gray-500 mt-2">Tente usar termos diferentes ou verifique a ortografia</p>
            </div>`;
        if (paginationWrapper) {
            paginationWrapper.style.display = 'none';
        }
        return;
    }

    container.innerHTML = '';
    filteredCongregations.forEach(congregation => {
        const card = document.createElement('div');
        card.className = 'congregation-card bg-white cursor-pointer';
        card.setAttribute('data-id', congregation.id);
        card.innerHTML = `
            <div class="congregation-image">
                <img src="${congregation.image}" alt="${congregation.name}" class="w-full h-64 object-cover">
            </div>
            <div class="congregation-info">
                <h3 class="text-xl font-bold mb-3 text-gray-800">${congregation.name}</h3>
                <div class="flex items-center mb-2">
                    <i class="fas fa-map-marker-alt text-[#C2994D] mr-2"></i>
                    <span class="text-gray-600">${congregation.location}</span>
                </div>
                <div class="flex items-center mb-4">
                    <i class="fas fa-user-tie text-[#C2994D] mr-2"></i>
                    <span class="text-gray-600">${congregation.pastor}</span>
                </div>
                <div class="mt-auto">
                    <button data-id="${congregation.id}"
                        class="w-full btn-primary px-4 py-2 rounded-md font-medium">
                        <i class="fas fa-info-circle mr-2"></i>Ver detalhes
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);

        card.addEventListener('click', function (e) {
            if (!e.target.closest('button')) {
                const congregationId = parseInt(this.getAttribute('data-id'));
                const congregation = congregationsData.find(c => c.id === congregationId);
                if (congregation) {
                    openCongregationModal(congregation);
                }
            }
        });

        card.querySelector('button').addEventListener('click', function () {
            const congregationId = parseInt(this.getAttribute('data-id'));
            const congregation = congregationsData.find(c => c.id === congregationId);
            if (congregation) {
                openCongregationModal(congregation);
            }
        });
    });

    if (paginationWrapper) {
        paginationWrapper.style.display = 'none';
    }
}

let searchTimeout;
function debounceSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const searchTerm = document.getElementById('searchCongregationInput').value.toLowerCase();
        const paginationWrapper = document.querySelector('.mt-12.flex.justify-center');
        if (searchTerm.length === 0) {
            currentPage = 1;
            renderCongregations(currentPage);
            if (paginationWrapper) {
                paginationWrapper.style.display = 'flex';
            }
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
        }
    });

    document.getElementById('nextPage').addEventListener('click', () => {
        const totalPages = Math.ceil(congregationsData.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderCongregations(currentPage);
        }
    });

    document.getElementById('searchCongregationInput').addEventListener('input', debounceSearch);

    document.getElementById('searchCongregationForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const searchTerm = document.getElementById('searchCongregationInput').value.toLowerCase();
        if (searchTerm.length === 0) {
            currentPage = 1;
            renderCongregations(currentPage);
            const paginationWrapper = document.querySelector('.mt-12.flex.justify-center');
            if (paginationWrapper) {
                paginationWrapper.style.display = 'flex';
            }
        } else {
            performSearch(searchTerm);
        }
    });

    document.getElementById('closeCongregationModal').addEventListener('click', hideCongregationModal);
    document.getElementById('congregationModal').addEventListener('click', (event) => {
        if (event.target === document.getElementById('congregationModal')) {
            hideCongregationModal();
        }
    });

    renderCongregations(currentPage);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCongregationsPage);
} else {
    initCongregationsPage();
}
