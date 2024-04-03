// HomePage.js

import React from "react";
import NavigationBar from "./NavigationBar";
import LeftSidePanel from "./LeftSidePanel";
import { useLocation } from "react-router-dom"; // Import useLocation

function HomePage() {
  const location = useLocation(); // Use useLocation hook to access location
  const username = location.state && location.state.username; // Extract username from location state

  return (
    <div className="home-container">
      <NavigationBar />
      <div className="content-container">
        <LeftSidePanel username={username} />
        <div className="main-content">
          {/* Your main content for the homepage goes here */}
          <h1>Welcome to the Homepage {username} </h1>
          <pre>
            Managing Inventory List, Delivery Details, Everything would Manage
            Effectively Here
          </pre>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
