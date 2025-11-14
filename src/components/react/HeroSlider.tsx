import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  ctaSecondary?: string;
  ctaSecondaryLink?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920',
    title: 'Artisan Coffee',
    subtitle: 'Welcome to Coffee House',
    description: 'Experience the perfect blend of exceptional coffee and cozy atmosphere. Every cup tells a story.',
    ctaText: 'Explore Menu',
    ctaLink: '/menu',
    ctaSecondary: 'Reserve Table',
    ctaSecondaryLink: '/contact',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920',
    title: 'Cozy Atmosphere',
    subtitle: 'Your Perfect Coffee Moment',
    description: 'Relax in our warm, inviting space designed for comfort and conversation.',
    ctaText: 'View Gallery',
    ctaLink: '/gallery',
    ctaSecondary: 'Learn More',
    ctaSecondaryLink: '/about',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920',
    title: 'Fresh Pastries Daily',
    subtitle: 'Handcrafted with Love',
    description: 'Indulge in our selection of freshly baked pastries, made with the finest ingredients.',
    ctaText: 'See Menu',
    ctaLink: '/menu',
    ctaSecondary: 'Order Now',
    ctaSecondaryLink: '/contact',
  },
];

export const HeroSlider = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Cleanup Swiper before View Transitions to prevent blocking header
  useEffect(() => {
    const handleBeforeSwap = () => {
      if (swiper) {
        swiper.destroy(true, true);
        setSwiper(null);
      }
    };

    document.addEventListener('astro:before-swap', handleBeforeSwap);

    return () => {
      document.removeEventListener('astro:before-swap', handleBeforeSwap);
      if (swiper) {
        swiper.destroy(true, true);
      }
    };
  }, [swiper]);

  return (
    <section className="relative h-screen overflow-hidden w-full max-w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.hero-slider-next',
          prevEl: '.hero-slider-prev',
        }}
        pagination={{
          el: '.hero-slider-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 to-secondary-800">
                <img
                  src={slide.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                  loading={slide.id === 1 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container-custom">
                  <div className="max-w-xl sm:max-w-2xl md:max-w-3xl">
                    <span className="inline-block text-primary font-secondary font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 animate-fade-in">
                      {slide.subtitle}
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-display font-primary text-white mb-4 sm:mb-6 animate-fade-up leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-body-lg text-gray-200 mb-6 sm:mb-8 md:mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                      <a href={slide.ctaLink} className="btn-primary w-full sm:w-auto">
                        {slide.ctaText}
                      </a>
                      {slide.ctaSecondary && (
                        <a href={slide.ctaSecondaryLink} className="btn-white w-full sm:w-auto">
                          {slide.ctaSecondary}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="hidden sm:block absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="absolute inset-y-0 left-0 right-0 z-20 pointer-events-none">
        <div className="h-full flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 pointer-events-auto">
          <button
            className="hero-slider-prev w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0 touch-manipulation"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="hero-slider-next w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0 touch-manipulation"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom Pagination */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="hero-slider-pagination flex gap-2 sm:gap-3" />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-3 sm:top-6 sm:right-4 md:top-8 md:right-8 z-20 text-white font-secondary font-semibold">
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl">{String(activeIndex + 1).padStart(2, '0')}</span>
        <span className="text-white/50 mx-0.5 sm:mx-1 md:mx-2">/</span>
        <span className="text-white/70 text-xs sm:text-sm md:text-base lg:text-lg">{String(slides.length).padStart(2, '0')}</span>
      </div>

      <style>{`
        .hero-slider-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: white;
          opacity: 0.3;
          transition: all 0.3s;
        }

        @media (min-width: 480px) {
          .hero-slider-pagination .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
        }

        @media (min-width: 768px) {
          .hero-slider-pagination .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
          }
        }

        .hero-slider-pagination .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 6px;
          opacity: 1;
          background: #DD5903;
        }

        @media (min-width: 480px) {
          .hero-slider-pagination .swiper-pagination-bullet-active {
            width: 28px;
          }
        }

        @media (min-width: 768px) {
          .hero-slider-pagination .swiper-pagination-bullet-active {
            width: 32px;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
