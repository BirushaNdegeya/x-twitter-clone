import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';


const App = () => {
   return (
      <React.Fragment>
         <h1>X | Twitter Clone</h1>
      </React.Fragment>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
      <App />
   </StrictMode>
);