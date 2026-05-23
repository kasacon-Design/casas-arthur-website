# CASAS ARTHUR® NeuroDesign — Website

Site completo de designer de interiores de alto padrão com método científico.

## Stack

- HTML5 semântico
- CSS3 puro (sem preprocessadores)
- JavaScript vanilla
- GSAP + ScrollTrigger para animações
- Google Fonts (Cormorant Garamond + Lato)
- Formspree para formulário de contato

## Estrutura

```
.
├── index.html          # HTML principal com todas as seções
├── styles.css          # Stylesheet completo
├── script.js           # JavaScript para interações
├── vercel.json         # Config de deploy no Vercel
└── images/             # Pasta para imagens (crie manualmente)
    ├── founder.jpg     # Foto do fundador
    └── logo.svg        # Logo (opcional - já incluso como SVG)
```

## Deploy no Vercel

### Opção 1: Via Git
1. Crie um repositório GitHub
2. Push dos arquivos para `main` branch
3. Conecte no Vercel (https://vercel.com)
4. Selecione o repositório
5. Deploy automático

### Opção 2: CLI Vercel
```bash
npm install -g vercel
vercel
```

## Configuração

### Formspree
1. Acesse https://formspree.io
2. Crie uma conta
3. Copie o ID do formulário
4. Substitua `YOUR_FORMSPREE_ID` em `index.html` (linha ~200)

### Domínio customizado
No Vercel dashboard:
1. Vá para Settings > Domains
2. Adicione `casasarthur.com.br`
3. Configure DNS conforme instruções

## Imagens

Crie uma pasta `/images` e adicione:
- `founder.jpg` (1080x1350px recomendado)

Os placeholders de imagem mostram `[ Substituir por: ... ]` para facilitar identificação.

## SEO

Todos os meta tags estão configurados:
- Open Graph
- Twitter Card
- Canonical URLs
- Keywords e descrições

## Cores Obrigatórias

- Fundo principal: `#1C1C1B`
- Cards: `#232321`
- Texto primário: `#E8E0D5`
- Texto secundário: `#A09890`
- Accent (Terracota): `#C24619`
- Hover: `#8F3412`

## Tipografia

- **Títulos**: Cormorant Garamond
- **Corpo**: Lato
- **Labels**: Lato 700, uppercase, 0.20em letter-spacing

## Desenvolvimento Local

Abra `index.html` no navegador ou use:

```bash
python3 -m http.server 8000
# ou
npx serve
```

## Customização

Todos os valores de cor, espaçamento e tipografia estão em `:root` em `styles.css` para fácil ajuste.

---

**Versão**: 2.0 | **Maio 2026**
**CASAS ARTHUR® NeuroDesign**