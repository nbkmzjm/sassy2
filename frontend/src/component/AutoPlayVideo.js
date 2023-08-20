// import React, { useRef, useState } from 'react';
// import { useInView } from 'react-intersection-observer';

// const AutoPlayVideo = ({ src }) => {
//    console.log(src, 'srcccccccccccccccccccccc');
//    const [playing, setPlaying] = useState(false);
//    const videoRef = useRef();
//    const { ref, inView } = useInView();

//    // When the element is in view, start playing the video
//    if (inView && !playing) {
//       setPlaying(true);
//       videoRef.current.play();
//    }

//    return (
//       <div ref={ref}>
//          <video
//             ref={videoRef}
//             controls
//             muted
//             autoPlay={playing}
//             height="400"
//             width="400"
//             src={src}
//          >
//             Your browser does not support the video tag.
//          </video>
//       </div>
//    );
// };

// export default AutoPlayVideo;

import React from 'react';
import { useInView } from 'react-intersection-observer';

const AutoplayVideo = ({ src }) => {
   const [ref, inView] = useInView({ triggerOnce: true });

   return <div> </div>;
};

export default AutoplayVideo;
