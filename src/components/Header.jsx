import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-blue-600">job</span>
                <span className="text-orange-500">Ringer</span>
              </div>
              <div className="text-orange-500 text-xl">»</div>
            </div>
            <div className="hidden sm:block ml-2 text-xs text-gray-500">
              Clarity and Portal
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              My Dashboard
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Jobs
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Jobseeker Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Jobseeker Subscription
            </a>
            
            {/* Notification Icon */}
            <div className="relative">
              <svg className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5V3h5v14z" />
              </svg>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <img
                  src="/api/placeholder/32/32"
                  alt="User"
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-gray-700 font-medium">Hello Arman</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                My Dashboard
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Jobs
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Jobseeker Services
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Jobseeker Subscription
              </a>
              <div className="flex items-center px-3 py-2 space-x-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <img
                    src="/api/placeholder/32/32"
                    alt="User"
                    className="w-6 h-6 rounded-full"
                  />
                </div>
                <span className="text-gray-700 font-medium">Hello Arman</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;