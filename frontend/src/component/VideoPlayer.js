import React, { useContext, useState } from 'react';
import { Store } from '../Store';

export default function VideoPlayer(props) {
  const { src, showGallery } = props;
  const [isPlaying, setIsPlaying] = useState(true);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-player">
      {console.log('video comp render:')}
      <video
        controls
        autoPlay={isPlaying}
        muted
        loop="true"
        width="250px"
        height="250px"
        // onPause={() => setIsPlaying(false)}
        // onPlay={() => setIsPlaying(true)}
        onClick={showGallery}
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button> */}
    </div>
  );
}
