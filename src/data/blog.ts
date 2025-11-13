export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of Pour Over Coffee: A Complete Guide',
    slug: 'art-of-pour-over-coffee',
    excerpt: 'Discover the techniques and tips for brewing the perfect cup of pour over coffee at home. From choosing the right beans to mastering your pour.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    category: 'Brewing Guide',
    author: {
      name: 'Sarah Miller',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    publishedAt: '2024-01-20',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Coffee Origins: Journey Through Ethiopia',
    slug: 'coffee-origins-ethiopia',
    excerpt: 'Explore the birthplace of coffee and learn about the rich history and unique flavors of Ethiopian coffee beans.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800',
    category: 'Coffee Origins',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    },
    publishedAt: '2024-01-18',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Espresso Fundamentals: From Bean to Cup',
    slug: 'espresso-fundamentals',
    excerpt: 'Master the basics of espresso extraction, including grind size, temperature, pressure, and timing for the perfect shot.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800',
    category: 'Brewing Guide',
    author: {
      name: 'David Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    },
    publishedAt: '2024-01-15',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Seasonal Coffee Menu: Spring Favorites',
    slug: 'spring-coffee-menu',
    excerpt: 'Check out our latest seasonal offerings featuring light roasts and floral notes perfect for spring mornings.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800',
    category: 'Menu Updates',
    author: {
      name: 'Emily Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    },
    publishedAt: '2024-01-12',
    readTime: '4 min read',
  },
  {
    id: 5,
    title: 'Latte Art Workshop: Tips from Our Baristas',
    slug: 'latte-art-workshop',
    excerpt: 'Learn the secrets to creating beautiful latte art designs. Our expert baristas share their techniques and practice routines.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800',
    category: 'Barista Skills',
    author: {
      name: 'Lisa Martinez',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200',
    },
    publishedAt: '2024-01-10',
    readTime: '8 min read',
  },
  {
    id: 6,
    title: 'Sustainable Coffee: Our Commitment',
    slug: 'sustainable-coffee-commitment',
    excerpt: 'Learn about our sustainability initiatives, from direct trade relationships to eco-friendly packaging and zero-waste goals.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800',
    category: 'Sustainability',
    author: {
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
    },
    publishedAt: '2024-01-08',
    readTime: '6 min read',
  },
];
