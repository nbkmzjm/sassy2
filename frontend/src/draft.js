{
   images.map((image, index) => (
      <div key={index} className="col-6 col-lg-3 mb-4">
         <i
            className="fa-solid fa-rectangle-xmark"
            onClick={() => deleteMedia(image)}
         ></i>

         {image.contentType === 'image/jpeg' && viewImage ? (
            <img
               src={image.imageUrl}
               className="img-fluid rounded"
               alt={`Image ${index + 1}`}
               onClick={() => imageSelectedHandler(image)}
            />
         ) : (
            <div className="video-container">
               <video
                  autoPlay
                  width="640"
                  height="360"
                  loop
                  onClick={() => imageSelectedHandler(image)}
               >
                  <source
                     src={image.imageUrl}
                     // type="video/mp4"+
                  />
                  Your browser does not support the video tag.
               </video>
            </div>
         )}
      </div>
   ));
}
/////////////////////////////////////////////////
import React, { useState } from 'react';

const App = () => {
   const [selectedCategories, setSelectedCategories] = useState([]);

   const categories = [
      'Electronics',
      'Clothing',
      'Books',
      'Home Decor',
      // Add more categories here...
   ];

   const handleCategoryToggle = (category) => {
      if (selectedCategories.includes(category)) {
         setSelectedCategories(
            selectedCategories.filter((item) => item !== category)
         );
      } else {
         setSelectedCategories([...selectedCategories, category]);
      }
   };

   return (
      <div>
         <h1>Select Categories</h1>
         <div>
            {categories.map((category, index) => (
               <button
                  key={index}
                  onClick={() => handleCategoryToggle(category)}
                  style={{
                     backgroundColor: selectedCategories.includes(category)
                        ? 'lightblue'
                        : 'white',
                  }}
               >
                  {category}
               </button>
            ))}
         </div>
         <div>
            <h2>Selected Categories:</h2>
            <ul>
               {selectedCategories.map((category, index) => (
                  <li key={index}>{category}</li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default App;

///////////////////////////////////////////

<div className="row">
   {viewImage &&
      imageItems &&
      imageItems.map((image, index) => (
         <div key={index} className="col-6 col-lg-3 mb-4">
            <i
               className="fa-solid fa-rectangle-xmark"
               onClick={() => deleteMedia(image)}
            ></i>
            <img
               src={image.imageUrl}
               className="img-fluid rounded"
               alt={`Image ${index + 1}`}
               onClick={() => imageSelectedHandler(image)}
            />
         </div>
      ))}

   {viewVideo &&
      videoItems &&
      videoItems.map((video, index) => (
         <div key={index} className="col-6 col-lg-3 mb-4">
            <i
               className="fa-solid fa-rectangle-xmark"
               onClick={() => deleteMedia(video)}
            ></i>
            <div className="video-container">
               <video
                  autoPlay
                  width="640"
                  height="360"
                  loop
                  onClick={() => imageSelectedHandler(video)}
               >
                  <source
                     src={video.imageUrl}
                     // type="video/mp4"+
                  />
                  Your browser does not support the video tag.
               </video>
            </div>
         </div>
      ))}
</div>;
