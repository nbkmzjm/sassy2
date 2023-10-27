import React, { useEffect, useRef, useState } from 'react';

import {
   addDoc,
   collection,
   getDocs,
   query,
   serverTimestamp,
   where,
} from 'firebase/firestore';
import { db, storage } from '../configReact/firebase';
import { toast } from 'react-toastify';
import {
   getDownloadURL,
   ref,
   uploadBytes,
   uploadBytesResumable,
} from 'firebase/storage';
import MyModal from '../component/Modal';

export default function AdminSreen() {
   const [imageFile, setImageFile] = useState(null);
   const fileInputRef = useRef(null);
   const [progress, setProgress] = useState(0);
   const progressBarStyle = {
      width: `${progress}%`,
   };
   const handleFileChange = async (e) => {
      const file = e.target.files[0];
      setImageFile(file);
   };

   const showImageHandler = () => {
      var imageGalleryModal = new window.bootstrap.Modal(
         document.getElementById('exampleModal')
      );
      imageGalleryModal.show();
   };

   const uploadHandler = async () => {
      console.log('adding images');
      if (!imageFile) return;
      const storageRef = ref(storage, 'images/' + imageFile.name);

      const filesRef = collection(db, 'images');
      const q = query(filesRef, where('name', '==', imageFile.name));
      getDocs(q).then((snapshot) => {
         if (snapshot.empty) {
            const uploadTask = uploadBytesResumable(storageRef, imageFile);
            uploadTask.on(
               'state_changed',
               (snapshot) => {
                  const uploadProgress = Math.round(
                     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  );
                  setProgress(uploadProgress);
               },
               (error) => {
                  console.error('Error uploading file:', error);
               },
               async () => {
                  console.log('File uploaded successfully');
                  const downloadURL = await getDownloadURL(
                     uploadTask.snapshot.ref
                  );
                  console.log('File download URL:', downloadURL);

                  console.log('Image uploaded successfully');
                  // You can get the download URL of the uploaded image
                  const contentType = uploadTask.snapshot.metadata.contentType;
                  console.log('contentType:', contentType);
                  getDownloadURL(uploadTask.snapshot.ref).then(
                     async (downloadURL) => {
                        console.log('Download URL:', downloadURL);
                        try {
                           const imageRef = collection(db, 'images');
                           await addDoc(imageRef, {
                              name: imageFile.name,
                              imageUrl: downloadURL,
                              contentType: contentType,
                              createdAt: serverTimestamp(),
                           });
                           console.log('image succesfully Added');
                           setImageFile(null);
                           setProgress(0);
                           if (fileInputRef.current) {
                              fileInputRef.current.value = '';
                           }
                           var imageGalleryModal = new window.bootstrap.Modal(
                              document.getElementById('exampleModal')
                           );
                           imageGalleryModal.show();
                        } catch (error) {
                           console.log(error);
                           toast.error('Image is not added');
                        }
                     }
                  );
               }
            );
         } else {
            toast.error(
               'File with the same name already exists. Please rename file and retry'
            );
         }
      });

      // await uploadBytes(storageRef, imageFile)
      //    .then((snapshot) => {
      //       console.log('Image uploaded successfully');
      //       // You can get the download URL of the uploaded image
      //       const contentType = snapshot.metadata.contentType;
      //       console.log('contentType:', contentType);
      //       getDownloadURL(snapshot.ref).then(async (downloadURL) => {
      //          console.log('Download URL:', downloadURL);
      //          try {
      //             const imageRef = collection(db, 'images');
      //             await addDoc(imageRef, {
      //                name: imageFile.name,
      //                imageUrl: downloadURL,
      //                contentType: contentType,
      //             });
      //             console.log('image succesfully Added');
      //             setImageFile(null);
      //             if (fileInputRef.current) {
      //                fileInputRef.current.value = '';
      //             }
      //             var imageGalleryModal = new window.bootstrap.Modal(
      //                document.getElementById('exampleModal')
      //             );
      //             imageGalleryModal.show();
      //          } catch (error) {
      //             console.log(error);
      //             toast.error('Image is not added');
      //          }
      //       });
      //    })
      //    .catch((error) => {
      //       console.error('Error uploading image:', error);
      //    });
   };

   return (
      <div>
         <div>
            {console.log('component render...')}
            <div className="m-2">
               <input
                  type="file"
                  // style={{ display: 'none' }}
                  onChange={handleFileChange}
                  ref={fileInputRef}
               ></input>
            </div>
            {imageFile && (
               <button className="btn btn-primary" onClick={uploadHandler}>
                  Upload
               </button>
            )}

            {progress > 0 && (
               <div class="progress m-2">
                  <div
                     class="progress-bar"
                     role="progressbar"
                     style={progressBarStyle}
                     aria-valuenow="25"
                     aria-valuemin="0"
                     aria-valuemax="100"
                  >
                     {progress}%
                  </div>
               </div>
            )}
            <button
               className="btn btn-primary m-2"
               onClick={showImageHandler}
               // data-bs-toggle="modal"
               // data-bs-target="#exampleModal"
            >
               Show Image Gallery
            </button>
         </div>
      </div>
   );
}
