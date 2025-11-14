export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialty: string;
  experience: string;
  social: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Thompson',
    role: 'Head Barista',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    bio: 'With over 10 years of experience in specialty coffee, Alex leads our barista team with passion and expertise. He\'s competed in multiple latte art championships and loves sharing his knowledge with customers.',
    specialty: 'Espresso & Latte Art',
    experience: '10+ years',
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'Coffee Roaster',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600',
    bio: 'Maria is our master roaster, responsible for bringing out the best flavors from our carefully sourced beans. Her expertise in roast profiles ensures every cup is exceptional.',
    specialty: 'Roasting & Bean Selection',
    experience: '8+ years',
    social: {
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Store Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600',
    bio: 'David oversees daily operations and ensures every customer has an outstanding experience. His attention to detail and warm personality make Coffee House feel like home.',
    specialty: 'Operations & Customer Service',
    experience: '7+ years',
    social: {
      instagram: '#',
      twitter: '#',
    },
  },
  {
    id: 4,
    name: 'Sophie Williams',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600',
    bio: 'Sophie creates our delicious pastries fresh every morning. Trained in Paris, she brings European baking traditions to our menu with a modern twist.',
    specialty: 'Pastries & Desserts',
    experience: '12+ years',
    social: {
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    id: 5,
    name: 'James Rodriguez',
    role: 'Senior Barista',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600',
    bio: 'James specializes in pour-over brewing methods and has won multiple awards in coffee competitions. He loves experimenting with different brewing techniques.',
    specialty: 'Pour Over & Brewing Methods',
    experience: '6+ years',
    social: {
      instagram: '#',
      twitter: '#',
    },
  },
  {
    id: 6,
    name: 'Emma Taylor',
    role: 'Barista',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600',
    bio: 'Emma joined our team two years ago and has quickly become a customer favorite. Her friendly personality and excellent drink-making skills brighten everyone\'s day.',
    specialty: 'Customer Relations & Coffee Art',
    experience: '2+ years',
    social: {
      instagram: '#',
    },
  },
];
