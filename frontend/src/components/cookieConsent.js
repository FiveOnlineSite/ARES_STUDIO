import React, { useState } from "react";

const CookieConsent = ({ onAccept }) => {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    // Store cookie consent in local storage
    localStorage.setItem("cookieConsent", "true");

    // Hide the popup
    setShowPopup(false);

    // Execute any additional actions on accept
    onAccept();
  };

  const handleClose = () => {
    // Hide the popup
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="cookie-consent">
        <p>
          We are a Full Cycle Art outsource studio. From Concepts to engine
          integration. We provide world's best selling games with beautiful and
          well-optimized game art. We are Unreal Engine Specialists.
        </p>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleClose}>Decline</button>
      </div>
    )
  );
};

export default CookieConsent;
