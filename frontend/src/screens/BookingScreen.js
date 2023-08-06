import React from 'react';

export default function BookingScreen() {
   return (
      <div className="booking">
         <div className="d-flex justify-content-center mt-1">
            <div>SELECT SERVICES IN MENU BELOW AND START BOOKING</div>
         </div>
         <div class="embedded-website">
            <iframe
               src="https://zota.zbook.us/sassy11435_booking/"
               frameborder="0"
               width="100%"
               height="750"
            ></iframe>
         </div>
      </div>
   );
}
