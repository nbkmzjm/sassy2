import React, { useContext, useEffect } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Image from '../component/Image';
import { Store } from '../Store';
import { Link } from 'react-router-dom';
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

   useEffect(() => {
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
            <div className="carousel-inner">
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

               <div className="carousel-item active">
                  {/* <img
                     src={require('../asset/picture/pool10.jpg')}
                     alt="slide2"
                     className="d-block w-75 mx-auto"
                  /> */}
                  <Image
                     locationId="homeCou1"
                     imgClassName="d-block w-75 mx-auto"
                  ></Image>
               </div>

               <div className="carousel-item">
                  <Image
                     locationId="homeCou2"
                     imgClassName="d-block w-75 mx-auto"
                  ></Image>
                  {/* <img
                     src={require('../asset/picture/summer10.jpg')}
                     alt="slide2"
                     className="d-block w-75 mx-auto"
                  /> */}
               </div>
               <div className="carousel-item">
                  <Image
                     locationId="homeCou3"
                     imgClassName="d-block w-75 mx-auto"
                  ></Image>
                  {/* <img
                     src={require('../asset/picture/acrylic.jpg')}
                     alt="slide3"
                     className="d-block w-75 mx-auto"
                  /> */}
               </div>
               <div className="carousel-item">
                  <Image
                     locationId="homeCou4"
                     imgClassName="d-block w-75 mx-auto"
                  ></Image>
                  {/* <img
                     src={require('../asset/picture/pedicure.webp')}
                     alt="slide4"
                     className="d-block w-75 mx-auto"
                  /> */}
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
                     We are delighted to introduce you to a haven of beauty and
                     relaxation for all your nail care needs. Step into our
                     world of pampering and indulge yourself with a wide array
                     of nail services tailored to suit your unique style and
                     preferences. Our team of skilled nail technicians is
                     committed to providing exceptional customer service and
                     creating stunning nail art that will leave you feeling
                     confident and fabulous. From classic manicures and
                     pedicures to trendy nail designs and luxurious spa
                     treatments, we offer a comprehensive range of services
                     using high-quality products. Whether you're looking for a
                     quick touch-up or a complete transformation, our cozy and
                     inviting atmosphere is the perfect place to unwind and
                     treat yourself to some well-deserved "me-time."
                  </p>
               </div>
               <div className="col-12">
                  <Image
                     locationId="home1"
                     imgClassName="img-fluid mt-5"
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
         {/* Our services */}
         <div className="services">
            <div className="container mt-5">
               <div className="d-flex flex-column flex-lg-row">
                  <div className="col-12 col-lg-6">
                     <div className="d-flex">
                        <div className="col-6 d-flex justify-content-center align-items-center">
                           <div>
                              <p>
                                 <Link
                                    to="/services#pediMenu"
                                    className="link-no-decoration"
                                 >
                                    PEDICURE
                                    <br />
                                    30-60 min
                                 </Link>
                              </p>
                              <p className="price">$30 to $80+</p>
                           </div>
                        </div>

                        <div className="col-6">
                           <Image
                              locationId="service1"
                              imgClassName="img-fluid mt-5"
                           ></Image>
                           {/* <img
                              src={require('../asset/picture/pedicure.webp')}
                              alt=""
                              className="img-thumbnail"
                           /> */}
                        </div>
                     </div>
                     <div className="d-flex">
                        <div className="col-6 d-flex justify-content-center align-items-center ">
                           <div className="justify-content-center">
                              <p>
                                 <Link
                                    to="/services#maniMenu"
                                    className="link-no-decoration "
                                 >
                                    MANICURE
                                    <br />
                                    15-30 min
                                 </Link>
                              </p>
                              <p className="price"> $30 to $80+</p>
                           </div>
                        </div>
                        <div className="col-6">
                           {' '}
                           <Image
                              locationId="service3"
                              imgClassName="img-fluid mt-5"
                           ></Image>
                           {/* <img
                              src={require('../asset/picture/manicure.jpg')}
                              alt=""
                              className="img-thumbnail"
                           /> */}
                        </div>
                     </div>
                     <div className="d-flex">
                        <div className="col-6 d-flex justify-content-center align-items-center">
                           <div>
                              {' '}
                              <p>
                                 <Link
                                    to="/services#acrylicMenu"
                                    className="link-no-decoration "
                                 >
                                    ACRYLIC
                                    <br />
                                    60-90 min
                                 </Link>
                              </p>
                              <p className="price">$30 to $80+</p>
                           </div>
                        </div>
                        <div className="col-6">
                           {' '}
                           <Image
                              locationId="service3"
                              imgClassName="img-fluid mt-5"
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
                        <div className="col-6 d-flex justify-content-center align-items-center">
                           <div>
                              <p>
                                 <Link
                                    to="/services#waxMenu"
                                    className="link-no-decoration "
                                 >
                                    WAXING
                                    <br />
                                    10-20 min
                                 </Link>
                              </p>
                              <p className="price">$8 to $25+</p>
                           </div>
                        </div>
                        <div className="col-6">
                           {' '}
                           <Image
                              locationId="service4"
                              imgClassName="img-fluid mt-5"
                           ></Image>
                           {/* <img
                              src={require('../asset/picture/waxing.jpg')}
                              alt=""
                              className="img-thumbnail"
                           /> */}
                        </div>
                     </div>
                     <div className="d-flex">
                        <div className="col-6 d-flex justify-content-center align-items-center">
                           <div>
                              <p>
                                 <Link
                                    to="/services#lashMenu"
                                    className="link-no-decoration "
                                 >
                                    EYELASH EXT
                                    <br />
                                    1-2 hr
                                 </Link>
                              </p>
                              <p className="price">$200 to $300+</p>
                           </div>
                        </div>
                        <div className="col-6">
                           {' '}
                           <Image
                              locationId="service5"
                              imgClassName="img-fluid mt-5"
                           ></Image>
                           {/* <img
                              src={require('../asset/picture/eyelash.webp')}
                              alt=""
                              className="img-thumbnail"
                           /> */}
                        </div>
                     </div>
                     <div className="d-flex ">
                        <div className="col-6 d-flex justify-content-center align-items-center">
                           <div>
                              {' '}
                              <p>
                                 <Link
                                    to="/services#childMenu"
                                    className="link-no-decoration "
                                 >
                                    CHILDREN
                                    <br />
                                    30-45 min
                                 </Link>
                              </p>
                              <p className="price">$15 to $30+</p>
                           </div>
                        </div>
                        <div className="col-6">
                           {' '}
                           <Image
                              locationId="service6"
                              imgClassName="img-fluid rounded mt-5"
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

         <div className="gallery">
            <div>Our Galleries</div>
         </div>
         <div className="container-fluid ">
            <div className="row justify-content-center">
               {galleryLocation.map((gallery, index) => (
                  <div key={index} className="col-6 col-lg-3 mb-4">
                     <Image
                        locationId={gallery}
                        imgClassName="img-fluid mt-2"
                     ></Image>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
