import { useApp } from "@/context/AppContext";
import { MapView } from "@/components/map/MapView";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { SearchBar } from "@/components/search/SearchBar";
import { FilterPanel } from "@/components/search/FilterPanel";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";

export const ProfilesPage = () => {
  const { filteredProfiles, loading, error } = useApp();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Error</h2>
        <p className="text-gray-600 dark:text-gray-300">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <SearchBar />
        <FilterPanel />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {filteredProfiles.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300 text-center py-8">
              No profiles found matching your criteria.
            </p>
          ) : (
            filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))
          )}
        </div>

        <div className="sticky top-8">
          <ErrorBoundary>
            <MapView
              profiles={filteredProfiles}
              className="h-[calc(100vh-8rem)]"
            />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}; 