# Estrutura do Projeto IBR Graça

## 📁 Organização de Pastas

```
IBR Graça/
├── index.html                 (Página inicial - Início)
├── pages/                     (Subpáginas internas)
│   ├── missionarios.html     (Nossos Missionários)
│   ├── congregacoes.html     (Nossas Congregações)
│   ├── contato.html          (Contato)
│   ├── nossa-fe.html         (Nossa Fé)
│   ├── historia.html         (Nossa História)
│   └── programacoes.html     (Programações)
├── css/                       (Estilos CSS)
│   ├── styles.css            (Estilos principais)
│   ├── missionaries.css      (Estilos de missionários)
│   └── pages.css             (Estilos de páginas)
├── js/                        (Scripts JavaScript)
│   ├── script.js             (Menu, dropdowns, smooth scroll)
│   ├── missionaries.js       (Lógica de missionários)
│   └── congregacoes.js       (Lógica de congregações)
├── img/                       (Imagens)
│   ├── logo.png
│   ├── bg.jpg, bg-m.jpg      (Backgrounds)
│   ├── missionarios/         (Fotos de missionários)
│   ├── congregacao/          (Imagens de congregações)
│   ├── cultos/               (Imagens de cultos)
│   └── info/                 (Ícones informativos)
└── documentos/               (Documentação)
    └── ESTRUTURA_REORGANIZADA.md
```

## 🔗 Padrão de Links

### De `index.html` (root)
```html
<!-- Links internos para subpáginas -->
<a href="/pages/missionarios.html">
<a href="/pages/congregacoes.html">
<a href="/pages/contato.html">
<a href="/pages/nossa-fe.html">

<!-- Âncoras internas -->
<a href="#quem-somos">
<a href="#pastor">
<a href="#atividades">
```

### De `pages/*.html` (subdiretório)
```html
<!-- Links para outras páginas -->
<a href="misionarios.html">
<a href="congregacoes.html">
<a href="contato.html">
<a href="nossa-fe.html">

<!-- Links para root -->
<a href="../index.html">

<!-- Âncoras no root -->
<a href="../index.html#quem-somos">
<a href="../index.html#pastor">
<a href="../index.html#atividades">
```

## 📄 Páginas e Componentes

### ✅ Páginas Conectadas e Funcionais
- `index.html` - Página inicial com menu e showcases
- `pages/missionarios.html` - Lista de missionários com modal
- `pages/congregacoes.html` - Lista de congregações com modal (JS separado: `js/congregacoes.js`)
- `pages/contato.html` - Formulário de contato
- `pages/nossa-fe.html` - Conteúdo sobre nossa fé
- `pages/historia.html` - História da igreja

### 🔄 Scripts Organizados
- `js/script.js` - Menu mobile, dropdowns, smooth scrolling (usado em todas as páginas)
- `js/missionaries.js` - Lógica de exibição e modal de missionários (usado em `missionarios.html`)
- `js/congregacoes.js` - Lógica de exibição, busca, paginação e modal de congregações (usado em `congregacoes.html`)

### 🎨 Estilos CSS
- `css/styles.css` - Estilos principais organizados por seções:
  1. Menu Mobile
  2. Navegação
  3. Showcase (com classes específicas por página)
  4. Cards de Atividades
  5. Seção Pastor
  6. Seção Missão
  7. Botões
  8. Seções Gerais
  9. Responsivo (Mobile)

- `css/missionaries.css` - Estilos específicos de missionários e congregações
- `css/pages.css` - Estilos específicos de outras páginas

## 🎯 Showcases - Classes de Background

Cada página tem um background diferente no showcase:

```css
#showcase.showcase-home           → /img/bg.jpg
#showcase.showcase-missionaries   → /img/bg-m.jpg
#showcase.showcase-congregations  → /img/congregacao/bg-c.jpg
#showcase.showcase-contact        → /img/bg.jpg
#showcase.showcase-faith          → /img/cultos/EBD.jpg
```

**Implementação em HTML:**
```html
<!-- index.html -->
<section id="showcase" class="showcase-home">

<!-- pages/misionarios.html -->
<section id="showcase" class="showcase-missionaries">

<!-- pages/congregacoes.html -->
<section id="showcase" class="showcase-congregations">

<!-- pages/contato.html -->
<section id="showcase" class="showcase-contact">
```

## 🛠️ Funcionalidades JavaScript

### Em `js/script.js`
- ✅ Menu mobile toggle
- ✅ Dropdowns mobile
- ✅ Smooth scrolling de âncoras
- ✅ Fechamento de menu ao clicar em link

### Em `js/missionaries.js`
- ✅ Renderização de cards de missionários
- ✅ Paginação
- ✅ Busca com debounce
- ✅ Modal de detalhes
- ✅ Controle de scroll (overflow: hidden quando abre modal)

### Em `js/congregacoes.js`
- ✅ Renderização de cards de congregações
- ✅ Paginação
- ✅ Busca com debounce
- ✅ Modal de detalhes
- ✅ Controle de scroll (overflow: hidden quando abre modal)
- ✅ Links de "Como chegar" e "Contato"

## 📱 Responsivo
- Desktop: Menu horizontal, dropdowns, layouts em grid
- Mobile (< 768px): Menu accordeon, layouts empilhados, backgrounds com scroll normal
- Modal: Altura máxima 90vh com scroll interno no mobile

## 🔄 Fluxo de Navegação

```
index.html
├── Menu → pages/misionarios.html
├── Menu → pages/congregacoes.html
├── Menu → pages/contato.html
├── Menu → pages/nossa-fe.html
└── Menu → pages/historia.html

pages/* 
└── Logo → ../index.html
```

## 📝 Notas Importantes

1. **Links Consistentes**: Todos os links foram padronizados
2. **CSS Organizado**: Separado por seções com comentários claros
3. **JS Modularizado**: Cada página tem seu próprio script quando necessário
4. **Mobile Fix**: Modal com scroll interno para mobile
5. **Backgrounds Únicos**: Cada showcase tem seu próprio background

## ✨ Últimas Atualizações

- ✅ CSS reorganizado e comentado
- ✅ Links padronizados em todas as páginas
- ✅ Modal de congregações com scroll mobile
- ✅ Backgrounds únicos por página
- ✅ JS de congregações separado
