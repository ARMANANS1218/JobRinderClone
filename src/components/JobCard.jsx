import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
      {/* In Office Badge */}
      {job.isInOffice && (
        <div className="inline-block bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded mb-4">
          In Office Job
        </div>
      )}

      {/* Job Title */}
      <h3 className="text-lg font-bold text-blue-600 mb-2 hover:text-blue-800 cursor-pointer">
        {job.title}
      </h3>

      {/* Company Name */}
      <p className="text-gray-800 font-medium mb-3">{job.company}</p>

      {/* Job Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{job.type}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span>{job.experience}</span>
        </div>

        <div className="flex items-start text-sm text-gray-600">
          <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="leading-tight">{job.location}</span>
        </div>
      </div>

      {/* Apply Button */}
      <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center">
        Apply
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default JobCard;