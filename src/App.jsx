import React from "react";
import Header from "./components/Header";
import JobCard from "./components/JobCard";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const App = () => {
  const featuredJobs = [
    {
      title: "Senior Software Engineer",
      company: "RunCloud",
      type: "Full Time - Permanent",
      experience: "0 - 5 Years",
      location: "malaysia / Malaysia",
      isInOffice: true,
    },
    {
      title: "Senior Project Manager",
      company: "Canvendor",
      type: "Full Time - Permanent",
      experience: "5-0 Years",
      location: "New Mumbai / India",
      isInOffice: true,
    },
    {
      title: "Financial Analyst",
      company: "Sensia Global",
      type: "Full Time - Permanent",
      experience: "2 - 5 Years",
      location: "Pune / India",
      isInOffice: true,
    },
    {
      title: "Career Advisor",
      company: "Next Code Placement",
      type: "Full Time - Permanent",
      experience: "1 - 2 Years",
      location: "Ahmedabad / India",
      isInOffice: true,
    },
  ];

 const employers = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
  },
  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Adobe_Corporate_Logo.png",
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
  {
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
  },
];

  const jobCategories = [
    "#Fresher",
    "#Work From Home",
    "#WFH",
    "#IT",
    "#Sales",
    "#BPO",
    "#KPO",
    "#HR",
    "#BFSI",
    "#Finance",
    "#Accounts",
    "#Medical",
    "#Pharma",
    "#Manager",
    "#Developer",
    "#Marketing",
    "#Engineering",
    "#Non Government Jobs",
  ];

  const indianCities = [
    "#Mumbai",
    "#Delhi",
    "#Ajmer",
    "#Pune",
    "#Hyderabad",
    "#Agra",
    "#Chennai",
    "#Kolkata",
    "#Indore",
    "#Gurugram",
    "#Jaipur",
    "#Ahmedabad",
  ];

  const internationalLocations = [
    "#Africa",
    "#USA",
    "#UK",
    "#Australia",
    "#Canada",
    "#Singapore",
    "#Dubai",
    "#Saudi Arabia",
    "#New Zealand",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-400 to-teal-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              BRINGING YOU THE PERFECT JOB !
            </h1>
            <p className="text-white text-lg">
              11,000+ <span className="font-semibold">JOBS to Apply</span>
            </p>
          </div>

          {/* Search Section */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
            <div className="flex flex-col md:flex-row gap-2 w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search Jobs Now"
                className="flex-1 px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md transition-colors">
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition-colors">
              View Jobs
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md transition-colors">
              Register For FREE
            </button>
          </div>

          {/* Quick Job Search Tags */}
          <div className="mt-6">
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-white font-semibold mr-4">
                Quick Job Search
              </h3>
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {jobCategories.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm hover:bg-opacity-30 cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Featured <span className="text-blue-600">Jobs</span>
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {featuredJobs.map((job, index) => (
              <SwiperSlide key={index}>
                <JobCard job={job} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-md">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-md">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Featured Employers Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
        {employers.map((employer, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
              <img
                src={employer.logo}
                alt={employer.name}
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/logos/default.png"; // fallback if logo doesn't load
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile App Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                APPLY TO JOBS ON-THE-GO
              </h2>
              <h3 className="text-xl text-blue-600 font-semibold mb-6">
                Jobringer Mobile App
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-gray-800 transition-colors">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-black font-bold">▶</span>
                  </div>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>

                <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-gray-800 transition-colors">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-black font-bold">🍎</span>
                  </div>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </div>

              <div className="text-xl">
                Mobile App{" "}
                <span className="text-blue-600 font-bold">Download</span>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-80 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-white text-center">
                    <div className="text-lg font-bold mb-2">Recruit Smart</div>
                    <div className="text-lg font-bold">Recruit Right</div>
                  </div>
                </div>
                <div className="absolute -right-8 top-8 w-48 h-64 bg-gray-800 rounded-2xl shadow-xl opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Location Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">JOBS IN INDIA</h3>
              <div className="flex flex-wrap gap-2">
                {indianCities.map((city, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-2 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition-colors"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">INTERNATIONAL JOBS</h3>
              <div className="flex flex-wrap gap-2">
                {internationalLocations.map((location, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-2 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition-colors"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Stats />
      <Footer />
    </div>
  );
};

export default App;
