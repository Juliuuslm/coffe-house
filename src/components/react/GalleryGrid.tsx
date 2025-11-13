import { useState, useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import gsap from 'gsap';
import { galleryImages, galleryCategories, type GalleryImage } from '@/data/gallery';

export const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);
  const gridRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);

  // Initialize PhotoSwipe
  useEffect(() => {
    if (!lightboxRef.current) {
      lightboxRef.current = new PhotoSwipeLightbox({
        gallery: '#gallery-grid',
        children: 'a',
        pswpModule: () => import('photoswipe'),
        paddingFn: () => ({ top: 30, bottom: 30, left: 70, right: 70 }),
      });
      lightboxRef.current.init();
    }

    return () => {
      if (lightboxRef.current) {
        lightboxRef.current.destroy();
        lightboxRef.current = null;
      }
    };
  }, []);

  // Filter images
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter((img) => img.category === activeCategory));
    }
  }, [activeCategory]);

  // Animate on filter change
  useEffect(() => {
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll('.gallery-item');

      gsap.fromTo(
        items,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
        }
      );
    }
  }, [filteredImages]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {galleryCategories.map((category) => {
          const count =
            category.id === 'all'
              ? galleryImages.length
              : galleryImages.filter((img) => img.category === category.id).length;

          return (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-8 py-3 rounded-full font-secondary font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-primary'
                  : 'border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
              <span className="ml-2 text-sm opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="text-center mb-8">
        <p className="text-gray-600 font-secondary">
          Showing <span className="font-bold text-primary">{filteredImages.length}</span> photos
        </p>
      </div>

      {/* Gallery Grid */}
      <div
        id="gallery-grid"
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredImages.map((image, index) => (
          <a
            key={image.id}
            href={image.src}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            target="_blank"
            rel="noreferrer"
            className="gallery-item group relative overflow-hidden rounded-2xl aspect-square cursor-pointer block"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-secondary font-semibold">{image.alt}</p>
              </div>
            </div>

            {/* Zoom Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
              <svg
                className="w-5 h-5 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📷</div>
          <h3 className="text-h4 mb-2">No photos found</h3>
          <p className="text-body">Try selecting a different category</p>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
