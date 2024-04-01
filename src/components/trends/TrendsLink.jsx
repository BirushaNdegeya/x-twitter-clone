import React from "react";
import { Link } from "react-router-dom";

/**
 * Trends Link UI Component
 * @returns {React.JSX.Element}
 */

const TrendsLink = () => {
   return (
      <footer className="flex flex-wrap gap-3 text-justify">
         <Link to="/" className="hover:cursor-pointer hover:underline">Term of Service</Link>
         <Link to="/" className="hover:cursor-pointer hover:underline">Privacy Policy</Link>
         <Link to="/" className="hover:cursor-pointer hover:underline">imprint</Link>
         <Link to="/" className="hover:cursor-pointer hover:underline">Ads info</Link>
         <Link to="/more" className="hover:cursor-pointer hover:underline">More ...</Link>
         <div>&copy; {new Date().getFullYear()} Tweeter, Inc.</div>
      </footer>
   );
};

export default TrendsLink;