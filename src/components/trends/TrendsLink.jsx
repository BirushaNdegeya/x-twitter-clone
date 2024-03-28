import React from "react";
import { Link } from "react-router-dom";

/**
 * Trends Link UI Component
 * @returns {React.JSX.Element}
 */

const TrendsLink = () => {
   return (
      <footer className="flex flex-wrap gap-3 text-justify">
         <Link to="/" className="hover:cursor-pointer decoration-1 decoration-white">Term of Service</Link>
         <Link to="/" className="hover:cursor-pointer decoration-1 decoration-white">Privacy Policy</Link>
         <Link to="/" className="hover:cursor-pointer decoration-1 decoration-white">imprint</Link>
         <Link to="/" className="hover:cursor-pointer decoration-1 decoration-white">Ads info</Link>
         <Link to="/more" className="hover:cursor-pointer decoration-1 decoration-white">More ...</Link>
         <div>&copy; {new Date().getFullYear()} Tweeter, Inc.</div>
      </footer>
   );
};

export default TrendsLink;