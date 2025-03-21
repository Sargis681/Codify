import React from "react";
import "./BackgroundVideo.scss";

const BackgroundVideo = () => {
  return (
    <div className="relative background-overlay" style={{ backgroundImage: "url('/images/fallback.jpg')" }}>
      <video className="absolute w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;