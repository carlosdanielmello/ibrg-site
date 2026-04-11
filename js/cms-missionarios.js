// CMS Missionaries - Carrega dados dos arquivos .md
async function loadCMSMissionaries() {
    try {
        // Busca a lista de arquivos na pasta content/missionarios
        const response = await fetch('/content/missionarios/');
        if (!response.ok) throw new Error('Não foi possível carregar os missionários');
        
        // Aqui precisamos de uma lista dos arquivos .md
        // Por enquanto, vamos usar um arquivo específico para teste
        const testFile = '/content/missionarios/2025-04-11-alberto-carlos.md';
        const fileResponse = await fetch(testFile);
        if (!fileResponse.ok) throw new Error('Arquivo não encontrado');
        
        const text = await fileResponse.text();
        const missionary = parseMarkdownToMissionary(text);
        
        console.log('Missionário carregado do CMS:', missionary);
        return [missionary];
        
    } catch (error) {
        console.error('Erro ao carregar missionários do CMS:', error);
        return [];
    }
}

// Função para converter o arquivo .md em objeto missionário
function parseMarkdownToFrontMatter(markdown) {
    const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
    const match = markdown.match(frontMatterRegex);
    
    if (!match) return {};
    
    const frontMatter = match[1];
    const result = {};
    
    frontMatter.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();
            // Remove aspas se houver
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            result[key] = value;
        }
    });
    
    return result;
}

function parseMarkdownToMissionary(markdown) {
    const data = parseMarkdownToFrontMatter(markdown);
    
    return {
        id: Date.now(),
        name: data.name || '',
        description: data.description || '',
        church: data.church || '',
        location: data.location || '',
        city: data.city || '',
        state: data.state || '',
        stateFlag: `/img/info/${data.state || 'AM'}.png`,
        country: data.country || '',
        countryFlag: `/img/info/${data.country === 'Brasil' ? 'BR' : 'BR'}.png`,
        base: data.base || 'Igreja Batista Regular da Graça',
        baseImg: '/img/info/logo.png',
        phone: data.phone || '',
        image: data.image || '/img/missionarios/default.png',
    };
}