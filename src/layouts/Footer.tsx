import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Left side - Copyright */}
          <div className="text-sm text-gray-500">
            <p>&copy; 2024 Docs Manager. All rights reserved.</p>
          </div>

          {/* Right side - Version */}
          <div className="text-sm text-gray-500">
            <p>Version 1.0.0</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 