# Cores Exatas do PDF - Tamboré Londrina

## 🎨 Paleta de Cores Oficial

### Cores Principais

```css
/* Bege claro (seções alternadas) */
--cor-bege: #EEEBE7

/* Cinza escuro (seções alternadas) */
--cor-cinza: #616A6F

/* Azul Brookfield */
--cor-azul-brookfield: #003D5B

/* Vermelho YouTube (botão play) */
--cor-vermelho: #FF0000
```

### Cores de Texto

```css
/* Texto cinza escuro (títulos) */
--texto-escuro: #3A3A3A

/* Texto cinza médio (títulos secundários) */
--texto-medio: #5C5C5C

/* Texto cinza claro (parágrafos) */
--texto-claro: #6B6B6B

/* Texto preto botões */
--texto-botao: #4A4A4A

/* Texto branco */
--texto-branco: #FFFFFF
```

### Cores de Overlay e Sombras

```css
/* Overlay escuro no hero */
--overlay-hero: rgba(0, 0, 0, 0.25)

/* Fundo botão branco */
--botao-branco: rgba(255, 255, 255, 0.92)

/* Fundo botão navegação */
--botao-nav: rgba(255, 255, 255, 0.85)

/* Fundo labels */
--label-branco: rgba(255, 255, 255, 0.95)

/* Divisória branca */
--divisoria: rgba(255, 255, 255, 0.25)
```

## 📐 Medidas Exatas

### Tipografia

```css
/* Hero Section */
--hero-h1: 110px (TAMBORÉ)
--hero-h2: 85px (LONDRINA)
--hero-info: 26px
--hero-button: 18px

/* Video Section */
--video-title: 38px

/* Carousel Section */
--carousel-info: 15px
--carousel-destaque: 18px

/* Infrastructure Section */
--infra-title1: 36px
--infra-title2: 36px
--infra-subtitle: 16px
--infra-list: 15px

/* About Section */
--about-title: 42px
--about-text: 16px

/* Brookfield Section */
--brookfield-logo: 72px
--brookfield-text: 15px

/* Footer */
--footer-text: 10px
--footer-copyright: 11px
```

### Espaçamentos

```css
/* Hero Section */
--hero-padding: 0 (full screen)
--hero-min-height: 700px

/* Sections */
--section-padding-y: 24px (py-24 = 6rem)
--section-padding-x: 16px (px-4 = 1rem)

/* Container */
--container-max-width: 1200px

/* Gaps */
--gap-thumbnails: 16px (gap-4)
--gap-columns: 64px (gap-16)
```

### Bordas e Raios

```css
/* Botões */
--button-radius: 9999px (rounded-full)

/* Imagens */
--image-radius: 6px (rounded-[6px])
--carousel-radius: 8px (rounded-[8px])

/* Labels */
--label-radius: 3px (rounded-[3px])
--label-big-radius: 4px (rounded-[4px])
```

### Sombras

```css
/* Hero button */
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

/* Video player */
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3)

/* Carousel */
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1)

/* Navigation buttons */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1)

/* Labels */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
```

## 🔤 Fontes

```css
font-family: 'Arial', sans-serif;
```

### Pesos de Fonte

```css
--font-light: 300
--font-normal: 400
--font-semibold: 600
--font-bold: 700
```

### Letter Spacing

```css
/* Hero TAMBORÉ */
letter-spacing: 0.15em

/* Hero LONDRINA */
letter-spacing: 0.25em

/* Títulos seções */
letter-spacing: 0.1em
```

## 📏 Layout Grid

### Breakpoints

```css
/* Mobile */
< 768px

/* Tablet */
768px - 1024px

/* Desktop */
> 1024px
```

### Grid Configurations

```css
/* Infrastructure (3 colunas) */
grid-template-columns: repeat(3, 1fr)
gap: 64px

/* Thumbnails (4 colunas) */
grid-template-columns: repeat(4, 1fr)
gap: 16px

/* Projects (2 colunas) */
grid-template-columns: repeat(2, 1fr)
gap: 32px

/* About (2 colunas) */
grid-template-columns: repeat(2, 1fr)
gap: 80px
```

## 🌊 SVG Waves

### Wave 1 (Hero → Video)
```svg
<path d="M0,0 L0,100 Q360,80 720,80 Q1080,80 1440,100 L1440,0 Z" fill="#EEEBE7" />
```

### Wave 2 (Infrastructure → CTA)
```svg
<path d="M0,40 Q360,20 720,20 Q1080,20 1440,40 L1440,80 L0,80 Z" fill="#EEEBE7" />
```

## 🎯 Aspect Ratios

```css
/* Video player */
aspect-ratio: 16 / 9

/* Carousel */
aspect-ratio: 16 / 9

/* Thumbnails */
aspect-ratio: 16 / 9

/* Project images */
aspect-ratio: 16 / 9

/* Master plan */
height: 400px
```

## ✅ Checklist de Precisão

- [x] Cores extraídas com precisão hexadecimal
- [x] Tamanhos de fonte em pixels exatos
- [x] Espaçamentos fiéis ao PDF
- [x] Raios de borda corretos
- [x] Sombras replicadas
- [x] Layout grid configurado
- [x] Waves SVG exatas
- [x] Aspect ratios corretos
- [x] Opacidades precisas
- [x] Letter spacing fiel

## 📝 Notas de Implementação

1. **Fonte Arial**: Use a fonte padrão do sistema Arial para máxima fidelidade
2. **Imagens**: Todas as imagens devem ser extraídas do PDF original
3. **Responsividade**: Manter proporções em mobile/tablet/desktop
4. **Performance**: Otimizar imagens para Web (WebP recomendado)
5. **Acessibilidade**: Manter contraste adequado (WCAG AA+)
