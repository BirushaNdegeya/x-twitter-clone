import React from "react";
import { Link } from "react-router-dom";

/**
 * Trends Link UI Component
 * @returns {React.JSX.Element}
 */

const TrendsLink = () => {
   return (
      <footer>
         <Link to="/">Term of Service</Link>
         <Link to="/">Privacy Policy</Link>
         <Link to="/">imprint</Link>
         <Link to="/">Ads info</Link>
         <Link to="/more">More ...</Link>
         <div>&copy; {new Date().getFullYear()} Tweeter, Inc.</div>
      </footer>
   );
};

export default TrendsLink;