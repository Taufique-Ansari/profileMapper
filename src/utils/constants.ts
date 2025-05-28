// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
export const API_TIMEOUT = 10000; // 10 seconds

// Map Configuration
export const DEFAULT_MAP_CENTER = {
  lat: 0,
  lng: 0,
};
export const DEFAULT_ZOOM = 2;
export const MAX_ZOOM = 18;
export const MIN_ZOOM = 1;

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

// Routes
export const ROUTES = {
  HOME: '/',
  PROFILES: '/profiles',
  PROFILE_DETAILS: '/profiles/:id',
  MAP: '/map',
  ADMIN: '/admin',
  ADMIN_PROFILES: '/admin/profiles',
  ADMIN_USERS: '/admin/users',
  SETTINGS: '/settings',
  LOGIN: '/login',
  REGISTER: '/register',
  NOT_FOUND: '/404',
} as const;

// Theme
export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

// User Roles
export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
} as const;

// Search and Filter
export const SORT_OPTIONS = {
  NAME: 'name',
  DATE: 'date',
  DISTANCE: 'distance',
} as const;

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'theme',
  AUTH_TOKEN: 'auth_token',
  USER: 'user',
  SEARCH_FILTERS: 'search_filters',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'Unauthorized. Please log in.',
  FORBIDDEN: 'Access forbidden.',
  NOT_FOUND: 'Resource not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  PROFILE_CREATED: 'Profile created successfully.',
  PROFILE_UPDATED: 'Profile updated successfully.',
  PROFILE_DELETED: 'Profile deleted successfully.',
  SETTINGS_UPDATED: 'Settings updated successfully.',
} as const;

// Animation Durations (in milliseconds)
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const; 