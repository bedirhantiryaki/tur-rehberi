// Tur ve destinasyon tipleri

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  duration: string; // örn: "2 saat", "1 gün"
  rating: number;
  reviewCount: number;
  image: string;
  location: Location;
  isFeatured: boolean;
  tags: string[];
  distance?: number; // km cinsinden mesafe
}

export interface Destination {
  id: string;
  name: string;
  type: string; // "spiritual", "historical", "natural" vs.
  image: string;
  location: Location;
  tourCount: number;
  distance?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface SmartTour {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tourCount: number;
  category: string;
}

