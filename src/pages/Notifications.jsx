import React from "react";
import Header from "../components/header/Header";
import NotificationsFill from '../assets/icons/Notifications-Fill.svg';

/**
 * Notification Screen UI Component
 * @returns {React.JSX.Element}
 */

const Notifications = () => {
   return (
      <main role="main" className="main-container">
         <Header
            title="Notifications"
            imgURL={NotificationsFill}
         />
         <div className="p-4">
            <h1>Notifications Screen</h1>
         </div>
      </main>
   );
};

export default Notifications;