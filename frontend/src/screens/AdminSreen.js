import React, { useState } from 'react';

import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../config/firebase';
import { toast } from 'react-toastify';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import MyModal from '../component/Modal';

export default function AdminSreen() {
   const [imageFile, setImageFile] = useState(null);

   const handleFileChange = (e) => {
      const file = e.target.files[0];
      setImageFile(file);
   };

   const showImageHandler = () => {};

   const uploadHandler = async () => {
      console.log('adding images');
      if (!imageFile) return;
      setImageFile(null);

      const storageRef = ref(storage, 'images/' + imageFile.name);

      uploadBytes(storageRef, imageFile)
         .then((snapshot) => {
            console.log('Image uploaded successfully');
            // You can get the download URL of the uploaded image
            getDownloadURL(snapshot.ref).then(async (downloadURL) => {
               console.log('Download URL:', downloadURL);
               try {
                  const imageRef = collection(db, 'images');
                  await addDoc(imageRef, {
                     name: imageFile.name,
                     imageUrl: downloadURL,
                  });
                  console.log('image succesfully Added');
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
            <input type="file" onChange={handleFileChange}></input>
            <button className="btn btn-primary" onClick={uploadHandler}>
               Upload
            </button>
            <button
               className="btn btn-primary"
               onClick={showImageHandler}
               data-bs-toggle="modal"
               data-bs-target="#exampleModal"
            >
               Show Image Gallery
            </button>
            <MyModal />
         </div>
      </div>
   );
}
