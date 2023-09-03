import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuItem from '../component/MenuItem';
import data from '../asset/data.js';
import Image from '../component/Image';

export default function ServicesScreen() {
   const menuItems1 = data.menuItems1;
   const menuItems2 = data.menuItems2;

   const location = useLocation();

   useEffect(() => {
      if (location.hash) {
         const scrollToElement = document.querySelector(location.hash);
         if (scrollToElement) {
            scrollToElement.scrollIntoView({ behavior: 'smooth' });
         }
      }
   }, [location.hash]);

   return (
      <div>
         <div
            id="pediMenu"
            className="d-flex align-items-center justify-content-center pedicure-label"
            style={{ height: '200px' }}
         >
            <p style={{ zIndex: 2 }}>PEDICURE</p>
         </div>
         <div className="container pedicure-menu ">
            <div className="row align-items-center pb-3 mb-3 border-bottom border-info-subtle">
               <div className="col-3">
                  {/* <img
                     src={require('../asset/picture/pedicure.webp')}
                     alt=""
                     className="img-thumbnail pedicure-img"
                  /> */}
                  <Image
                     locationId="pediMenu1"
                     imgClassName="img-fluid mt-5 img-thumbnail pedicure-img"
                  ></Image>
               </div>
               <div className="col-8">
                  <div className="d-flex justify-content-between service-title">
                     <Link to="/booking" className="link-no-decoration ">
                        SASSY JELLY SPECIAL PEDI
                     </Link>{' '}
                     <span>$80+</span>
                  </div>
                  Enjoy the wonders of translucent, heated-contained jelly that
                  soothes and softens the skin. It's the ultimate stress
                  reliever and muscle relaxant! This procedure includes a callus
                  treatment followed by a natural extract exfoliation sugar
                  scrub with a sensational finish. The treatment will also be
                  complemented with a foot mask, hot towel wrap, and warm
                  paraffin wax wrap for the full experience of relaxation. This
                  treatment will conclude with a soothing hot stone massage
                  utilizing lotion and oil. <br></br>
                  <strong>
                     Scents: Rosemary, Ylang Ylang, Champagne Hour, Yes To Rose.
                  </strong>
               </div>
            </div>
            <div className="row align-items-center pb-3 mb-3 border-bottom border-info-subtle">
               {/* <div className="col-1"></div> */}
               <div className="col-3">
                  <Image
                     locationId="pediMenu2"
                     imgClassName="img-fluid mt-5 img-thumbnail pedicure-img"
                  ></Image>
               </div>
               <div className="col-8">
                  <div className="d-flex justify-content-between service-title">
                     <Link to="/booking" className="link-no-decoration ">
                        SASSY "VOLCANIC" COLLAGEN PEDI
                     </Link>{' '}
                     <span>$75+</span>
                  </div>
                  Experience the luxurious wonders of our collagen-packed foot
                  pedicure for a refreshing feeling to the feet. Expect to
                  witness a spectacular "Volcanic Eruption filled with
                  sensational aromas to release into the air. This "Volcanic"
                  Pedicure consists of 'igneous spa crystals, a citrusy sugar
                  scrub followed by a callus treatment with paraffin wax. This
                  treatment will conclude with a soothing hot stone massage
                  utilizing lotion and oil.<br></br>
                  <strong>
                     Scents: Honey Pearl, Romance, Tropical Citrus, & Green Tea
                     + Aloe Vera
                  </strong>
               </div>
            </div>
            <div className="row align-items-center pb-3 mb-3 border-bottom border-info-subtle">
               <div className="col-3">
                  <Image
                     locationId="pediMenu3"
                     imgClassName="img-fluid mt-5 img-thumbnail pedicure-img"
                  ></Image>
               </div>
               <div className="col-8">
                  <div className="d-flex justify-content-between service-title">
                     <Link to="/booking" className="link-no-decoration ">
                        SASSY DELUXE SPA PEDI
                     </Link>{' '}
                     <span>$65+</span>
                  </div>
                  Our deluxe pedicure assisted with the BCL Spa 4-Step System.
                  The 4-Step pedicure system thoroughly moisturizes and
                  refreshes the feet while healing its damages. Indulge your
                  feet in the pragmatic footbath and relax with a citrusy sugar
                  scrub, hot towel wrap, and warm paraffin wax wrap, tollowed by
                  a hot stone massage utilizing lotion and 01.<br></br>{' '}
                  <strong>
                     Scents: Grapefruit, Milk + Honey, Mango + Mandarin,
                     Lemongrass + Green Lea
                  </strong>
               </div>
            </div>
            <div className="row align-items-center pb-3 mb-3 border-bottom border-info-subtle">
               {/* <div className="col-1"></div> */}
               <div className="col-3">
                  <Image
                     locationId="pediMenu4"
                     imgClassName="img-fluid mt-5 img-thumbnail pedicure-img"
                  ></Image>
               </div>
               <div className="col-8">
                  <div className="d-flex justify-content-between service-title">
                     <Link to="/booking" className="link-no-decoration ">
                        SASSY GEL PEDI
                     </Link>{' '}
                     <span>$55+</span>
                  </div>
                  An extension of our "Sassy Deluxe Spa Pedicure. This service
                  consists of a citrusy sugar scrub, and callus treatment
                  followed by a hot stone massage utilizing lotion and oil.
                  Customers will also have the option to select from a variety
                  of gel colors for their toes. <br></br>
                  <strong>Scents: Orange, Lemon, Jasmine, & Lemongrass</strong>
               </div>
            </div>
            <div className="row align-items-center pb-3 mb-3 border-bottom border-info-subtle">
               <div className="col-3">
                  <Image
                     locationId="pediMenu5"
                     imgClassName="img-fluid mt-5 img-thumbnail pedicure-img"
                  ></Image>
               </div>
               <div className="col-8">
                  <div className="d-flex justify-content-between service-title">
                     <Link to="/booking" className="link-no-decoration ">
                        SASSY SIGNATURE SPA PEDI
                     </Link>{' '}
                     <span>$45+</span>
                  </div>
                  Our signature pedicure relieves stress and rejuvenates worn
                  feet. This service starts with an exfoliating sugar scrub, and
                  callus treatment followed by a hot stone massage utilizing
                  lotion, oil, and cooling gel. Customers will have the option
                  to select from a variety of colors concluding their pedicure.
                  <br></br>
                  <strong>Scents: Orange, Lemon, Jasmine, & Lemongrass</strong>
               </div>
            </div>
            <div className="row align-items-center pb-3 mb-3 border-bottom border-info-subtle">
               {/* <div className="col-1"></div> */}

               <div className="col-3">
                  <Image
                     locationId="pediMenu6"
                     imgClassName="img-fluid mt-5 img-thumbnail pedicure-img"
                  ></Image>
               </div>
               <div className="col-8">
                  <div className="d-flex justify-content-between service-title">
                     <Link to="/booking" className="link-no-decoration ">
                        SASSY HOT STONE SPA PEDI
                     </Link>{' '}
                     <span>$38+</span>
                  </div>
                  Treat your feet with our soothing and relaxing hot stone
                  treatment. This service consists of extoliating sugar scrub,
                  followed by a hot stone massage utilizing lotion, oil, and
                  cooling gel. Customers will have the option to select from a
                  variety of colors concluding their pedicure.
               </div>
            </div>

            <div className="row align-items-center pb-3 mb-3 border-bottom border-info-subtle">
               {/* <div className="col-1"></div> */}

               <div className="col-3">
                  <Image
                     locationId="pediMenu7"
                     imgClassName="img-fluid mt-5 img-thumbnail pedicure-img"
                  ></Image>
               </div>
               <div className="col-8">
                  <div className="d-flex justify-content-between service-title">
                     <Link to="/booking" className="link-no-decoration ">
                        SASSY SPA PEDI
                     </Link>{' '}
                     <span>$30+</span>
                  </div>
                  Rejuvenate your feet with our relieving treatment. This
                  service includes nail trimming. Filing, shaping, buffing,
                  cuticle cutting, foot scrub, and an application of lotion.
                  Finished off with a regular polish in the color of your
                  choice.
               </div>
            </div>
         </div>

         <div
            id="maniMenu"
            className="d-flex align-items-center justify-content-center manicure-label"
         >
            <p style={{ zIndex: 2 }}>MANICURE</p>
         </div>
         <div className="container ">
            <div className="row align-items-center pb-3 mb-3 border-bottom border-info-subtle">
               <div className="col-3">
                  <Image
                     locationId="mediMenu1"
                     imgClassName="img-fluid mt-5 img-thumbnail pedicure-img"
                  ></Image>
               </div>
               <div className="col-8">
                  <div className="d-flex justify-content-between service-title">
                     <Link to="/booking" className="link-no-decoration ">
                        CLASSIC MANICURE
                     </Link>{' '}
                     <span>$22+</span>
                  </div>
                  <strong>
                     +Refreshing Hand Soak <br />
                     +Relaxing Hand Massage Polish <br />
                     +Expert Trimming, Shaping & Cuticle Detail <br />
                  </strong>
                  Our signature classic manicure involves nail filing, shaping
                  and buffing cuticle work and polish in a color of your choice.
                  The treatment is then finished with an application of
                  hydrating lotion to keep your hands nourished. This service
                  also includes a longer more relaxing hand massage polish.
               </div>
            </div>
            <div className="row align-items-center pb-3 mb-3 border-bottom border-info-subtle">
               {/* <div className="col-1"></div> */}
               <div className="col-3">
                  <Image
                     locationId="mediMenu2"
                     imgClassName="img-fluid mt-5 img-thumbnail pedicure-img"
                  ></Image>
               </div>
               <div className="col-8">
                  <div className="d-flex justify-content-between service-title">
                     <Link to="/booking" className="link-no-decoration ">
                        SASSY DELUXE MANICURE
                     </Link>{' '}
                     <span>$30+</span>
                  </div>
                  <strong>
                     {' '}
                     +Classic Manicure Plus <br />
                     +Sugar Scrub <br />
                     +Cucumber Cream Hand Massage <br />
                  </strong>
                  A relaxing manicure that leaves your skin soft and smooth.
                  Hand soak, nails are cut and filed, cuticles soaked and
                  tidied, exfoliation sugar scrub and hydrating mask, cucumber
                  cream hand massage. Finishing oil with a divine hand and arm
                  massage and your choice of colored polish
               </div>
            </div>
            <div className="row align-items-center pb-3 mb-3 border-bottom border-info-subtle">
               <div className="col-3">
                  <Image
                     locationId="mediMenu3"
                     imgClassName="img-fluid mt-5 img-thumbnail pedicure-img"
                  ></Image>
               </div>
               <div className="col-8">
                  <div className="d-flex justify-content-between service-title">
                     <Link to="/booking" className="link-no-decoration ">
                        GEL MANICURE
                     </Link>{' '}
                     <span>$35+</span>
                  </div>
                  <strong>
                     {' '}
                     +Classic Manicure
                     <br /> +Gel Polish
                     <br />
                  </strong>
                  Classic Manicure PLUS Gel Polish are used for the increasingly
                  popular
               </div>
            </div>
         </div>

         <div
            id="acrylicMenu"
            className="d-flex align-items-center justify-content-center acrylic-label"
         >
            <p style={{ zIndex: 2 }}>ACRYLIC</p>
         </div>
         <div className="container">
            <div className="d-flex flex-column flex-lg-row align-items-top">
               <div className="col-12 col-lg-6">
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        White Tip Fill In
                     </Link>{' '}
                     <span>$40 </span>
                  </div>
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        White Tip Full Set
                     </Link>{' '}
                     <span>$55</span>
                  </div>
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        Pink/Gel Powder Fill In
                     </Link>{' '}
                     <span>$45</span>
                  </div>
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        Pink/Gel Powder Full Set
                     </Link>{' '}
                     <span>$55+</span>
                  </div>
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        Fill In Gel
                     </Link>{' '}
                     <span>$40</span>
                  </div>
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        Full Set Gel
                     </Link>{' '}
                     <span>$50+</span>
                  </div>

                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        SNS Dip Powder
                     </Link>{' '}
                     <span>$45+</span>
                  </div>
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        SNS Dipping Powder FS Fullset{' '}
                     </Link>{' '}
                     <span>$55+</span>
                  </div>
               </div>
               <div className="col-12 col-lg-6">
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        Pink & White Powder Fill In
                     </Link>{' '}
                     <span> $50</span>
                  </div>
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        Pink & White Powder Full Set
                     </Link>{' '}
                     <span> $65+</span>
                  </div>
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        Ombre Fill In
                     </Link>{' '}
                     <span>$55</span>
                  </div>
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        Ombre Full Set
                     </Link>{' '}
                     <span> $65</span>
                  </div>

                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        Acrylic Full Set Toes w/ Pedi
                     </Link>{' '}
                     <span>$45</span>
                  </div>
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        Acrylic Full Set Toes w/o Pedi
                     </Link>{' '}
                     <span>$60</span>
                  </div>
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        Back Fill
                     </Link>{' '}
                     <span>$55+</span>
                  </div>
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        Gel X Fill In
                     </Link>{' '}
                     <span>$60</span>
                  </div>
                  <div className="d-flex justify-content-between service-title pb-2 mb-2 border-bottom border-info-subtle">
                     <Link to="/booking" className="link-no-decoration ">
                        Gel X Full Set
                     </Link>{' '}
                     <span>$75</span>
                  </div>
               </div>
            </div>
         </div>

         <div className="d-flex align-items-center justify-content-center addon-label">
            <p style={{ zIndex: 2 }}>ADD ON</p>
         </div>
         <div className="container">
            <div className="d-flex flex-column flex-lg-row align-items-top">
               <div className="col-12 col-lg-6">
                  {menuItems1.map((item) => (
                     <MenuItem nemuItem={item} />
                  ))}
               </div>
               <div className="col-12 col-lg-6">
                  {menuItems2.map((item) => (
                     <MenuItem nemuItem={item} />
                  ))}
               </div>
            </div>
         </div>
         <div className="d-flex align-items-center justify-content-center addition-label">
            <p style={{ zIndex: 2 }}>ADDITIONAL TREAMENT</p>
         </div>
         <div className="container">
            <div className="d-flex flex-column flex-lg-row align-items-top">
               <div id="addonMenu" className="col-12">
                  {data.menuAddition.map((item) => (
                     <MenuItem nemuItem={item} />
                  ))}
               </div>
            </div>
         </div>
         <div
            id="waxMenu"
            className="d-flex align-items-center justify-content-center wax-label"
         >
            <p style={{ zIndex: 2 }}>WAXING</p>
         </div>
         <div className="container">
            <div className="d-flex flex-column flex-lg-row align-items-top">
               <div className="col-12 col-lg-6">
                  {data.menuWax1.map((item) => (
                     <MenuItem nemuItem={item} />
                  ))}
               </div>
               <div className="col-12 col-lg-6">
                  {data.menuWax2.map((item) => (
                     <MenuItem nemuItem={item} />
                  ))}
               </div>
            </div>
         </div>
         <div className="d-flex align-items-center justify-content-center child-label">
            <p style={{ zIndex: 2 }}>CHILDREN SERVICES</p>
         </div>
         <div className="container">
            <div className="d-flex flex-column flex-lg-row align-items-top">
               <div id="childMenu" className="col-12">
                  {data.menuChild.map((item) => (
                     <MenuItem nemuItem={item} />
                  ))}
               </div>
            </div>
         </div>
         <div className="d-flex align-items-center justify-content-center lash-label">
            <p style={{ zIndex: 2 }}>EYELASH EXTENSIONS</p>
         </div>
         <div className="container">
            <div className="d-flex flex-column flex-lg-row align-items-top">
               <div id="lashMenu" className="col-12 ">
                  {data.menuLash.map((item) => (
                     <MenuItem nemuItem={item} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
