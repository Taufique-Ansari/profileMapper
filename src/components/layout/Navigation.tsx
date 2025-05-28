import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export const Navigation = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary dark:text-primary-dark">
              Profile Mapper
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/profiles"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark px-3 py-2 rounded-md text-sm font-medium"
              >
                Profiles
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/login"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark px-3 py-2 rounded-md text-sm font-medium"
            >
              Admin Login
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}; 