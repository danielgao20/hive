import React, { useState, useEffect } from 'react';
import hiveLogo from '../assets/logos/hive.png';
import profilePic from '../assets/profile.png';

function NavBar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className="fixed top-0 z-10 flex h-16 w-full items-center justify-between px-4 bg-white dark:bg-gray-800 backdrop-blur-lg">
      <img src={hiveLogo} alt="Hive" className="h-5 ml-5" />
      <div className="relative">
        <img src={profilePic} alt="Profile" className="h-12 rounded-full border-2 border-purple-500 mr-5 cursor-pointer" onClick={toggleDropdown} />
        {isDropdownVisible && (
          <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-xl">
            <div className="px-4 py-2 font-semibold text-gray-900 dark:text-white">Profile</div>
            <div className="px-4 py-2 font-semibold text-gray-800 dark:text-gray-200">Daniel Gao</div>
            <div className="px-4 py-2">
              <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" className="sr-only" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow transition-transform duration-300" style={{ transform: isDarkMode ? 'translateX(100%)' : 'translateX(0)' }}></div>
              </div>
                <div className="ml-3 text-gray-700 dark:text-gray-300 font-medium">
                  {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                </div>
              </label>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
