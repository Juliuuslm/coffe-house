export interface GalleryImage {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  category: 'coffee' | 'interior' | 'food' | 'all';
  thumbnail?: string;
}

export const galleryCategories = [
  { id: 'all', name: 'All Photos', icon: '📷' },
  { id: 'coffee', name: 'Coffee', icon: '☕' },
  { id: 'interior', name: 'Interior', icon: '🏠' },
  { id: 'food', name: 'Food', icon: '🍰' },
] as const;

export const galleryImages: GalleryImage[] = [
  // Coffee
  {
    id: 'coffee-1',
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200',
    width: 1200,
    height: 800,
    alt: 'Fresh coffee being poured',
    category: 'coffee',
  },
  {
    id: 'coffee-2',
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200',
    width: 1200,
    height: 800,
    alt: 'Coffee brewing process',
    category: 'coffee',
  },
  {
    id: 'coffee-3',
    src: 'https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=1200',
    width: 1200,
    height: 800,
    alt: 'Espresso shot',
    category: 'coffee',
  },
  {
    id: 'coffee-4',
    src: 'https://images.unsplash.com/photo-1501492246171-61dfa240b443?w=1200',
    width: 1200,
    height: 800,
    alt: 'Latte art',
    category: 'coffee',
  },

  // Interior
  {
    id: 'interior-1',
    src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200',
    width: 1200,
    height: 800,
    alt: 'Cozy cafe interior',
    category: 'interior',
  },
  {
    id: 'interior-2',
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200',
    width: 1200,
    height: 800,
    alt: 'Cafe seating area',
    category: 'interior',
  },
  {
    id: 'interior-3',
    src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200',
    width: 1200,
    height: 800,
    alt: 'Coffee shop exterior',
    category: 'interior',
  },

  // Food
  {
    id: 'food-1',
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200',
    width: 1200,
    height: 800,
    alt: 'Fresh pastries display',
    category: 'food',
  },
  {
    id: 'food-2',
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200',
    width: 1200,
    height: 800,
    alt: 'Coffee and croissant',
    category: 'food',
  },
];
