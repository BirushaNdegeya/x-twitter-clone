import React from "react";
import Header from "../components/header/Header";
import NotificationsFill from '../assets/icons/Notifications-Fill.svg';

/**
 * Notification Screen UI Component
 * @returns {React.JSX.Element}
 */

const Notifications = () => {
   return (
      <main role="main" className="timeline">
         <Header 
            title="Notifications"
            imgURL={NotificationsFill}
         />
         <h1>Notifications Screen</h1>
      </main>
   );
};

export default Notifications;