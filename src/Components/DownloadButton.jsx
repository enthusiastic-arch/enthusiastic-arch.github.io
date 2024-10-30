import React from "react";

const DownloadButton = () => {
  return (
    <a
      href='../assets/CV.pdf' 
      download="CV.pdf" 
      className="neno-button pink-500 hover:bg-pink-700 text-pink-500 border-2 hover:text-white border-pink-700 rounded-lg py-4 px-8 uppercase relative overflow-hidden">CV
    </a>
  );
};

export default DownloadButton;