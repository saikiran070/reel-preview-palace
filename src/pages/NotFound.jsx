
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    console.log('Navigating back to home');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-400 mb-8">Oops! Page not found</p>
        <button 
          onClick={handleGoHome}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
