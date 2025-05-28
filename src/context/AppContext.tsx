import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AppState, AppContextType, Profile } from '@/types/context';
import { sampleProfiles } from '@/data/sampleProfiles';

// Initial state
const initialState: AppState = {
  profiles: [],
  filteredProfiles: [],
  loading: false,
  error: null,
  searchQuery: '',
  filters: {
    skills: [],
    location: '',
  },
  theme: 'light',
};

// Action types
type Action =
  | { type: 'SET_PROFILES'; payload: Profile[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_FILTERS'; payload: { skills: string[]; location: string } }
  | { type: 'TOGGLE_THEME' }
  | { type: 'ADD_PROFILE'; payload: Profile }
  | { type: 'UPDATE_PROFILE'; payload: { id: string; profile: Profile } }
  | { type: 'DELETE_PROFILE'; payload: string };

// Reducer function
const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_PROFILES':
      return {
        ...state,
        profiles: action.payload,
        filteredProfiles: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
        filteredProfiles: filterProfiles(state.profiles, action.payload, state.filters),
      };
    case 'SET_FILTERS':
      return {
        ...state,
        filters: action.payload,
        filteredProfiles: filterProfiles(state.profiles, state.searchQuery, action.payload),
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case 'ADD_PROFILE':
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
        filteredProfiles: filterProfiles([...state.profiles, action.payload], state.searchQuery, state.filters),
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        profiles: state.profiles.map((p) => (p.id === action.payload.id ? action.payload.profile : p)),
        filteredProfiles: filterProfiles(
          state.profiles.map((p) => (p.id === action.payload.id ? action.payload.profile : p)),
          state.searchQuery,
          state.filters
        ),
      };
    case 'DELETE_PROFILE':
      return {
        ...state,
        profiles: state.profiles.filter((p) => p.id !== action.payload),
        filteredProfiles: filterProfiles(
          state.profiles.filter((p) => p.id !== action.payload),
          state.searchQuery,
          state.filters
        ),
      };
    default:
      return state;
  }
};

// Helper function to filter profiles
const filterProfiles = (
  profiles: Profile[],
  searchQuery: string,
  filters: { skills: string[]; location: string }
): Profile[] => {
  return profiles.filter((profile) => {
    const matchesSearch = searchQuery
      ? profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesSkills = filters.skills.length
      ? filters.skills.every((skill) => profile.skills.includes(skill))
      : true;

    const matchesLocation = filters.location
      ? profile.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;

    return matchesSearch && matchesSkills && matchesLocation;
  });
};

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load sample profiles
  useEffect(() => {
    dispatch({ type: 'SET_PROFILES', payload: sampleProfiles });
  }, []);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      dispatch({ type: 'TOGGLE_THEME' });
    }
  }, []);

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('theme', state.theme);
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
  }, [state.theme]);

  const value: AppContextType = {
    ...state,
    setSearchQuery: (query: string) => dispatch({ type: 'SET_SEARCH_QUERY', payload: query }),
    setFilters: (filters: { skills: string[]; location: string }) =>
      dispatch({ type: 'SET_FILTERS', payload: filters }),
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
    addProfile: (profile: Profile) => dispatch({ type: 'ADD_PROFILE', payload: profile }),
    updateProfile: (id: string, profile: Profile) =>
      dispatch({ type: 'UPDATE_PROFILE', payload: { id, profile } }),
    deleteProfile: (id: string) => dispatch({ type: 'DELETE_PROFILE', payload: id }),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}; 