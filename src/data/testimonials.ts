export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    rating: 5,
    text: 'The best coffee shop in town! The atmosphere is cozy and welcoming, and the baristas really know their craft. My morning cappuccino is always perfect.',
    date: '2024-01-15',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Coffee Enthusiast',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 5,
    text: 'Exceptional quality and service. The single-origin pour-overs are outstanding. This place has become my go-to spot for both work and relaxation.',
    date: '2024-01-10',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Local Artist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    rating: 5,
    text: 'I love spending my afternoons here. The creative environment and amazing coffee inspire my art. The pastries are delicious too!',
    date: '2024-01-08',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    rating: 5,
    text: 'Perfect spot for business meetings. Great wifi, comfortable seating, and the best coffee. The staff is always friendly and accommodating.',
    date: '2024-01-05',
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    role: 'Food Blogger',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    rating: 5,
    text: 'As a food blogger, I\'ve visited countless cafes. Coffee House stands out for its attention to detail, quality ingredients, and passion for coffee.',
    date: '2024-01-03',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Student',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    rating: 5,
    text: 'My favorite study spot! Quiet atmosphere, excellent coffee, and reasonable prices. The staff has learned my usual order by heart.',
    date: '2024-01-01',
  },
];
