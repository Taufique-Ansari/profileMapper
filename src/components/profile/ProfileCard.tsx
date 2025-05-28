import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Profile } from "@/types/context";

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <Link
      to={`/profiles/${profile.id}`}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative aspect-[7/6] bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {profile.name}
        </h2>
        <p className="text-primary dark:text-primary-dark mb-4">
          {profile.title}
        </p>

        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{profile.location}</span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
          {profile.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {profile.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-primary/10 text-primary dark:text-primary-dark rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
          {profile.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
              +{profile.skills.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}; 