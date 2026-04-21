export const artists = [
  {
    id: 'a1',
    name: 'Elena K.',
    username: '@elenak_art',
    avatar: 'https://i.pravatar.cc/150?u=a1',
    banner: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80',
    bio: 'Minimalist illustrator focused on geometry and nature.',
    followers: 1205,
    sales: 450,
    verified: true,
  },
  {
    id: 'a2',
    name: 'Marcus Chen',
    username: '@marcus_designs',
    avatar: 'https://i.pravatar.cc/150?u=a2',
    banner: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&q=80',
    bio: 'Cyberpunk and retro-wave digital artist.',
    followers: 3420,
    sales: 1280,
    verified: true,
  },
  {
    id: 'a3',
    name: 'Sarah Jenkins',
    username: '@sarahj_creates',
    avatar: 'https://i.pravatar.cc/150?u=a3',
    banner: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80',
    bio: 'Watercolor and abstract expressions.',
    followers: 890,
    sales: 210,
    verified: false,
  }
];

export const designs = [
  {
    id: 'd1',
    title: 'Geometric Sunrise',
    artistId: 'a1',
    image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=800&q=80',
    price: 24.99,
    category: 'Abstract',
    tags: ['geometric', 'minimal', 'sun'],
    trending: true,
    likes: 342,
  },
  {
    id: 'd2',
    title: 'Neon Tokyo',
    artistId: 'a2',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
    price: 29.99,
    category: 'Cyberpunk',
    tags: ['neon', 'city', 'retro'],
    trending: true,
    likes: 850,
  },
  {
    id: 'd3',
    title: 'Fluid Thoughts',
    artistId: 'a3',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    price: 22.50,
    category: 'Watercolor',
    tags: ['fluid', 'blue', 'calm'],
    trending: false,
    likes: 124,
  },
  {
    id: 'd4',
    title: 'Abstract Shapes',
    artistId: 'a1',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80',
    price: 26.00,
    category: 'Abstract',
    tags: ['shapes', 'minimal', 'modern'],
    trending: false,
    likes: 210,
  },
  {
    id: 'd5',
    title: 'Cyber Samurai',
    artistId: 'a2',
    image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=800&q=80',
    price: 32.00,
    category: 'Cyberpunk',
    tags: ['samurai', 'neon', 'dark'],
    trending: true,
    likes: 540,
  },
  {
    id: 'd6',
    title: 'Morning Bloom',
    artistId: 'a3',
    image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=800&q=80',
    price: 21.00,
    category: 'Watercolor',
    tags: ['flower', 'pink', 'spring'],
    trending: false,
    likes: 98,
  }
];

export const baseProducts = [
  {
    id: 'p1',
    name: 'Premium Classic T-Shirt',
    type: 't-shirt',
    basePrice: 15.00,
    colors: [
      { name: 'White', hex: '#ffffff' },
      { name: 'Black', hex: '#111111' },
      { name: 'Heather Gray', hex: '#9ca3af' },
      { name: 'Navy', hex: '#1e3a8a' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    mockupImages: {
      '#ffffff': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
      '#111111': 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80',
      '#9ca3af': 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
      '#1e3a8a': 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'p2',
    name: 'Heavyweight Oversized Hoodie',
    type: 'hoodie',
    basePrice: 35.00,
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Bone', hex: '#f3f4f6' },
      { name: 'Olive', hex: '#4b5320' },
    ],
    sizes: ['M', 'L', 'XL'],
    mockupImages: {
      '#111111': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
      '#f3f4f6': 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
      '#4b5320': 'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'p3',
    name: 'Vintage Wash Oversized Tee',
    type: 'oversized-tee',
    basePrice: 20.00,
    colors: [
      { name: 'Charcoal', hex: '#374151' },
      { name: 'Washed Blue', hex: '#60a5fa' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    mockupImages: {
      '#374151': 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
      '#60a5fa': 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80'
    }
  }
];
