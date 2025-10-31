'use client';

import Image from 'next/image';
import Carousel from './components/Carousel';
import ZoomableImage from './components/ZoomableImage';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  const phoneNumber = '5543933672587'; // +55 43 93367-2587

  const handleContactClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre o Tamboré Londrina.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  // Array com as imagens do carousel
  const carouselImages = [
    '/carousel/slide1.jpg',
    '/carousel/slide2.jpg',
    '/carousel/slide3.jpg',
    '/carousel/slide4.jpg',
    '/carousel/slide5.jpg',
  ];

  return (
    <main className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Página 1 do PDF */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center z-50">
        {/* Imagem de fundo - Mobile */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage: 'url(/banner_hero_mobile.jpg)',
            backgroundColor: '#4a7c59' // Fallback color
          }}
        />

        {/* Imagem de fundo - Desktop */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{
            backgroundImage: 'url(/banner_hero_desktop.jpg)',
            backgroundColor: '#4a7c59' // Fallback color
          }}
        />

        {/* Overlay escuro sutil */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Content centralizado */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 max-w-5xl mx-auto">
          {/* Logo TAMBORÉ LONDRINA */}
          <div className="mb-16">
            <h1 className="text-[90px] md:text-[110px] font-bold tracking-[0.15em] leading-none mb-1 drop-shadow-2xl" style={{ fontFamily: 'Arial, sans-serif' }}>
              TAMBORÉ
            </h1>
            <h2 className="text-[70px] md:text-[85px] font-light tracking-[0.25em] leading-none drop-shadow-2xl" style={{ fontFamily: 'Arial, sans-serif' }}>
              LONDRINA
            </h2>
          </div>

          {/* Informações dos lotes */}
          <div className="mb-12 space-y-1">
            <p className="text-[26px] font-normal drop-shadow-lg" style={{ fontFamily: 'Arial, sans-serif' }}>
              Lotes de <span className="font-bold">411 a 1.167 m²</span>
            </p>
            <p className="text-[26px] font-normal drop-shadow-lg" style={{ fontFamily: 'Arial, sans-serif' }}>
              Exclusivo <span className="font-bold">clube com lagos</span>
            </p>
          </div>

          {/* Botão Entrar em contato */}
          <button
            onClick={handleContactClick}
            className="px-12 py-4 rounded-full text-[18px] font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              color: '#4A4A4A',
              fontFamily: 'Arial, sans-serif'
            }}
          >
            Entrar em contato
          </button>
        </div>

        {/* Wave decoration - Sobrepõe na divisão das seções */}
        <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none" style={{ zIndex: 20, transform: 'translateY(50%)' }}>
          <Image
            src="/asset.png"
            width={1920}
            height={120}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Video Section - Cor bege do PDF: #EEEBE7 */}
      <section className="w-full py-24 px-4 relative" style={{ backgroundColor: '#EEEBE7', zIndex: 1 }}>
        <div className="max-w-[1100px] mx-auto">
          <h3 className="text-[38px] text-center mb-14 font-light" style={{ color: '#5C5C5C', fontFamily: 'Arial, sans-serif' }}>
            Autêntico como a sua natureza
          </h3>

          {/* Video Player - YouTube Embed */}
          <div className="relative w-full aspect-video rounded-[6px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zWwHUQscGnk?si=tSd923S5Fsdd1XQi"
              title="Tamboré Londrina - Autêntico como a sua natureza"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Carousel Section - Cinza do PDF: #616A6F */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: '#616A6F' }}>
        <div className="max-w-[1200px] mx-auto">
          {/* Navigation Info - 4 colunas com divisórias */}
          <div className="flex items-stretch text-white mb-12 h-[70px]">
            <div className="flex-1 flex flex-col items-center justify-center text-center border-r border-white/25 px-4">
              <div className="text-[15px] font-light leading-tight">Bairro planejado</div>
              <div className="text-[15px] font-light leading-tight">com monitoramento</div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center border-r border-white/25 px-4">
              <div className="text-[15px] font-light leading-tight">Lotes</div>
              <div className="text-[18px] font-semibold leading-tight">de 411 a 1.167 m²</div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center border-r border-white/25 px-4">
              <div className="text-[15px] font-light leading-tight">Clube com mais de</div>
              <div className="text-[18px] font-semibold leading-tight">45 mil m²</div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
              <div className="text-[15px] font-light leading-tight">Fração</div>
              <div className="text-[15px] font-light leading-tight">subterrânea</div>
            </div>
          </div>

          {/* Carousel com Swiper */}
          <Carousel images={carouselImages} />
        </div>
      </section>



      {/* Infrastructure Section - Página 2 do PDF */}
      <section className="w-full py-24 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          {/* Títulos centralizados */}
          <h3 className="text-[36px] text-center mb-2 font-light leading-tight" style={{ color: '#5C5C5C', fontFamily: 'Arial, sans-serif' }}>
            Infraestrutura de lazer completa que traduz a
          </h3>
          <h4 className="text-[36px] text-center mb-20 font-semibold leading-tight" style={{ color: '#3A3A3A', fontFamily: 'Arial, sans-serif' }}>
            excelência da Tamboré Urbanismo
          </h4>

          {/* 3 Colunas de amenidades */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
            {/* LOTEAMENTO */}
            <div>
              <h5 className="text-[16px] font-bold mb-5 tracking-[0.1em]" style={{ color: '#3A3A3A', fontFamily: 'Arial, sans-serif' }}>
                LOTEAMENTO
              </h5>
              <ul className="space-y-2.5 text-[15px]" style={{ color: '#6B6B6B', fontFamily: 'Arial, sans-serif' }}>
                <li>Jardim de Aromáticas</li>
                <li>Praça das Frutíferas</li>
                <li>Pet Park</li>
                <li>Playground Kids</li>
                <li>Pista de Skate</li>
                <li>Academia ao Ar Livre</li>
                <li>Bosque das Nativas</li>
                <li>Praça de Convivência</li>
                <li>Quadra Poliesportiva</li>
                <li>Espaço Food Truck</li>
              </ul>
            </div>

            {/* CLUBE TAMBORÉ */}
            <div>
              <h5 className="text-[16px] font-bold mb-5 tracking-[0.1em]" style={{ color: '#3A3A3A', fontFamily: 'Arial, sans-serif' }}>
                CLUBE TAMBORÉ
              </h5>
              <ul className="space-y-2.5 text-[15px]" style={{ color: '#6B6B6B', fontFamily: 'Arial, sans-serif' }}>
                <li>Portaria</li>
                <li>Estacionamento</li>
                <li>Playground Kids</li>
                <li>Salão de Festas</li>
                <li>Lounge Bar</li>
                <li>Gourmet</li>
                <li>Cinema ao Ar Livre</li>
                <li>Academia</li>
                <li>Piscina</li>
                <li>Quadra de Tênis</li>
              </ul>
              <ul className="space-y-2.5 text-[15px] mt-2.5" style={{ color: '#6B6B6B', fontFamily: 'Arial, sans-serif' }}>
                <li>Quadra Poliesportiva</li>
                <li>Quadras de Beach Tênis</li>
                <li>Fogo de Chão</li>
                <li>Pista de Caminhada</li>
                <li>Deck Lago</li>
              </ul>
            </div>

            {/* CONDOMÍNIOS */}
            <div>
              <h5 className="text-[16px] font-bold mb-5 tracking-[0.1em]" style={{ color: '#3A3A3A', fontFamily: 'Arial, sans-serif' }}>
                CONDOMÍNIOS
              </h5>
              <ul className="space-y-2.5 text-[15px]" style={{ color: '#6B6B6B', fontFamily: 'Arial, sans-serif' }}>
                <li>Portaria</li>
                <li>Apoio</li>
                <li>Playground Baby</li>
                <li>Estar</li>
              </ul>
            </div>
          </div>

          <ZoomableImage
            src="/map.jpg"
            alt="Master Plan - Tamboré Londrina"
          />

        </div>
      </section>

      {/* Wave Transition */}
      <div className="relative w-full">
        <img
          src="/asset.png"
          alt=""
          className="w-full h-auto transform rotate-180"
          style={{ display: 'block', maxHeight: '80px', objectFit: 'cover' }}
        />
      </div>

      {/* CTA Section */}
      <section className="w-full py-20 px-4" style={{ backgroundColor: '#EEEBE7' }}>
        <div className="max-w-[900px] mx-auto text-center">
          <h3 className="text-[36px] font-light leading-relaxed mb-8" style={{ color: '#5C5C5C', fontFamily: 'Arial, sans-serif' }}>
            Entre em contato e receba um atendimento exclusivo do nosso time
          </h3>
          <button
            onClick={handleContactClick}
            className="px-12 py-4 rounded-full text-[18px] font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            style={{
              backgroundColor: '#616A6F',
              color: '#FFFFFF',
              fontFamily: 'Arial, sans-serif'
            }}
          >
            Entrar em contato
          </button>
        </div>
      </section>

      {/* About Section - 45 anos */}
      <section className="w-full py-24 px-4" style={{ backgroundColor: '#616A6F' }}>
        <div className="max-w-[1200px] mx-auto">
          {/* Primeira linha: Texto + 2 imagens grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Texto */}
            <div className="text-white">
              <h3 className="text-[42px] font-light mb-10 leading-[1.3]" style={{ fontFamily: 'Arial, sans-serif' }}>
                45 anos de excelência<br />construtiva
              </h3>

              <p className="text-[16px] leading-[1.7] mb-7" style={{ fontFamily: 'Arial, sans-serif' }}>
                A Tamboré Urbanismo transforma regiões e a forma de viver,
                com empreendimentos de alta qualidade em mais de 15
                cidades pelo Brasil.
              </p>

              <p className="text-[16px] leading-[1.7] mb-7" style={{ fontFamily: 'Arial, sans-serif' }}>
                Há 45 anos presente no mercado com projetos urbanísticos
                inovadores, mais de 1.700 lotes entregues, sem falar no
                cuidado em cada detalhe da construção, reforçando a grande
                diferença entre viver e viver bem.
              </p>

              <p className="text-[16px] leading-[1.7]" style={{ fontFamily: 'Arial, sans-serif' }}>
                Segurança, conforto, lazer, conveniência e qualidade de vida
                permeiam todo e qualquer projeto desenvolvido.
              </p>
            </div>

            {/* 2 imagens grandes empilhadas */}
            <div className="space-y-4">
              <div className="rounded-[6px] overflow-hidden shadow-lg">
                <Image
                  src="/tambore-barueri-1.jpg"
                  alt="Tamboré 1 Barueri - SP"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-[6px] overflow-hidden shadow-lg">
                <Image
                  src="/tambore-barueri-10.jpg"
                  alt="Tamboré 10 Barueri - SP"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Segunda linha: Grid 2x2 com 4 imagens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-[6px] overflow-hidden shadow-lg">
              <Image
                src="/tambore-miranda.jpg"
                alt="Tamboré Miranda - MG"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-[6px] overflow-hidden shadow-lg">
              <Image
                src="/tambore-uberlandia.jpg"
                alt="Tamboré Uberlândia - MG"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-[6px] overflow-hidden shadow-lg">
              <Image
                src="/tambore-prudente.jpg"
                alt="Tamboré Prudente - SP"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-[6px] overflow-hidden shadow-lg">
              <Image
                src="/tambore-barueri-1.jpg"
                alt="Tamboré Jundiaí - SP"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brookfield Section */}
      <section className="w-full py-24 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* Logo Brookfield */}
            <div className="flex items-center justify-center md:justify-start">
              <h2 className="text-[72px] font-bold tracking-tight" style={{ color: '#003D5B', fontFamily: 'Arial, sans-serif' }}>
                Brookfield
              </h2>
            </div>

            {/* Texto descritivo */}
            <div>
              <p className="text-[15px] leading-[1.8]" style={{ color: '#5C5C5C', fontFamily: 'Arial, sans-serif' }}>
                A Tamboré Urbanismo faz parte do grupo canadense Brookfield Asset
                Management. Uma empresa líder global nos setores properties de infraestrutura,
                energia renovável e private equity. São mais de US$ 1 trilhão de ativos sob gestão
                e presente em mais de 30 países. Atualmente, suas operações abrangem 20
                estados brasileiros e a empresa detém mais de R$192 bilhões em ativos sob
                gestão, o que a coloca como uma das maiores plataformas de investimento do
                país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4" style={{ backgroundColor: '#EEEBE7' }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] text-center leading-[1.6] mb-5" style={{ color: '#6B6B6B', fontFamily: 'Arial, sans-serif' }}>
            LANÇAMENTO: CONDOMÍNIOS DE LOTES &quot;RESIDENCIAL CEREJEIRA&quot;, &quot;RESIDENCIAL CEDRO&quot; E &quot;RESIDENCIAL PAINEIRA&quot;. INCORPORADORA RESPONSÁVEL: RCL MARIANITA TUR-
            13 DESENVOLVIMENTO URBANO LTDA. INSCRITOS NO CNPJ/ME SOB O Nº 44.067.190.0001-80. A COMERCIALIZAÇÃO SERÁ REALIZADA SOMENTE APÓS O REGISTRO DOS
            MEMORIAIS DE INCORPORAÇÃO NO 1º SERVIÇO DE REGISTRO DE IMÓVEIS DE LONDRINA/PR. AS INFORMAÇÕES CONSTANTES NOS MEMORIAIS DE INCORPORAÇÃO,
            MEMORIAL DESCRITIVO E NOS FUTUROS INSTRUMENTOS DE COMPRA E VENDA PREVALECERÃO SOBRE AS DIVULGADAS NESTE MATERIAL. TODAS AS IMAGENS E PERSPECTIVAS
            AQUI CONTIDAS SÃO MERAMENTE ILUSTRATIVAS. DEMAIS INFORMAÇÕES ESTARÃO À DISPOSIÇÃO NO FUTURO PLANTÃO DE VENDAS.
          </p>
          <p className="text-[11px] text-center font-medium" style={{ color: '#5C5C5C', fontFamily: 'Arial, sans-serif' }}>
            TAMBORÉ LONDRINA ® COPYRIGHT 2025
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}
