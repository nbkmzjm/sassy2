import React, { useEffect, useReducer } from 'react';
import { Button, Modal } from 'bootstrap';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';

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
   const [{ loading, error, images }, dispatch] = useReducer(reducer, {
      images: [],
      loading: true,
      error: '',
   });

   useEffect(() => {
      const fetchData = async () => {
         dispatch({ type: 'FETCH_REQUEST' });
         try {
            const imageRef = collection(db, 'images');
            const resultX = await getDocs(imageRef);

            const result = resultX.docs.map((doc) => ({
               ...doc.data(),
               id: doc.id,
            }));
            console.log(result);
            dispatch({ type: 'FETCH_SUCCESS', payload: result });
         } catch (error) {
            toast.error('Error fetching images');
            dispatch({ type: 'FETCH_FAIL', payload: error });
         }
      };
      fetchData();
   }, []);
   return (
      <div
         className="modal fade"
         id="exampleModal"
         tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
      >
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                     Modal title
                  </h5>
                  <button
                     type="button"
                     className="btn-close"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                  ></button>
               </div>
               <div className="modal-body">
                  <div className="container-fluid">
                     <div className="row">
                        {images.map((image, index) => (
                           <div key={index} className="col-md-4 mb-4">
                              <img
                                 src={image.imageUrl}
                                 className="img-fluid rounded"
                                 alt={`Image ${index + 1}`}
                              />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="modal-footer">
                  <button
                     type="button"
                     className="btn btn-secondary"
                     data-bs-dismiss="modal"
                  >
                     Close
                  </button>
                  <button type="button" className="btn btn-primary">
                     Save changes
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyModal;
