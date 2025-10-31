'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="carousel-container w-full">
      {/* Main Swiper */}
      <Swiper
        modules={[Navigation, Thumbs, Autoplay]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full aspect-video rounded-[8px] overflow-hidden shadow-xl mb-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button
          className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110 z-10"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
          aria-label="Anterior"
        >
          <span className="text-[36px] font-light" style={{ color: '#4A4A4A' }}>‹</span>
        </button>
        <button
          className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110 z-10"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
          aria-label="Próximo"
        >
          <span className="text-[36px] font-light" style={{ color: '#4A4A4A' }}>›</span>
        </button>
      </Swiper>

      {/* Thumbs Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Thumbs]}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumbs-swiper"
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 16,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-video rounded-[4px] overflow-hidden cursor-pointer transition-all hover:opacity-80">
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
          background-color: rgba(255, 255, 255, 0.95) !important;
        }

        .thumbs-swiper .swiper-slide {
          opacity: 0.4;
          transition: opacity 0.3s;
        }

        .thumbs-swiper .swiper-slide-thumb-active {
          opacity: 1;
          border: 2px solid #fff;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
