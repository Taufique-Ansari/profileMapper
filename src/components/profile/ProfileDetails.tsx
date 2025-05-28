import { Profile } from '@/types';
import { X, MapPin, Mail, Phone, Calendar, Globe, Building } from 'lucide-react';

interface ProfileDetailsProps {
  profile: Profile;
  onClose: () => void;
}

export const ProfileDetails = ({ profile, onClose }: ProfileDetailsProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <div className="h-48 w-full relative">
            <img
              src={profile.avatar}
              alt={`${profile.firstName} ${profile.lastName}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {profile.firstName} {profile.lastName}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {profile.bio}
          </p>

          {/* Contact Information */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Mail className="w-5 h-5 mr-3" />
              <span>{profile.email}</span>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Phone className="w-5 h-5 mr-3" />
              <span>{profile.phone}</span>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <MapPin className="w-5 h-5 mr-3" />
              <span>{profile.location.address}</span>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Building className="w-5 h-5 mr-3" />
              <span>{profile.location.city}, {profile.location.state}, {profile.location.country}</span>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Calendar className="w-5 h-5 mr-3" />
              <span>Joined {new Date(profile.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Interests */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Location Map Preview */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Location
            </h3>
            <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <MapPin className="w-8 h-8 text-gray-400" />
              <span className="ml-2 text-gray-600 dark:text-gray-400">
                Map preview will be implemented here
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 