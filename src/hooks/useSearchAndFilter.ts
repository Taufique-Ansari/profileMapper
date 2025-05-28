import { useMemo } from 'react';
import { Profile } from '@/types/context';

interface UseSearchAndFilterProps {
  profiles: Profile[];
  searchQuery: string;
  filters: {
    skills: string;
    location: string;
  };
}

export const useSearchAndFilter = ({
  profiles,
  searchQuery,
  filters,
}: UseSearchAndFilterProps) => {
  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      // Search query filter
      const searchString = `${profile.name} ${profile.title} ${profile.location} ${profile.skills.join(' ')} ${profile.description}`.toLowerCase();
      const matchesSearch = searchQuery === '' || searchString.includes(searchQuery.toLowerCase());

      // Skills filter
      const matchesSkills = filters.skills === '' || profile.skills.includes(filters.skills);

      // Location filter
      const matchesLocation = filters.location === '' || profile.location.includes(filters.location);

      return matchesSearch && matchesSkills && matchesLocation;
    });
  }, [profiles, searchQuery, filters]);

  return {
    filteredProfiles,
  };
}; 