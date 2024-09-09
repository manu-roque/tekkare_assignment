// src/components/TopBar.tsx
import React from 'react';

const TopBar: React.FC = () => {
  return (
    <nav className="bg-[#2000ad] p-4 border-b-2 border-white">
      <div className="container mx-auto flex justify-between items-center">
        <img alt="tekkare logo" width={200} height={50} src="https://rcd-media.com/tekkare/logos/HD/Tekkare_Reg_CRGB_W.svg" />
        <div className="text-white text-2xl font-bold">
            KPI Dashboard
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
