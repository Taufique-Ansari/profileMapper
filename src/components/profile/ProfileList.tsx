import { Profile } from '@/types';
import { ProfileCard } from './ProfileCard';

interface ProfileListProps {
  profiles: Profile[];
  onProfileClick?: (profile: Profile) => void;
}

export const ProfileList = ({ profiles, onProfileClick }: ProfileListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onClick={onProfileClick}
        />
      ))}
    </div>
  );
}; 