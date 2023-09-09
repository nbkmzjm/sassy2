import { logEvent } from 'firebase/analytics';
import React from 'react';
import { analytics } from '../configReact/firebase';

const SocialIcons = () => {
   const facebookSocialLinkClick = () => {
      console.log('Facebook Icon Click');
      logEvent(analytics, 'Facebook Icon Click', {
         name: 'Facebook Click',
      });
   };
   const InstagramSocialLinkClick = () => {
      console.log('Instagram Icon Click');
      logEvent(analytics, 'Instagram Icon Click', {
         name: 'Instagram Click',
      });
   };
   const googleSocialLinkClick = () => {
      console.log('Google Icon Click');
      logEvent(analytics, 'Google Icon Click', {
         name: 'Google Click',
      });
   };
   return (
      <div className="social-icons">
         <a
            href="https://www.facebook.com/sassynailsandspamc85"
            target="_blank"
            rel="noopener noreferrer"
            onClick={facebookSocialLinkClick}
         >
            <i className="fab fa-facebook"></i>
         </a>
         <a
            href="https://instagram.com/sassynails_mc85?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
            onClick={InstagramSocialLinkClick}
         >
            <i className="fab fa-instagram"></i>
         </a>
         <a
            href="https://goo.gl/maps/5Gbh7edioygNQaeP7"
            target="_blank"
            rel="noopener noreferrer"
            onClick={googleSocialLinkClick}
         >
            <i className="fab fa-google"></i>
         </a>
         {/* <a
            href="https://www.yelp.com/biz/sassy-nails-and-spa-mc85-avondale"
            target="_blank"
            rel="noopener noreferrer"
         >
            <i className="fab fa-yelp"></i>
         </a> */}
      </div>
   );
};

export default SocialIcons;
