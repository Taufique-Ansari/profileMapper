import React from "react";

export const Footer: React.FC = () => (
  <footer className="w-full py-4 text-center text-sm text-gray-500 border-t bg-white dark:bg-gray-900 dark:text-gray-400">
    &copy; {new Date().getFullYear()} Profile Mapping App. All rights reserved.
  </footer>
); 