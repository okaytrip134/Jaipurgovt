import React from "react";


export default function Loader() {
  return (
    <div className="loader-container">
      <img 
        src="/Loader.webp" 
        alt="Loading" 
        className="loader-img"
      />
      <h2 className="blink-text text-2xl">पधारो सा...</h2>
    </div>
  );
}
