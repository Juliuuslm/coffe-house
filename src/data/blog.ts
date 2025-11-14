export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown content
  image: string;
  category: string;
  tags: string[]; // Array of tags
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  featured?: boolean; // Optional featured flag
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of Pour Over Coffee: A Complete Guide',
    slug: 'art-of-pour-over-coffee',
    excerpt: 'Discover the techniques and tips for brewing the perfect cup of pour over coffee at home. From choosing the right beans to mastering your pour.',
    content: `# The Art of Pour Over Coffee: A Complete Guide

Pour over coffee has become increasingly popular among coffee enthusiasts, and for good reason. This brewing method gives you complete control over every variable, allowing you to extract the perfect cup every time.

## Why Pour Over?

Pour over brewing offers several advantages over other methods:

- **Control**: You control water temperature, pour rate, and extraction time
- **Clarity**: The paper filter produces a clean, crisp cup
- **Ritual**: The process itself can be meditative and enjoyable
- **Quality**: Brings out subtle flavors and aromatics

## Equipment You'll Need

### Essential Gear

1. **Pour Over Dripper** (V60, Chemex, Kalita Wave)
2. **Paper Filters** matched to your dripper
3. **Gooseneck Kettle** for precise pouring
4. **Scale** for accurate measurements
5. **Timer** for consistency

### Optional Accessories

- Thermometer for water temperature
- Coffee grinder (burr grinder recommended)
- Carafe or server

## The Perfect Pour Over Recipe

### Ingredients
- 20g fresh coffee beans (medium-fine grind)
- 300g water at 200°F (93°C)
- Total brew time: 2:30-3:00 minutes

### Step-by-Step Process

#### 1. Preparation
Rinse your filter with hot water to remove paper taste and preheat your dripper.

#### 2. Bloom (0:00-0:45)
Add coffee grounds to the filter and create a small well in the center. Pour 40-60g of water to saturate all grounds. Wait 30-45 seconds for degassing.

#### 3. First Pour (0:45-1:15)
Pour in a slow, circular motion from center outward until you reach 150g total weight.

#### 4. Second Pour (1:15-2:00)
Continue pouring to 250g, maintaining a steady, circular pattern.

#### 5. Final Pour (2:00-2:30)
Pour remaining water to reach 300g total.

#### 6. Drawdown (2:30-3:00)
Allow coffee to fully drain. Total brew time should be 2:30-3:00 minutes.

## Troubleshooting Common Issues

### Bitter or Over-Extracted
- Grind coarser
- Lower water temperature
- Pour faster

### Sour or Under-Extracted
- Grind finer
- Increase water temperature
- Pour slower

### Weak or Watery
- Use more coffee
- Grind finer
- Increase water temperature

## Tips for Success

1. **Fresh is Best**: Use beans roasted within 2-4 weeks
2. **Grind Right Before**: Don't grind until you're ready to brew
3. **Water Matters**: Use filtered water for best taste
4. **Be Consistent**: Keep a brewing journal to track what works
5. **Experiment**: Try different beans, ratios, and techniques

## Conclusion

Mastering pour over coffee takes practice, but the journey is part of the joy. Start with these basics, then experiment to find your perfect cup. Remember, the best coffee is the one that tastes best to you.

Happy brewing! ☕`,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    category: 'Brewing Guide',
    tags: ['pour-over', 'brewing', 'techniques', 'coffee-basics'],
    author: {
      name: 'Sarah Miller',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    publishedAt: '2024-01-20',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Coffee Origins: Journey Through Ethiopia',
    slug: 'coffee-origins-ethiopia',
    excerpt: 'Explore the birthplace of coffee and learn about the rich history and unique flavors of Ethiopian coffee beans.',
    content: `# Coffee Origins: Journey Through Ethiopia

Ethiopia isn't just another coffee-producing country – it's the birthplace of coffee itself. The story of how coffee was discovered here is legendary, and the coffee culture that has evolved over centuries is truly unique.

## The Legend of Kaldi

The most famous origin story of coffee comes from Ethiopia. According to legend, a goat herder named Kaldi noticed his goats became energetic after eating berries from a certain tree. Curious, he tried the berries himself and experienced the same energy boost.

Kaldi brought the berries to a local monastery, where monks used them to stay awake during long prayers. News of these "magical" berries spread, and coffee cultivation began.

## Ethiopia's Coffee Regions

Ethiopia produces some of the world's most distinctive and sought-after coffees. Each region has its own unique flavor profile:

### Yirgacheffe

**Flavor Profile**: Floral, citrus, tea-like
**Elevation**: 1,700-2,200 meters
**Processing**: Mainly washed

Yirgacheffe coffees are known for their:
- Delicate, floral aromatics (jasmine, bergamot)
- Bright, clean acidity
- Light-to-medium body
- Complex citrus notes (lemon, lime)

### Sidamo

**Flavor Profile**: Berry, wine-like, complex
**Elevation**: 1,500-2,200 meters
**Processing**: Both washed and natural

Sidamo offers:
- Rich, full-bodied cup
- Wine-like acidity
- Berry and chocolate notes
- Balanced sweetness

### Harrar

**Flavor Profile**: Wild, fruity, wine-like
**Elevation**: 1,500-2,100 meters
**Processing**: Natural (dry processed)

Harrar is famous for:
- Dry-processed, natural methods
- Blueberry and wine notes
- Medium body
- Complex, wild flavor profile

### Limu

**Flavor Profile**: Balanced, winey, spicy
**Elevation**: 1,400-2,000 meters
**Processing**: Washed

Characteristics include:
- Balanced acidity
- Wine-like qualities
- Spice notes
- Medium body

## The Ethiopian Coffee Ceremony

Coffee in Ethiopia is more than a beverage – it's a cultural ritual. The traditional Ethiopian coffee ceremony is a beautiful, hours-long process that's deeply ingrained in social life.

### The Ceremony Process

1. **Washing**: Green coffee beans are washed
2. **Roasting**: Beans roasted in a pan over charcoal
3. **Grinding**: Beans ground by hand with mortar and pestle
4. **Brewing**: Coffee brewed in a special pot called a *jebena*
5. **Serving**: Served in small cups, usually three rounds

The ceremony represents:
- Hospitality and friendship
- Community bonding
- Respect for tradition
- Mindful appreciation

## Processing Methods

Ethiopian coffee is processed using both traditional and modern methods:

### Natural (Dry) Processing

The oldest method, where coffee cherries dry in the sun with the fruit still on:
- Creates fruity, wine-like flavors
- Higher body and sweetness
- More complex and unpredictable

### Washed (Wet) Processing

Fruit is removed before drying:
- Cleaner, brighter flavors
- More consistent results
- Highlights terroir characteristics

## Why Ethiopian Coffee is Special

### 1. Genetic Diversity
Ethiopia has thousands of wild coffee varietals, creating incredible diversity in flavors.

### 2. Shade-Grown
Most Ethiopian coffee grows under native forest canopy, creating complex flavor development.

### 3. Heirloom Varieties
Ancient, indigenous coffee varieties produce unique flavor profiles impossible to replicate elsewhere.

### 4. Traditional Methods
Many farmers still use centuries-old cultivation and processing techniques.

### 5. Terroir
Unique combination of:
- High elevation
- Rich volcanic soil
- Ideal climate
- Ancient cultivation practices

## How to Brew Ethiopian Coffee

### Recommended Brewing Methods

**Pour Over**: Highlights bright acidity and floral notes
**French Press**: Brings out body and complexity
**Espresso**: Concentrates fruity, wine-like qualities

### Brewing Tips

1. Use medium grind for pour over
2. Water temperature: 195-205°F (90-96°C)
3. Ratio: 1:16 (coffee to water)
4. Experiment with brew time to find your preference

## Tasting Notes Guide

When tasting Ethiopian coffee, look for:

- **Aromatics**: Jasmine, bergamot, lavender
- **Fruit**: Blueberry, strawberry, citrus
- **Florals**: Tea-like, perfumed
- **Body**: Light to medium
- **Acidity**: Bright, wine-like, complex
- **Finish**: Clean, lingering

## Sustainability and Ethics

Ethiopian coffee is often:
- Organically grown (even if not certified)
- Shade-grown under forest canopy
- Cultivated by smallholder farmers
- Processed using traditional, eco-friendly methods

When buying Ethiopian coffee:
- Look for direct trade relationships
- Support cooperatives
- Choose certified organic when possible
- Pay attention to transparency in sourcing

## Conclusion

Ethiopian coffee represents thousands of years of coffee culture, incredible genetic diversity, and unique processing traditions. Each cup tells the story of coffee's birthplace and the people who have cultivated it for generations.

Whether you're drinking a bright, floral Yirgacheffe or a wild, fruity Harrar, you're experiencing coffee in its most authentic, original form.

**Next time you brew Ethiopian coffee, take a moment to appreciate the journey from the highlands of Ethiopia to your cup – it's a journey that began centuries ago and continues to shape coffee culture worldwide.**`,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800',
    category: 'Coffee Origins',
    tags: ['ethiopia', 'origins', 'culture', 'single-origin', 'history'],
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    },
    publishedAt: '2024-01-18',
    readTime: '7 min read',
    featured: true,
  },
  {
    id: 3,
    title: 'Espresso Fundamentals: From Bean to Cup',
    slug: 'espresso-fundamentals',
    excerpt: 'Master the basics of espresso extraction, including grind size, temperature, pressure, and timing for the perfect shot.',
    content: `Espresso is the foundation of many beloved coffee drinks. Understanding the fundamentals will help you pull the perfect shot every time.`,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800',
    category: 'Brewing Guide',
    tags: ['espresso', 'brewing', 'techniques', 'barista'],
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
    content: `Spring brings fresh, light flavors to our coffee menu. Discover our seasonal selections featuring floral and fruity notes.`,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800',
    category: 'Menu Updates',
    tags: ['seasonal', 'menu', 'spring', 'specials'],
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
    content: `Creating beautiful latte art takes practice and patience. Our expert baristas share their best tips for mastering this skill.`,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800',
    category: 'Barista Skills',
    tags: ['latte-art', 'barista', 'techniques', 'tutorial'],
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
    content: `Sustainability is at the heart of everything we do. Learn about our initiatives and commitment to ethical, eco-friendly coffee.`,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800',
    category: 'Sustainability',
    tags: ['sustainability', 'ethics', 'environment', 'direct-trade'],
    author: {
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
    },
    publishedAt: '2024-01-08',
    readTime: '6 min read',
  },
];
