import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Button, Modal } from 'bootstrap';
import {
   collection,
   deleteDoc,
   doc,
   getDoc,
   getDocs,
   onSnapshot,
   setDoc,
} from 'firebase/firestore';
import { db, storage } from '../configReact/firebase';
import { toast } from 'react-toastify';
import { Store } from '../Store';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingBox from './LoadingBox';
import { getError } from './Utils';
import { deleteObject, ref } from 'firebase/storage';

const reducer = (state, action) => {
   switch (action.type) {
      case 'FETCH_REQUEST':
         return { ...state, loading: true };
      case 'FETCH_SUCCESS':
         return { ...state, images: action.payload, loading: false };
      case 'FETCH_FAIL':
         return { ...state, error: action.payload, loading: false };
   }
};

const MyModal = () => {
   const navigate = useNavigate();
   const { state, dispatch: ctxDispatch } = useContext(Store);
   const imageSelectedHandler = (image) => {
      console.log('image selected:', image);
      ctxDispatch({ type: 'SELECT_IMAGE', payload: image });
      console.log(state);
   };

   // const [viewVideo, setViewVideo] = useState(false);
   // const [viewImage, setViewImage] = useState(true);

   const [selectedMediaTypes, setSelectedMediaTypes] = useState([
      'Image',
      'Video',
   ]);
   const mediaTypes = ['Image', 'Video'];
   const toggleMedia = (selectMediaType) => {
      if (selectedMediaTypes.includes(selectMediaType)) {
         setSelectedMediaTypes(
            selectedMediaTypes.filter((item) => item !== selectMediaType)
         );

         console.log(mediaTypes, ':::::::::::', selectMediaType);
      } else {
         setSelectedMediaTypes([...selectedMediaTypes, selectMediaType]);
         console.log(mediaTypes, ':::::::::::else', selectMediaType);
      }
      // setViewImage(!viewImage);
      // setViewVideo(false);
   };

   const saveImageChangeHandler = async () => {
      console.log('saving image changes');
      console.log(images);
      try {
         const docRef = doc(db, 'imageLocate', state.imageLocationId);
         await setDoc(docRef, {
            name: state.imageSelected.name,
            imageUrl: state.imageSelected.imageUrl,
            contentType: state.imageSelected.contentType,
         });
         ctxDispatch({ type: 'SET_IMAGE_ID', payload: '' });
      } catch (error) {
         console.log(error);
         toast.error('Select image cannot be set');
      }
   };
   const [data, setData] = useState([]);
   const [{ loading, error, images }, dispatch] = useReducer(reducer, {
      images: [],
      loading: true,
      error: '',
   });
   console.log('modal initialize');

   const imageItems = images.filter(
      (item) => item.contentType.substring(0, 5) === 'image'
   );
   const videoItems = images.filter(
      (item) => item.contentType.substring(0, 5) === 'video'
   );

   const deleteMedia = async (image) => {
      const filePath = 'images/' + image.name; // Replace with the actual path of the file

      // Get a reference to the file
      const fileRef = ref(storage, filePath);

      // Delete the file
      await deleteObject(fileRef)
         .then(async () => {
            console.log('File deleted successfully');
            try {
               await deleteDoc(doc(db, 'images', image.id));
            } catch (error) {
               toast.error('Cannot delete this media!');
               console.log(error);
            }
         })
         .catch((error) => {
            console.error('Error deleting file:', error);
         });
   };
   useEffect(() => {
      console.log('modal effect run');
      // const fetchData = async () => {
      //    dispatch({ type: 'FETCH_REQUEST' });
      //    try {
      //       const imageRef = collection(db, 'images');
      //       const resultX = await getDocs(imageRef);

      //       const result = resultX.docs.map((doc) => ({
      //          ...doc.data(),
      //          id: doc.id,
      //       }));
      //       console.log(result);
      //       dispatch({ type: 'FETCH_SUCCESS', payload: result });
      //    } catch (error) {
      //       toast.error('Error fetching images');
      //       dispatch({ type: 'FETCH_FAIL', payload: error });
      //    }
      // };
      // fetchData();

      //  const fetchImage = async()=>{
      const unsubcribe = onSnapshot(collection(db, 'images'), (snapshot) => {
         console.log('realtime data updating');
         dispatch({ type: 'FETCH_REQUEST' });
         try {
            const updatedImages = snapshot.docs.map((doc) => ({
               id: doc.id,
               ...doc.data(),
            }));
            dispatch({ type: 'FETCH_SUCCESS', payload: updatedImages });
         } catch (error) {
            dispatch({ type: 'FETCH_FAIL', payload: getError(error.message) });
         }
      });
      return () => {
         console.log('unmount listerner');
         unsubcribe();
      };
      // fetchImage
   }, []);
   return (
      <div
         className="modal fade"
         id="exampleModal"
         tabIndex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
      >
         {console.log('modal render')}
         <div className="modal-dialog modal-dialog-scrollable modal-xl">
            <div className="modal-content">
               <div className="bd-highlight modal-header ">
                  {/* <h5 className="modal-title" id="exampleModal">
                     Modal title
                  </h5> */}
                  {/* <button
                     type="button"
                     className="btn btn-secondary modal-header__closex"
                     data-bs-dismiss="modal"
                  >
                     Close
                  </button> */}
                  {mediaTypes.map((item, index) => (
                     <button
                        className="btn btn-info mx-1"
                        key={index}
                        onClick={() => toggleMedia(item)}
                        style={{
                           backgroundColor: selectedMediaTypes.includes(item)
                              ? 'lightblue'
                              : 'grey',
                        }}
                     >
                        {item}
                     </button>
                  ))}

                  <button
                     type="button"
                     className="btn btn-primary ms-auto"
                     onClick={saveImageChangeHandler}
                     data-bs-dismiss="modal"
                  >
                     Save
                  </button>
                  <button
                     type="button"
                     className="btn-close"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                  ></button>
               </div>
               <div className="modal-body">
                  <div className="container-fluid">
                     {loading ? (
                        <LoadingBox />
                     ) : error ? (
                        toast.error(error)
                     ) : (
                        <div className="row">
                           {selectedMediaTypes.includes('Image') &&
                              imageItems.map((image, index) => (
                                 <div
                                    key={index}
                                    className="col-6 col-lg-3 mb-4"
                                 >
                                    <i
                                       className="fa-solid fa-rectangle-xmark"
                                       onClick={() => deleteMedia(image)}
                                    ></i>
                                    <img
                                       src={image.imageUrl}
                                       className="img-fluid rounded"
                                       alt={`Image ${index + 1}`}
                                       onClick={() =>
                                          imageSelectedHandler(image)
                                       }
                                    />
                                 </div>
                              ))}

                           {selectedMediaTypes.includes('Video') &&
                              videoItems.map((video, index) => (
                                 <div
                                    key={index}
                                    className="col-6 col-lg-3 mb-4"
                                 >
                                    <i
                                       className="fa-solid fa-rectangle-xmark"
                                       onClick={() => deleteMedia(video)}
                                    ></i>
                                    <div className="video-container">
                                       <video
                                          autoPlay
                                          muted
                                          width="400px"
                                          height="400px"
                                          loop
                                          playsInline
                                          onClick={() =>
                                             imageSelectedHandler(video)
                                          }
                                       >
                                          <source
                                             src={video.imageUrl}
                                             // type="video/mp4"+
                                          />
                                          Your browser does not support the
                                          video tag.
                                       </video>
                                    </div>
                                 </div>
                              ))}
                        </div>
                     )}
                  </div>
               </div>
               <div className="modal-footer"></div>
            </div>
         </div>
      </div>
   );
};
// image/jpeg
// video/mp4
export default MyModal;

{
   /* <div>
   {image.contentType == 'image/jpeg' ? (
      <img
         src={getImageSrc()}
         // src="https://i5.walmartimages.com/asr/0ec1b72b-a123-48ff-bf98-6da928961de7.18a7b7de3003eeecd8db166e91532cae.jpeg"
         alt="Select Picture"
         className={imgClassName}
         onClick={imageChangeHandler}
      />
   ) : image.contentType == 'image/jpeg' ? (
      <div className="video-container">
         <video controls width="640" height="360" loop>
            <source src={getImageSrc()} type="video/mp4" />
            Your browser does not support the video tag.
         </video>
      </div>
   ) : (
      <div>Your browser does not support this content</div>
   )}

   {console.log('image component render')}

   {console.log(image)}
</div>; */
}
