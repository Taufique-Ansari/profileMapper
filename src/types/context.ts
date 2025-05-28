export interface Profile {
  id: string;
  name: string;
  title: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
} 