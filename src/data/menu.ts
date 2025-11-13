export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  featured?: boolean;
  tags?: string[];
}

export const menuCategories = [
  { id: 'coffee', name: 'Coffee', icon: '☕' },
  { id: 'espresso', name: 'Espresso Drinks', icon: '🎯' },
  { id: 'cold', name: 'Cold Drinks', icon: '🧊' },
  { id: 'pastries', name: 'Pastries', icon: '🥐' },
  { id: 'breakfast', name: 'Breakfast', icon: '🍳' },
] as const;

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: 'americano',
    name: 'Americano',
    description: 'Rich espresso with hot water, smooth and bold',
    price: '$3.50',
    category: 'coffee',
    featured: true,
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
    price: '$4.50',
    category: 'coffee',
    featured: true,
  },
  {
    id: 'latte',
    name: 'Caffe Latte',
    description: 'Smooth espresso with steamed milk',
    price: '$4.75',
    category: 'coffee',
  },

  // Espresso
  {
    id: 'espresso-single',
    name: 'Single Espresso',
    description: 'Pure, intense coffee shot',
    price: '$2.75',
    category: 'espresso',
  },
  {
    id: 'espresso-double',
    name: 'Double Espresso',
    description: 'Double shot of pure intensity',
    price: '$4.00',
    category: 'espresso',
    featured: true,
  },

  // Cold Drinks
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    description: 'Chilled espresso with cold milk over ice',
    price: '$5.00',
    category: 'cold',
    featured: true,
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'Smooth, cold-steeped coffee',
    price: '$4.50',
    category: 'cold',
  },

  // Pastries
  {
    id: 'croissant',
    name: 'Butter Croissant',
    description: 'Flaky, buttery French pastry',
    price: '$3.50',
    category: 'pastries',
  },
  {
    id: 'muffin',
    name: 'Blueberry Muffin',
    description: 'Fresh baked with real blueberries',
    price: '$3.75',
    category: 'pastries',
  },

  // Breakfast
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    description: 'Smashed avocado on artisan bread',
    price: '$8.50',
    category: 'breakfast',
    featured: true,
  },
  {
    id: 'breakfast-sandwich',
    name: 'Breakfast Sandwich',
    description: 'Egg, cheese, and choice of meat',
    price: '$7.50',
    category: 'breakfast',
  },
];
