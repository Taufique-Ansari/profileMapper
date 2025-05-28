import { Filter } from "lucide-react";
import { useApp } from "@/context/AppContext";

export const FilterPanel = () => {
  const { filters, setFilters } = useApp();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'skills') {
      setFilters({
        ...filters,
        skills: value ? [value] : [] // Convert single value to array
      });
    } else {
      setFilters({
        ...filters,
        [name]: value
      });
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-gray-500" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filters</span>
      </div>
      
      <div className="flex gap-4">
        <select
          name="skills"
          value={filters.skills[0] || ''}
          onChange={handleFilterChange}
          className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Skills</option>
          <option value="React">React</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Node.js">Node.js</option>
          <option value="Python">Python</option>
        </select>

        <select
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Locations</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Berlin">Berlin</option>
        </select>
      </div>
    </div>
  );
}; 