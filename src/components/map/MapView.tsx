import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Profile } from '@/types/context';

// Fix for default marker icons in Leaflet
const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapViewProps {
  profiles: Profile[];
  center?: [number, number];
  zoom?: number;
  className?: string;
}

export const MapView = ({ 
  profiles, 
  center = [0, 0], 
  zoom = 2,
  className = 'h-[500px] w-full'
}: MapViewProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map
    const map = L.map(mapContainerRef.current).setView(center, zoom);
    mapRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers
    profiles.forEach(profile => {
      const marker = L.marker([profile.coordinates.lat, profile.coordinates.lng])
        .addTo(map)
        .bindPopup(`
          <div class="p-2">
            <h3 class="font-semibold text-gray-900">${profile.name}</h3>
            <p class="text-sm text-gray-600">${profile.title}</p>
            <p class="text-sm text-gray-500">${profile.location}</p>
          </div>
        `);
    });

    return () => {
      map.remove();
    };
  }, [profiles, center, zoom]);

  return (
    <div className={className}>
      <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
    </div>
  );
}; 