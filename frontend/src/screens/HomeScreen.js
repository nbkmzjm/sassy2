import React, { useContext, useEffect } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Image from '../component/Image';
import { Store } from '../Store';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { analytics } from '../configReact/firebase';
import { logEvent } from 'firebase/analytics';
// import data from '../data';

export default function HomeScreen() {
   console.log('home init');

   const galleryLocation = [
      'gallery1',
      'gallery2',
      'gallery3',
      'gallery4',
      'gallery5',
      'gallery6',
      'gallery7',
      'gallery8',
      'gallery9',
      'gallery10',
      'gallery11',
      'gallery12',
   ];

   const imageClickHandler = () => {
      const imageElement = document.querySelector('#welcomeImage');
      if (imageElement) {
         imageElement.src =
            'https://i5.walmartimages.com/asr/0ec1b72b-a123-48ff-bf98-6da928961de7.18a7b7de3003eeecd8db166e91532cae.jpeg';
      }
   };

   //  logEvent(analytics, 'goal_completion', {
   //     name: 'lever_puzzle',
   //     page_location: window.location.href,
   //     page_title: 'My Page Title',
   //  });

   console.log('window.location.pathname:' + window.location.pathname);
   console.log('window.location.search:' + window.location.search);

   useEffect(() => {
      ReactGA.pageview(window.location.pathname + window.location.search);
      const carouselElement = document.querySelector('#carousel');
      const carousel = new window.bootstrap.Carousel(carouselElement, {
         // interval: 2000,
         // pause: 'hover',
      });

      carousel.cycle(); // Start the carousel
   });
   return (
      <div>
         {console.log('home screen render')}

         <div
            id="carousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
         >
            {/* d-flex align-items-center */}
            <div className="carousel-inner ">
               {/* {carouselData1.map((item) => (
                  <div className="carousel-item active">
                     {console.log(item.src)}
                     <img
                        src={item.src}
                        alt={item.alt}
                        className="d-block w-100"
                     />
                  </div>
               ))} */}

               <div className="carousel-item active ">
                  {/* <img
                     src={require('../asset/picture/pool10.jpg')}
                     alt="slide2"
                     className="d-block w-75 mx-auto"
                  /> */}
                  <Image
                     locationId="homeCou1"
                     imgClassName="carousel-image"
                  ></Image>
               </div>

               <div className="carousel-item">
                  <Image
                     locationId="homeCou2"
                     imgClassName="carousel-image"
                  ></Image>
               </div>
               <div className="carousel-item">
                  <Image
                     locationId="homeCou3"
                     imgClassName="carousel-image"
                  ></Image>
               </div>
               <div className="carousel-item">
                  <Image
                     locationId="homeCou4"
                     imgClassName="carousel-image"
                  ></Image>
               </div>
               <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide="prev"
               >
                  <span
                     className="carousel-control-prev-icon"
                     aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
               </button>
               <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide="next"
               >
                  <span
                     className="carousel-control-next-icon"
                     aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
               </button>
            </div>
         </div>
         <div></div>

         {/* Welcome to Sassy */}
         <div className="container mt-5 intro">
            <div className="d-flex flex-column  ">
               <div className="col-12 ">
                  <p className="welcome"> Welcome to </p>
                  <p className="shopName">Sassy Nails & Spa MC85</p>

                  <p id="intro">
                     Conveniently situated at the heart of Avondale, adjacent to
                     Fry's and Starbucks, we're thrilled to present a sanctuary
                     devoted to enhancing beauty and providing relaxation for
                     all your nail care necessities. Immerse yourself in our
                     realm of indulgence and experience an extensive assortment
                     of nail services personalized to match your distinct style
                     and preferences. Our proficient nail technicians are
                     dedicated to delivering unparalleled customer service and
                     crafting astonishing nail art that will instill confidence
                     and radiance within you. From timeless manicures and
                     pedicures to fashionable nail designs and lavish spa
                     therapies, we provide a comprehensive selection of
                     offerings that employ high-quality products. Be it a swift
                     touch-up or a complete makeover, our warm and welcoming
                     ambiance serves as the ideal haven to unwind and pamper
                     yourself with some well-earned "me-time."
                  </p>
               </div>
               <div className="col-12 d-flex justify-content-center">
                  <Image
                     locationId="home1"
                     imgClassName="img-fluid mt-5 img-rounded mx-auto"
                  ></Image>

                  {/* <img
                     id="welcomeImage"
                     className="img-fluid"
                     src={require('../asset/picture/az-nail-salon-1.jpg')}
                     alt="nailsalon1"
                     onClick={imageClickHandler}
                  /> */}
               </div>
            </div>
         </div>
         {/* Our Galleries */}
         <div className="gallery my-5">
            <div>Our Galleries</div>
         </div>
         <div className="container-fluid gallery-cont">
            <div className="row d-flex justify-content-center">
               {galleryLocation.map((gallery, index) => (
                  <div
                     key={index}
                     className="col-12 col-lg-4 mb-4 d-flex justify-content-center"
                  >
                     <Image
                        locationId={gallery}
                        imgClassName="mt-2 img-rounded"
                        width="350px"
                        height="auto"
                     ></Image>
                  </div>
               ))}
            </div>
         </div>
         {/* Our services */}
         <div className="gallery my-5">
            <div>Our Services</div>
         </div>
         <div className="services">
            <div className="container mt-5">
               <div className="d-flex flex-column flex-lg-row">
                  <div className="col-12 col-lg-6">
                     <div className="d-flex">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                           <div>
                              <p>
                                 <Link
                                    to="/services#pediMenu"
                                    className="link-no-decoration"
                                 >
                                    PEDICURE
                                    <br />
                                    <button className="btn btn-primary">
                                       Learn More
                                    </button>
                                 </Link>
                              </p>
                           </div>
                        </div>

                        <div className="col-8">
                           <Image
                              locationId="service1"
                              imgClassName="img-fluid mt-5 img-rounded"
                              width="250px"
                              height="250px"
                           ></Image>
                           {/* <img
                              src={require('../asset/picture/pedicure.webp')}
                              alt=""
                              className="img-thumbnail"
                           /> */}
                        </div>
                     </div>
                     <div className="d-flex">
                        <div className="col-4 d-flex justify-content-center align-items-center ">
                           <div className="justify-content-center">
                              <p>
                                 <Link
                                    to="/services#maniMenu"
                                    className="link-no-decoration "
                                 >
                                    MANICURE
                                    <br />
                                    <button className="btn btn-primary">
                                       Learn More
                                    </button>
                                 </Link>
                              </p>
                           </div>
                        </div>
                        <div className="col-8">
                           {' '}
                           <Image
                              locationId="service2"
                              imgClassName="img-fluid mt-5 img-rounded"
                              width="250px"
                              height="250px"
                           ></Image>
                           {/* <img
                              src={require('../asset/picture/manicure.jpg')}
                              alt=""
                              className="img-thumbnail"
                           /> */}
                        </div>
                     </div>
                     <div className="d-flex">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                           <div>
                              {' '}
                              <p>
                                 <Link
                                    to="/services#acrylicMenu"
                                    className="link-no-decoration "
                                 >
                                    ACRYLIC
                                    <br />
                                    <button className="btn btn-primary">
                                       Learn More
                                    </button>
                                 </Link>
                              </p>
                           </div>
                        </div>
                        <div className="col-8">
                           {' '}
                           <Image
                              locationId="service3"
                              imgClassName="img-fluid mt-5 img-rounded"
                              width="250px"
                              height="250px"
                           ></Image>
                           {/* <img
                              src={require('../asset/picture/acrylic.jpg')}
                              alt=""
                              className="img-thumbnail"
                           /> */}
                        </div>
                     </div>
                  </div>
                  <div className="col-12 col-lg-6">
                     {' '}
                     <div className="d-flex">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                           <div>
                              <p>
                                 <Link
                                    to="/services#waxMenu"
                                    className="link-no-decoration "
                                 >
                                    WAXING
                                    <br />
                                    <button className="btn btn-primary">
                                       Learn More
                                    </button>
                                 </Link>
                              </p>
                           </div>
                        </div>
                        <div className="col-8">
                           {' '}
                           <Image
                              locationId="service4"
                              imgClassName="img-fluid mt-5 img-rounded"
                              width="250px"
                              height="250px"
                           ></Image>
                           {/* <img
                              src={require('../asset/picture/waxing.jpg')}
                              alt=""
                              className="img-thumbnail"
                           /> */}
                        </div>
                     </div>
                     <div className="d-flex">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                           <div>
                              <p>
                                 <Link
                                    to="/services#lashMenu"
                                    className="link-no-decoration "
                                 >
                                    EYELASH EXT
                                    <br />
                                    <button className="btn btn-primary">
                                       Learn More
                                    </button>
                                 </Link>
                              </p>
                           </div>
                        </div>
                        <div className="col-8">
                           {' '}
                           <Image
                              locationId="service5"
                              imgClassName="img-fluid mt-5 img-rounded"
                              width="250px"
                              height="250px"
                           ></Image>
                           {/* <img
                              src={require('../asset/picture/eyelash.webp')}
                              alt=""
                              className="img-thumbnail"
                           /> */}
                        </div>
                     </div>
                     <div className="d-flex ">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                           <div>
                              {' '}
                              <p>
                                 <Link
                                    to="/services#childMenu"
                                    className="link-no-decoration "
                                 >
                                    CHILDREN
                                    <br />
                                    <button className="btn btn-primary">
                                       Learn More
                                    </button>
                                 </Link>
                              </p>
                           </div>
                        </div>
                        <div className="col-8">
                           {' '}
                           <Image
                              locationId="service6"
                              imgClassName="img-fluid rounded mt-5 img-rounded"
                              width="250px"
                              height="250px"
                           ></Image>
                           {/* <img
                              src={require('../asset/picture/kidnail.jpeg')}
                              alt=""
                              className="img-thumbnail"
                           /> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Our Gallery */}
      </div>
   );
}
