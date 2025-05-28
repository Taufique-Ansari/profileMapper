import { Link } from 'react-router-dom';
import { MapPin, Users, Globe, Search } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover People Around the World
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Connect with professionals and explore their locations on an interactive map
            </p>
            <Link
              to="/profiles"
              className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Profiles
            </Link>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      
    </div>
  );
}; 