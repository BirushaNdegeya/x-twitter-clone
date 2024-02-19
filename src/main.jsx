import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";


const App = () => {
   return (
      <React.Fragment>
         <Home />
      </React.Fragment>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
      <App />
   </StrictMode>
);