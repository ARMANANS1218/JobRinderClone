import React from 'react';

const Footer = () => {
  const socialIcons = [
    { 
      name: 'Skype', 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.5 3.5c-4.142 0-7.5 3.358-7.5 7.5 0 1.053.21 2.055.592 2.969L3.5 18.5l4.531-2.092C9.445 16.79 10.447 17 11.5 17c4.142 0 7.5-3.358 7.5-7.5S16.642 3.5 12.5 3.5z"/>
        </svg>
      ), 
      bg: 'bg-blue-500' 
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      bg: 'bg-blue-600' 
    },
    { 
      name: 'Twitter', 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ), 
      bg: 'bg-blue-400' 
    },
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM18.68 16.508c0 1.5-1.218 2.718-2.718 2.718H8.038c-1.5 0-2.718-1.218-2.718-2.718V7.492c0-1.5 1.218-2.718 2.718-2.718h7.924c1.5 0 2.718 1.218 2.718 2.718v9.016z"/>
        </svg>
      ), 
      bg: 'bg-pink-500' 
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      bg: 'bg-blue-700' 
    },
    { 
      name: 'YouTube', 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ), 
      bg: 'bg-red-600' 
    },
    { 
      name: 'Pinterest', 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.54-6.219 0 0-.219-.438-.219-1.085 0-1.016.589-1.775 1.321-1.775.623 0 .925.468.925 1.028 0 .627-.399 1.565-.606 2.434-.173.731.367 1.325 1.089 1.325 1.307 0 2.184-1.775 2.184-3.872 0-1.595-1.077-2.783-3.04-2.783-2.188 0-3.584 1.61-3.584 3.402 0 .619.187 1.05.477 1.388.131.154.15.217.102.394-.033.131-.11.44-.143.563-.048.188-.194.228-.345.165-1.207-.497-1.827-1.836-1.827-3.336 0-2.444 2.061-5.4 6.143-5.4 3.314 0 5.491 2.389 5.491 4.943 0 3.368-1.972 5.915-4.87 5.915-.978 0-1.898-.532-2.213-1.133l-.623 2.405c-.226.86-.835 1.94-1.243 2.598.937.29 1.93.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
        </svg>
      ), 
      bg: 'bg-red-500' 
    },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Disclaimer */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h4 className="font-bold text-gray-800 mb-4">Disclaimer:</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                All Trademarks and Logos are the property of their respective owners, depicted here purely for 
                representation purpose. Jobringer.com has taken all reasonable steps to ensure that information 
                on this site is genuine. Job Applicants are advised to evaluate independently. Jobringer.com 
                shall not have any responsibility in this regard. All Trademarks and Logos are the property of 
                their respective owners, depicted here purely for representation purpose. We are not associated 
                with any of them & use them for search assistance and to maximize the chances for the jobseekers 
                to get their dream job. All Job Seeker Database and Employment Opportunities are subject to 
                individual merit & evaluation. We do not guarantee any job to any jobseeker.
              </p>
            </div>
            
            <div className="flex flex-col items-center lg:items-end">
              <div className="mb-4">
                <span className="text-sm text-gray-600">Recognized By</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-500 font-bold text-lg">#</span>
                <span className="text-orange-500 font-bold">startupindia</span>
                <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                  <span className="text-orange-500 font-bold">🇮🇳</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-gray-700 font-medium mr-4">Follow us on</span>
          </div>
          <div className="flex justify-center space-x-3">
            {socialIcons.map((social, index) => (
              <div
                key={index}
                className={`w-10 h-10 ${social.bg} rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 hover:scale-110 transition-all duration-300 shadow-lg`}
                title={`Follow us on ${social.name}`}
              >
                <div className="text-white">
                  {social.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t pt-6">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600 mb-4">
            <a href="#" className="hover:text-blue-600 transition-colors">Terms and conditions</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Refund / Cancellation Policy</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">FAQ</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Blogs</a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-600">
            <p>© All Rights Reserved @ 2025 Jobtech Ventures Private Limited.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;