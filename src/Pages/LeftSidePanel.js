// LeftSidePanel.js
import React from "react";
import LeftSidePanelFooter from "./LeftSidePanelFooter";

function LeftSidePanel({ username }) {
  return (
    <div className="left-side-panel">
      <h3>{username}</h3>
      <div>
        <h3>Search</h3>
        <input type="text" placeholder="Search..." />
      </div>
      <div>
        <h3>Invoice Details</h3>
        {/* Your Invoice Details content */}
      </div>
      <div>
        <h3>Customer Details</h3>
        {/* Your Customer Details content */}
      </div>
      <div>
        <h3>Purchase Details</h3>
        {/* Your Purchase Details content */}
      </div>
      <div>
        <h3>Inventory Details</h3>
        {/* Your Inventory Details content */}
      </div>
      <div>
        <h3>Sale In & Sale Out Details</h3>
        {/* Your Sale In & Sale Out Details content */}
      </div>
      <div>
        <h3>Payment Details</h3>
        {/* Your Payment Details content */}
      </div>
      <LeftSidePanelFooter />
    </div>
  );
}

export default LeftSidePanel;
