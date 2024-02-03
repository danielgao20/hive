import React from 'react';
import hiveLogo from './assets/hive.png';
import profilePic from './assets/profile.png';

function NavBar() {
  return (
    <header className="fixed top-0 z-10 flex h-16 w-full items-center justify-between px-4 bg-white/75 backdrop-blur-md">
      <img src={hiveLogo} alt="Hive" className="h-6" />
      <img src={profilePic} alt="Profile" className="h-12 rounded-full border-2 border-purple-500" />
    </header>
  );
}

export default NavBar;