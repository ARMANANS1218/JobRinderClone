import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: '41376',
      label: 'Jobs Posted',
      color: 'text-blue-600'
    },
    {
      number: '15153',
      label: 'Jobs Filled',
      color: 'text-green-600'
    },
    {
      number: '25785',
      label: 'Employers',
      color: 'text-purple-600'
    },
    {
      number: '1608908',
      label: 'Active Users',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl md:text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative Elements */}
        <div className="flex justify-end mt-8">
          <div className="flex space-x-2">
            <div className="w-4 h-16 bg-pink-400 rounded"></div>
            <div className="w-4 h-20 bg-red-400 rounded"></div>
            <div className="w-4 h-12 bg-pink-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;