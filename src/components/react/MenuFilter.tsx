import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { menuItems, menuCategories, type MenuItem } from '@/data/menu';

export const MenuFilter = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter((item) => item.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    // Animate items on filter change
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll('.menu-item');

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
        }
      );
    }
  }, [filteredItems]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
        <button
          onClick={() => handleCategoryChange('all')}
          className={`px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-xs sm:text-sm md:text-base rounded-full font-secondary font-semibold transition-all duration-300 touch-manipulation ${
            activeCategory === 'all'
              ? 'bg-primary text-white shadow-primary'
              : 'border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary'
          }`}
        >
          All Items
          <span className="ml-1 sm:ml-2 text-xs opacity-70">({menuItems.length})</span>
        </button>

        {menuCategories.map((category) => {
          const count = menuItems.filter((item) => item.category === category.id).length;
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 text-xs sm:text-sm md:text-base rounded-full font-secondary font-semibold transition-all duration-300 touch-manipulation ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-primary'
                  : 'border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary'
              }`}
            >
              <span className="mr-1 sm:mr-2">{category.icon}</span>
              {category.name}
              <span className="ml-1 sm:ml-2 text-xs opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-gray-600 font-secondary text-sm sm:text-base">
          Showing <span className="font-bold text-primary">{filteredItems.length}</span> items
        </p>
      </div>

      {/* Menu Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8"
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="menu-item card-hover group"
            data-category={item.category}
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <div className="flex justify-between items-start mb-2 sm:mb-3">
                <h3 className="text-base sm:text-lg md:text-h5 font-primary flex-1">{item.name}</h3>
                <span className="text-primary font-bold text-base sm:text-lg flex-shrink-0 ml-3 sm:ml-4">
                  {item.price}
                </span>
              </div>
              <p className="text-body text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">{item.description}</p>
              {item.featured && (
                <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  Popular
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12 sm:py-16">
          <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">☕</div>
          <h3 className="text-xl sm:text-2xl md:text-h4 font-primary mb-2">No items found</h3>
          <p className="text-body text-sm sm:text-base">Try selecting a different category</p>
        </div>
      )}
    </div>
  );
};

export default MenuFilter;
