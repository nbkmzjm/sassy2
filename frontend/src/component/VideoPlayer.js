import React, { useState } from 'react';

export default function VideoPlayer(props) {
   const { src } = props;
   const [isPlaying, setIsPlaying] = useState(false);

   const togglePlay = () => {
      setIsPlaying(!isPlaying);
   };

   return (
      <div className="video-player">
         <video
            controls
            autoPlay={isPlaying}
            width="auto"
            height="auto"
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
         >
            <source src={src} type="video/mp4" />
         </video>
         <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
   );
}
