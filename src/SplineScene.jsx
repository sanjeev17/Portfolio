import React from 'react';

const SplineScene = ({ url }) => {
  return (
    <div className="w-full h-full">
      <iframe
        src={url}
        title="3D Spline Scene"
        className="w-full h-full border-none"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SplineScene;