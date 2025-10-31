# Configuração do Carousel - Tamboré Londrina

## 📸 Estrutura de Pastas

Crie a pasta `/public/carousel` e coloque as imagens dentro:

```
/public
  └── /carousel
      ├── slide1.jpg
      ├── slide2.jpg
      ├── slide3.jpg
      ├── slide4.jpg
      └── slide5.jpg
```

## 🎯 Imagens Necessárias

Extraia do PDF `print-coller.png` as seguintes imagens do carousel:

1. **slide1.jpg** - Salão de festas com janelas grandes
2. **slide2.jpg** - Segunda imagem do carousel
3. **slide3.jpg** - Terceira imagem do carousel
4. **slide4.jpg** - Quarta imagem do carousel
5. **slide5.jpg** - Quinta imagem do carousel

## ⚙️ Biblioteca Instalada

✅ **Swiper** v12.0.3 - A melhor biblioteca de carousel para React

### Recursos Implementados:

- ✅ **Autoplay**: Troca automática a cada 5 segundos
- ✅ **Loop infinito**: Volta para o início ao chegar no final
- ✅ **Navegação**: Setas esquerda/direita
- ✅ **Paginação**: Bolinhas indicadoras na parte inferior
- ✅ **Responsivo**: Funciona perfeitamente em mobile e desktop
- ✅ **Acessibilidade**: Labels ARIA para navegação

## 🎨 Estilo Personalizado

O carousel está estilizado para combinar com o design do PDF:

- **Botões de navegação**: Brancos semi-transparentes (85%)
- **Setas**: Cinza escuro (#4A4A4A) com tamanho 36px
- **Paginação**: Bolinhas brancas, ativa fica alongada
- **Bordas**: Arredondadas em 8px
- **Sombra**: Igual ao PDF (shadow-xl)
- **Proporção**: 16:9 (aspect-ratio)

## 🔧 Como Adicionar/Remover Imagens

Edite o array `carouselImages` em `/app/page.tsx`:

```typescript
const carouselImages = [
  '/carousel/slide1.jpg',
  '/carousel/slide2.jpg',
  '/carousel/slide3.jpg',
  '/carousel/slide4.jpg',
  '/carousel/slide5.jpg',
  // Adicione mais imagens aqui se necessário
];
```

## 📐 Dimensões Recomendadas

- **Largura**: 1920px
- **Altura**: 1080px
- **Proporção**: 16:9
- **Formato**: JPG ou WebP (para melhor performance)
- **Qualidade**: 85% de compressão

## ⚡ Performance

O componente usa:
- `priority={index === 0}` - Primeira imagem carrega com prioridade
- Next.js Image - Otimização automática de imagens
- Lazy loading - Imagens carregam conforme necessário

## 🎬 Configurações de Autoplay

Para alterar o tempo de autoplay, edite em `/app/components/Carousel.tsx`:

```typescript
autoplay={{
  delay: 5000, // 5 segundos (5000ms)
  disableOnInteraction: false, // Continua após interação
}}
```

## 🎯 Exemplo de Uso

O carousel está sendo usado na seção cinza (#616A6F) logo abaixo das 4 informações destacadas:
- Bairro planejado com monitoramento
- Lotes de 411 a 1.167 m²
- Clube com mais de 45 mil m²
- Fração subterrânea

## ✅ Checklist

- [ ] Criar pasta `/public/carousel`
- [ ] Adicionar `slide1.jpg`
- [ ] Adicionar `slide2.jpg`
- [ ] Adicionar `slide3.jpg`
- [ ] Adicionar `slide4.jpg`
- [ ] Adicionar `slide5.jpg`
- [ ] Testar navegação com setas
- [ ] Testar autoplay
- [ ] Verificar responsividade em mobile
