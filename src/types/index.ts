export interface Location {
  id: string;
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatar?: string;
  bio?: string;
  location: Location;
  interests: string[];
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  role: 'user' | 'admin';
  profile: Profile;
  createdAt: string;
  updatedAt: string;
}

export interface MapMarker {
  id: string;
  position: {
    lat: number;
    lng: number;
  };
  profile: Profile;
}

export interface SearchFilters {
  query?: string;
  location?: string;
  interests?: string[];
  sortBy?: 'name' | 'date' | 'distance';
  sortOrder?: 'asc' | 'desc';
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export type Theme = 'light' | 'dark';

export interface AppState {
  theme: Theme;
  isAuthenticated: boolean;
  currentUser?: User;
  searchFilters: SearchFilters;
} 