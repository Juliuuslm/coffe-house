import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { testimonials } from '@/data/testimonials';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-primary' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export const TestimonialsSlider = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

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
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={setSwiper}
        spaceBetween={30}
        slidesPerView={1}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.testimonials-next',
          prevEl: '.testimonials-prev',
        }}
        pagination={{
          el: '.testimonials-pagination',
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="!pb-16"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Testimonial Text */}
              <p className="text-body text-base mb-6 flex-grow leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h4 className="font-secondary font-bold text-heading text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-body text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          className="testimonials-prev w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Pagination */}
        <div className="testimonials-pagination flex gap-2" />

        <button
          className="testimonials-next w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style>{`
        .testimonials-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #6E777D;
          opacity: 0.3;
          transition: all 0.3s;
        }

        .testimonials-pagination .swiper-pagination-bullet-active {
          width: 10px;
          height: 10px;
          opacity: 1;
          background: #DD5903;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSlider;
