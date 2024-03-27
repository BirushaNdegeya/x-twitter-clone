import React from "react";

/**
 * Page Title UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const PageTitle = ( { title } ) => {
   return (
      <h1 className="text-lg font-semibold">{title}</h1>
   );
};

export default PageTitle;