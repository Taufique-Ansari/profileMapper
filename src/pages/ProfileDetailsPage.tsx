import { useParams, useNavigate } from "react-router-dom";
import { useApp } from "@/context/AppContext";
import { ArrowLeft, Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { MapView } from "@/components/map/MapView";

export const ProfileDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { profiles } = useApp();

  const profile = profiles.find((p) => p.id === id);

  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Profile Not Found</h2>
        <button
          onClick={() => navigate("/profiles")}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          Back to Profiles
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="relative aspect-[7/6] bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {profile.name}
          </h1>
          <p className="text-xl text-primary dark:text-primary-dark mb-4">
            {profile.title}
          </p>

          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{profile.location}</span>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Location
            </h2>
            <MapView
              profiles={[profile]}
              center={[profile.coordinates.lat, profile.coordinates.lng]}
              zoom={13}
              className="h-[300px] w-full mb-4"
            />
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p>{profile.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary dark:text-primary-dark rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="space-y-4">
              {profile.experience.map((exp, index) => (
                <div key={index} className="text-gray-600 dark:text-gray-300">
                  <p className="font-medium">{exp.position}</p>
                  <p>{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="space-y-4">
              {profile.education.map((edu, index) => (
                <div key={index} className="text-gray-600 dark:text-gray-300">
                  <p className="font-medium">{edu.degree}</p>
                  <p>{edu.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h2>
            <div className="space-y-3">
              <a
                href={`mailto:${profile.contact.email}`}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark"
              >
                <Mail className="w-5 h-5 mr-2" />
                {profile.contact.email}
              </a>
              <a
                href={`tel:${profile.contact.phone}`}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark"
              >
                <Phone className="w-5 h-5 mr-2" />
                {profile.contact.phone}
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 