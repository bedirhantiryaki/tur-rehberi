import { Category, Destination, SmartTour, Tour } from '@/types/tour';

// Mock kategoriler
export const categories: Category[] = [
  { id: '1', name: 'Tümü', icon: 'apps-outline', color: '#4CAF50' },
  { id: '2', name: 'Tarihi', icon: 'business-outline', color: '#FF9800' },
  { id: '3', name: 'Doğa', icon: 'leaf-outline', color: '#4CAF50' },
  { id: '4', name: 'Kültür', icon: 'color-palette-outline', color: '#9C27B0' },
  { id: '5', name: 'Macdsdera', icon: 'bicycle-outline', color: '#F44336' },
  { id: '6', name: 'Gastronomi', icon: 'restaurant-outline', color: '#FF5722' },
];

// Mock akıllı turlar
export const smartTours: SmartTour[] = [
  {
    id: '1',
    title: 'Manevi Yolculuk',
    subtitle: 'Tarihi Kiliseler',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
    tourCount: 12,
    category: 'spiritual',
  },
  {
    id: '2',
    title: 'Osmanlı İzleri',
    subtitle: 'İstanbul Tarihi',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800',
    tourCount: 18,
    category: 'historical',
  },
  {
    id: '3',
    title: 'Karadeniz Yaylası',
    subtitle: 'Doğa Turu',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    tourCount: 8,
    category: 'nature',
  },
];

// Mock popüler turlar
export const popularTours: Tour[] = [
  {
    id: '1',
    title: 'Tarihi Yarımada Turu',
    description: 'İstanbul\'un en önemli tarihi yapılarını keşfedin. Sultanahmet, Ayasofya ve Topkapı Sarayı\'nı gezin.',
    category: 'Tarihi',
    price: 450,
    duration: '4 saat',
    rating: 4.8,
    reviewCount: 234,
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800',
    location: {
      latitude: 41.0082,
      longitude: 28.9784,
      address: 'Sultanahmet, Fatih/İstanbul',
    },
    isFeatured: true,
    tags: ['Rehberli', 'Müze Girişi', 'Öğle Yemeği'],
    distance: 2.3,
  },
  {
    id: '2',
    title: 'Boğaz Turu',
    description: 'Boğaz\'ın eşsiz manzarasını tekne turunda yaşayın. Avrupa ve Asya yakasını birden görün.',
    category: 'Doğa',
    price: 350,
    duration: '3 saat',
    rating: 4.9,
    reviewCount: 567,
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800',
    location: {
      latitude: 41.0403,
      longitude: 29.0077,
      address: 'Eminönü İskelesi, İstanbul',
    },
    isFeatured: true,
    tags: ['Tekne Turu', 'Çay İkramı', 'Sunset'],
    distance: 3.1,
  },
  {
    id: '3',
    title: 'Kapadokya Balon Turu',
    description: 'Kapadokya\'nın büyüleyici peribacalarını sıcak hava balonuyla havadan izleyin.',
    category: 'Macera',
    price: 1250,
    duration: '2 saat',
    rating: 5.0,
    reviewCount: 892,
    image: 'https://images.unsplash.com/photo-1605116964377-6eff91e87154?w=800',
    location: {
      latitude: 38.6431,
      longitude: 34.8286,
      address: 'Göreme, Nevşehir',
    },
    isFeatured: true,
    tags: ['Balon Turu', 'Kahvaltı', 'Sertifika'],
    distance: 730,
  },
  {
    id: '4',
    title: 'Efes Antik Kenti',
    description: 'Dünyanın en iyi korunmuş antik kentlerinden birini keşfedin.',
    category: 'Tarihi',
    price: 380,
    duration: '5 saat',
    rating: 4.7,
    reviewCount: 445,
    image: 'https://images.unsplash.com/photo-1583074801902-3f5d1f8e0e35?w=800',
    location: {
      latitude: 37.9392,
      longitude: 27.3409,
      address: 'Selçuk, İzmir',
    },
    isFeatured: false,
    tags: ['Arkeoloji', 'Rehberli', 'Müze Kart'],
  },
  {
    id: '5',
    title: 'Pamukkale Travertenleri',
    description: 'Beyaz cennet Pamukkale\'nin termal havuzlarında yüzün.',
    category: 'Doğa',
    price: 280,
    duration: '3 saat',
    rating: 4.6,
    reviewCount: 312,
    image: 'https://images.unsplash.com/photo-1608748268619-a3f8b5a84c55?w=800',
    location: {
      latitude: 37.9202,
      longitude: 29.1211,
      address: 'Pamukkale, Denizli',
    },
    isFeatured: false,
    tags: ['Termal', 'Doğa', 'Fotoğraf'],
  },
];

// Mock yakındaki destinasyonlar
export const nearbyDestinations: Destination[] = [
  {
    id: '1',
    name: 'Galata Kulesi',
    type: 'historical',
    image: 'https://images.unsplash.com/photo-1605622192346-3157654e4e1e?w=800',
    location: {
      latitude: 41.0256,
      longitude: 28.9744,
      address: 'Beyoğlu, İstanbul',
    },
    tourCount: 8,
    distance: 1.2,
  },
  {
    id: '2',
    name: 'Kapalıçarşı',
    type: 'cultural',
    image: 'https://images.unsplash.com/photo-1579015863417-5cb5f962bc6f?w=800',
    location: {
      latitude: 41.0108,
      longitude: 28.9681,
      address: 'Fatih, İstanbul',
    },
    tourCount: 15,
    distance: 0.8,
  },
  {
    id: '3',
    name: 'Dolmabahçe Sarayı',
    type: 'historical',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800',
    location: {
      latitude: 41.0391,
      longitude: 29.0002,
      address: 'Beşiktaş, İstanbul',
    },
    tourCount: 6,
    distance: 3.5,
  },
  {
    id: '4',
    name: 'Princes\' Islands',
    type: 'nature',
    image: 'https://images.unsplash.com/photo-1595880041197-7ed76df5a634?w=800',
    location: {
      latitude: 40.8568,
      longitude: 29.1245,
      address: 'Adalar, İstanbul',
    },
    tourCount: 12,
    distance: 18.5,
  },
];

// Favori turlar - başlangıçta boş, kullanıcı ekleyecek
export const favoriteTours: Tour[] = [];

