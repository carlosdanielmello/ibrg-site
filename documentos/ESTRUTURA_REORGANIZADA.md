# 📁 Estrutura Reorganizada - IBR Graça

## Nova Organização de Arquivos

Seus arquivos foram reorganizados para melhor manutenção e facilitar futuras atualizações:

### 📂 Estrutura Atual

```
IBR Graça/
│
├── index.html                    # Página inicial
│
├── css/                          # ✨ NOVO: Pasta centralizada de estilos
│   ├── styles.css              # Estilos principais (menu, showcase, botões, etc.)
│   ├── missionaries.css        # Estilos dos cards de missionários
│   └── pages.css               # Estilos das páginas específicas
│
├── js/                           # ✨ NOVO: Pasta centralizada de scripts
│   ├── script.js               # Script principal (menu mobile, navegação)
│   └── missionaries.js         # Script dos missionários (pagination, modal)
│
├── pages/
│   ├── missionarios.html
│   ├── congregacoes.html
│   ├── contato.html
│   └── nossa-fe.pdf
│
├── estilos/                      # ⚠️ Agora vazio (estilos movidos para /css/)
├── script/                       # ⚠️ Agora vazio (scripts movidos para /js/)
│
├── img/
│   ├── congregacao/
│   ├── cultos/
│   ├── info/
│   └── missionarios/
│
└── esboço/                       # Pasta vazia
```

## ✅ O Que Foi Feito

### 1. **Criada Pasta `/css/`**
   - `styles.css` - Todos os estilos principais consolidados
   - `missionaries.css` - Estilos específicos dos missionários
   - `pages.css` - Estilos das páginas (contato, congregações, modais)

### 2. **Criada Pasta `/js/`**
   - `script.js` - Script principal (comportamento do menu, navegação suave)
   - `missionaries.js` - Script dos missionários (paginação, modais, busca)

### 3. **Atualização de Todos os HTML**
   - ✅ `index.html` - Estilos inline removidos, CSS externo adicionado
   - ✅ `pages/missionarios.html` - Estilos inline removidos
   - ✅ `pages/congregacoes.html` - Estilos inline removidos
   - ✅ `pages/contato.html` - Estilos inline removidos

### 4. **Separação de Responsabilidades**
   - CSS organizado por funcionalidade
   - JavaScript em arquivos dedicados
   - Melhor manutenção futura

## 🎯 Benefícios

- ✅ **Cache do navegador** - Arquivos CSS/JS são cacheados (carregamento mais rápido)
- ✅ **Manutenção facilitada** - Encontrar e editar estilos é mais fácil
- ✅ **Sem perda de funcionalidade** - Tudo continua funcionando igual
- ✅ **Código mais limpo** - HTMLs menores e sem estilos inline
- ✅ **Reutilização** - CSS/JS podem ser compartilhados entre páginas
- ✅ **SEO melhorado** - Código mais semantic sem estilos nos HTMLs

## 📋 Referência de Links nos HTML

Todos os arquivos HTML agora usam:

```html
<!-- CSS -->
<link rel="stylesheet" href="/css/styles.css">        <!-- Menu, showcase, botões -->
<link rel="stylesheet" href="/css/missionaries.css">  <!-- Cards de missionários -->
<link rel="stylesheet" href="/css/pages.css">         <!-- Contato, congregações, modais -->

<!-- JavaScript -->
<script src="/js/script.js"></script>                 <!-- Menu mobile, scroll suave -->
<script src="/js/missionaries.js"></script>           <!-- Paginação, busca (se necessário) -->
```

## 🔧 Como Manter no Futuro

**Para adicionar novo CSS:**
1. Crie um novo arquivo em `/css/novo-arquivo.css`
2. Importe-o nos HTMLs que precisarem

**Para adicionar novo JS:**
1. Crie um novo arquivo em `/js/novo-arquivo.js`
2. Importe-o nos HTMLs que precisarem

**Editar estilos:**
- Busque em `/css/` pelos arquivos relevantes
- Tudo está bem organizado e comentado

## ✨ Folders Vazias (Antigas)

As pastas `/estilos/` e `/script/` estão vazias agora (estilos/scripts foram consolidados em `/css/` e `/js/`). Você pode deletá-las se preferir ou mantê-las para referência.

---

**Nenhum conteúdo foi alterado - apenas reorganizado para melhor estrutura!** ✨
