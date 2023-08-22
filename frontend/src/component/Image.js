import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { db } from '../configReact/firebase';
import MyModal from './Modal';
import { Store } from '../Store';
import VideoPlayer from './VideoPlayer';
import AutoPlayVideo from './AutoPlayVideo';
import { useInView } from 'react-intersection-observer';

export default function Image(props) {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { locationId, imgClassName } = props;
  console.log(imgClassName);
  console.log(locationId);
  const [image, setImage] = useState(null);
  const { userInfo } = state;
  const [ref, inView] = useInView({ triggerOnce: true });

  const imageChangeHandler = async () => {
    console.log('image click');
    if (userInfo) {
      ctxDispatch({ type: 'SET_IMAGE_ID', payload: locationId });
      var imageGalleryModal = new window.bootstrap.Modal(
        document.getElementById('exampleModal')
      );
      imageGalleryModal.show();
    }
  };
  const getImageSrc = () => {
    if (image && typeof image.contentType === 'string') {
      const contentType = image.contentType.substring(0, 5);
      console.log(contentType.substring(0, 5));
      if (contentType === 'image') {
        console.log('xxxxxxxxxxxxxxxxxxxx', image.contentType);

        return (
          <img
            src={image.imageUrl}
            width={props.width}
            height={props.height}
            alt="Select Picture"
            className={imgClassName}
            onClick={imageChangeHandler}
          />
        );
      } else if (contentType === 'video') {
        console.log(image);
        return (
          // <VideoPlayer
          //   showGallery={imageChangeHandler}
          //   src={image.imageUrl}
          // ></VideoPlayer>
          // <div className="video-player">
          //    <video
          //       controls
          //       muted
          //       autoPlay="true"
          //       width={props.width}
          //       height={props.height}
          //       loop
          //       onClick={imageChangeHandler}
          //    >
          //       <source src={image.imageUrl} type="video/mp4" />
          //       Your browser does not support the video tag.
          //    </video>
          // </div>

          // <div className="">
          //    <video
          //       ref={ref}
          //       controls
          //       autoPlay={true}
          //       width={props.width}
          //       height={props.height}
          //       muted={true}
          //       loop={true}
          //       onClick={imageChangeHandler}
          //    >
          //       <source src={image.imageUrl} type="video/mp4" />
          //    </video>

          // </div>

          <div className="video-player">
            <video
              autoPlay
              muted
              // controls
              width={props.width}
              height={props.height}
              loop
              playsInline
              className={imgClassName}
              onClick={imageChangeHandler}
            >
              <source
                src={image.imageUrl}
                // type="video/mp4"+
              />
              Your browser does not support the video tag.
            </video>
          </div>

          // <AutoPlayVideo src={image.imageUrl} />
        );
      }
    } else {
      return (
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/sassymc85.appspot.com/o/images%2FsassyLogo.jpeg?alt=media&token=571d12f3-54fa-44eb-9cc3-4ae77f188e74"
            alt="Select Picture"
            className={imgClassName}
            onClick={imageChangeHandler}
          />
        </div>
      );
    }
  };

  useEffect(() => {
    console.log('image effect run');
    const fetchData = async () => {
      try {
        const imageRef = doc(db, 'imageLocate', locationId);
        const imageSnap = await getDoc(imageRef);

        if (imageSnap.exists()) {
          console.log(imageSnap.data());
          setImage(imageSnap.data());
        } else {
          console.log('Image location is not found');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [locationId, state.imageLocationId]);
  return <div>{getImageSrc()}</div>;
}
