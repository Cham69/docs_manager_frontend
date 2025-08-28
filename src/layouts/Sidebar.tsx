import React from 'react';
import { 
  FaHome, 
  FaFileAlt, 
  FaFolder, 
  FaUsers, 
  FaCog, 
  FaChartBar, 
  FaChartLine, 
  FaPlug, 
  FaCloudUploadAlt, 
  FaShieldAlt, 
  FaQuestionCircle, 
  FaBook, 
  FaCode, 
  FaClock, 
  FaUser, 
  FaTimes 
} from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigation = [
    { name: 'Dashboard', href: '#', icon: FaHome, current: true },
    { name: 'Documents', href: '#', icon: FaFileAlt, current: false },
    { name: 'Categories', href: '#', icon: FaFolder, current: false },
    { name: 'Users', href: '#', icon: FaUsers, current: false },
    { name: 'Settings', href: '#', icon: FaCog, current: false },
    { name: 'Reports', href: '#', icon: FaChartBar, current: false },
    { name: 'Analytics', href: '#', icon: FaChartLine, current: false },
    { name: 'Integrations', href: '#', icon: FaPlug, current: false },
    { name: 'Backup', href: '#', icon: FaCloudUploadAlt, current: false },
    { name: 'Security', href: '#', icon: FaShieldAlt, current: false },
    { name: 'Help & Support', href: '#', icon: FaQuestionCircle, current: false },
  ];

  const secondaryNavigation = [
    { name: 'Documentation', href: '#', icon: FaBook },
    { name: 'API Reference', href: '#', icon: FaCode },
    { name: 'Changelog', href: '#', icon: FaClock },
  ];

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-full bg-white border-r border-gray-200">
            {/* Logo area - Fixed height */}
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <FaFileAlt className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-lg font-semibold text-gray-900">Docs Manager</span>
              </div>
            </div>

            {/* Navigation - Scrollable area with fixed height */}
            <div className="flex-1 overflow-y-auto">
              <nav className="px-2 py-4 space-y-1">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        item.current
                          ? 'bg-blue-100 text-blue-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <IconComponent
                        className={`mr-3 h-5 w-5 ${
                          item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                        }`}
                      />
                      {item.name}
                    </a>
                  );
                })}
              </nav>

              {/* Secondary navigation */}
              <div className="border-t border-gray-200 px-2 py-4">
                <div className="space-y-1">
                  {secondaryNavigation.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <IconComponent className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* User profile - Fixed at bottom */}
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center">
                      <FaUser className="h-6 w-6 text-gray-700" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">John Doe</p>
                    <p className="text-xs text-gray-500">View profile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile header */}
          <div className="flex items-center justify-between h-16 px-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <FaFileAlt className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-lg font-semibold text-gray-900">Docs Manager</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile navigation - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <nav className="px-2 py-4 space-y-1">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                      item.current
                        ? 'bg-blue-100 text-blue-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={onClose}
                  >
                    <IconComponent
                      className={`mr-3 h-6 w-6 ${
                        item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                    />
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Mobile secondary navigation */}
            <div className="border-t border-gray-200 px-2 py-4">
              <div className="space-y-1">
                {secondaryNavigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      onClick={onClose}
                    >
                      <IconComponent className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 