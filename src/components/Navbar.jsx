import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageChanger from "./LanguageChanger";
import { useAppContext } from "../context/AppContext";
import Profile from "../pages/Profile";

// Search destinations data (could also be moved to a separate file)
const searchDestinations = [
  { name: "Bishnupur", path: "/bishupur" },
  { name: "Doars", path: "/doars" },
  { name: "Jhargram", path: "/jhargram" },
  { name: "Kankrajhor", path: "/kankrajhor" },
  { name: "Ayodha Pahar", path: "/AyodhaPahar" },
  { name: "Jaldapara National Park", path: "/jaldapara" },
  { name: "Sandakhpu", path: "/sandakhpu" },
  { name: "Kalimpong", path: "/kalimpong" },
  { name: "Purulia", path: "/purulia" },
  { name: "Kashmir", path: "/kashmir" },
  { name: "Delhi", path: "/delhi" },
  { name: "Paris", path: "/paris" },
  { name: "Kerala", path: "/kerala" },
  { name: "Andaman", path: "/andaman" },
  {name :"Digha" , Path : "/digha"}
];

const Navbar = () => {
  const { profileOpen, setProfileOpen, sidebarOpen, setSidebarOpen, userDetails, setUserDetails } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const sidebarItems = [
    t('navbar.sidebarItems.home'),
    t('navbar.sidebarItems.weather'),
    t('navbar.sidebarItems.map'),
    t('navbar.sidebarItems.booking'),
    t('navbar.sidebarItems.community'),
    t('navbar.sidebarItems.emergency'),
    t('navbar.sidebarItems.contact'),
  ];

  // Handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 0) {
      const results = searchDestinations.filter(destination =>
        destination.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      navigate(searchResults[0].path);
      setSearchQuery("");
      setShowResults(false);
    }
  };

  // Handle clicking on a search result
  const handleResultClick = (path) => {
    navigate(path);
     window.scrollTo(0, 0);
    setSearchQuery("");
    setShowResults(false);
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (showResults) {
        setShowResults(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showResults]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-gray-900 to-gray-800 fixed w-full h-16 top-0 z-50 backdrop-blur-md shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center space-x-4 ">
            {/* Hamburger */}
            <button
              className="relative w-8 h-8 focus:outline-none group"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label={t('navbar.menuToggle')}
            >
              <span
                className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out 
                ${sidebarOpen ? "top-1/2 transform -translate-y-1/2 rotate-45" : "top-1/4"}`}
              ></span>
              <span
                className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out 
                ${sidebarOpen ? "opacity-0" : "top-1/2 transform -translate-y-1/2"}`}
              ></span>
              <span
                className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out 
                ${sidebarOpen ? "top-1/2 transform -translate-y-1/2 -rotate-45" : "top-3/4"}`}
              ></span>
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="text-white text-2xl font-bold tracking-tight hover:text-cyan-400 transition-colors duration-300"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t("navbar.logoText")}
              </span>
            </Link>
          </div>

          {/* Right: Search + Auth/Profile */}
          <div className="flex items-center space-x-6">
            {/* Search bar (navbar always) */}
            <div className="relative hidden md:block">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder={t("navbar.searchPlaceholder")}
                  className="transition-all duration-300 ease-in-out
         w-64 h-10 px-4 pl-10 rounded-full 
         bg-gray-800 text-white placeholder-gray-400
         border border-white 
         hover:w-72 focus:w-80 
         focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 
         text-sm shadow-sm"
                  onClick={(e) => e.stopPropagation()}
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-cyan-400"
                  aria-label={t('navbar.searchButton')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
              
              {/* Search results dropdown */}
              {showResults && searchResults.length > 0 && (
                <div 
                  className="absolute top-12 left-0 right-0 bg-gray-800 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto border border-gray-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 hover:bg-gray-700 cursor-pointer text-white flex items-center"
                      onClick={() => handleResultClick(result.path)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{result.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Auth/Profile */}
            {user == null ? (
              <div className="flex gap-3">
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-md hover:shadow-cyan-500/20"
                >
                  {t("navbar.login")}
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold hover:bg-gray-100 transition shadow-md hover:shadow-white/20"
                >
                  {t("navbar.register")}
                </Link>
              </div>
            ) : (
              <button
                onClick={() => setProfileOpen(true)}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-200 shadow-md hover:shadow-cyan-400/30 relative"
                aria-label={t('navbar.profileButton')}
              >
                <img
                  src={userDetails?.avatarUrl}
                  alt={t('navbar.profileImageAlt')}
                  className="w-full h-full object-cover"
                />
                <p className="sm:hidden md:block">{userDetails?.name}</p>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-gray-900 to-gray-800 z-40 shadow-2xl
        transform transition-all duration-500 ease-in-out border-r border-gray-700
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 h-full flex flex-col justify-between">
          {/* Close button */}
          <button
            className="text-gray-300 self-end mb-6 transition-all duration-300 hover:scale-110 hover:text-cyan-400"
            onClick={() => setSidebarOpen(false)}
            aria-label={t('navbar.closeMenu')}
          >
            <FaTimes size={24} />
          </button>

          {/* Mobile search bar only */}
          <div className="md:hidden mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder={t("navbar.searchPlaceholder")}
                className="w-full h-10 px-4 pl-10 rounded-full bg-gray-800 text-white placeholder-gray-400
                  border border-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30
                  text-sm shadow-sm"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {/* Mobile search results */}
              {showResults && searchResults.length > 0 && (
                <div 
                  className="absolute top-12 left-0 right-0 bg-gray-800 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto border border-gray-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 hover:bg-gray-700 cursor-pointer text-white flex items-center"
                      onClick={() => handleResultClick(result.path)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{result.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Links */}
          <ul className="space-y-3 flex-1 overflow-y-auto">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className="transition-all duration-500 ease-out"
                style={{
                  transform: sidebarOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: sidebarOpen ? 1 : 0,
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <Link
                  to={user == null ? "/login" : `/${item.toLowerCase()}`}
                  className={`flex items-center px-4 py-3 rounded-lg 
                    hover:bg-gray-700/50 hover:text-cyan-400 transition-all duration-300
                    ${location.pathname === `/${item.toLowerCase()}` ? 
                      "bg-gray-700/50 text-cyan-400 font-semibold" : 
                      "text-gray-300"}`}
                  onClick={() =>  {
                    setSidebarOpen(false);
                    scroll(0,0)
                  }}
                >
                  <span className="flex-1 text-left">{item}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Changer */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <LanguageChanger />
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-30 transition-opacity duration-500 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Profile Slideout */}
      <Profile isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </>
  );
};

export default Navbar;