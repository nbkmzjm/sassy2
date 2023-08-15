import React, { useEffect, useRef, useState } from 'react';

import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../configReact/firebase';
import { toast } from 'react-toastify';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import MyModal from '../component/Modal';

export default function AdminSreen() {
   const [imageFile, setImageFile] = useState(null);
   const fileInputRef = useRef(null);

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
      await uploadBytes(storageRef, imageFile)
         .then((snapshot) => {
            console.log('Image uploaded successfully');
            // You can get the download URL of the uploaded image
            const contentType = snapshot.metadata.contentType;
            console.log('contentType:', contentType);
            getDownloadURL(snapshot.ref).then(async (downloadURL) => {
               console.log('Download URL:', downloadURL);
               try {
                  const imageRef = collection(db, 'images');
                  await addDoc(imageRef, {
                     name: imageFile.name,
                     imageUrl: downloadURL,
                     contentType: contentType,
                  });
                  console.log('image succesfully Added');
                  setImageFile(null);
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
            });
         })
         .catch((error) => {
            console.error('Error uploading image:', error);
         });
   };

   return (
      <div>
         <div>
            {console.log('component render...')}
            <input
               type="file"
               // style={{ display: 'none' }}
               onChange={handleFileChange}
               ref={fileInputRef}
            ></input>
            {imageFile && (
               <button className="btn btn-primary" onClick={uploadHandler}>
                  Upload
               </button>
            )}

            <button
               className="btn btn-primary ms-2"
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
