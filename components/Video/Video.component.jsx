import React from "react";

export const Video = ({ videoID }) => {
  const videoUrl = `https://youtube.com/embed/${videoID}?rel=0`;

  return (
    <div>
      <iframe
        src={videoUrl}
        width="800"
        height="450"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
