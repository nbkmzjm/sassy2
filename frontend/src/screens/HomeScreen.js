import React, { useEffect } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';

// import data from '../data';

export default function HomeScreen() {
   const carouselData1 = [
      {
         src: require('../asset/picture/CB2.jpg'),
         alt: 'carousel1',
      },
      {
         src: require('../asset/picture/summer10.jpg'),
         alt: 'carousel2',
      },
      {
         src: require('../asset/picture/design1.jpg'),
         alt: 'carousel3',
      },
   ];

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
                  <img
                     src={require('../asset/picture/pool10.jpg')}
                     alt="slide2"
                     className="d-block w-75 mx-auto"
                  />
               </div>

               <div className="carousel-item">
                  <img
                     src={require('../asset/picture/summer10.jpg')}
                     alt="slide2"
                     className="d-block w-75 mx-auto"
                  />
               </div>
               <div className="carousel-item">
                  <img
                     src={require('../asset/picture/acrylic.jpg')}
                     alt="slide3"
                     className="d-block w-75 mx-auto"
                  />
               </div>
               <div className="carousel-item">
                  <img
                     src={require('../asset/picture/pedicure.webp')}
                     alt="slide4"
                     className="d-block w-75 mx-auto"
                  />
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
         {/* Welcome to Sassy */}
         <div className="container mt-5 intro">
            <div className="d-flex flex-column flex-md-row">
               <div className="col-12 col-md-6">
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
               <div className="col-12 col-md-6">
                  <img
                     className="my-auto"
                     src={require('../asset/picture/az-nail-salon-1.jpg')}
                     alt="nailsalon1"
                  />
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
                                 PEDICURE
                                 <br />
                                 30-60 min
                              </p>
                              <p className="price">$30 to $80+</p>
                           </div>
                        </div>

                        <div className="col-6">
                           <img
                              src={require('../asset/picture/pedicure.webp')}
                              alt=""
                              className="img-thumbnail"
                           />
                        </div>
                     </div>
                     <div className="d-flex">
                        <div className="col-6 d-flex justify-content-center align-items-center ">
                           <div className="justify-content-center">
                              <p>
                                 MANICURE
                                 <br />
                                 15-30 min
                              </p>
                              <p className="price"> $30 to $80+</p>
                           </div>
                        </div>
                        <div className="col-6">
                           {' '}
                           <img
                              src={require('../asset/picture/manicure.jpg')}
                              alt=""
                              className="img-thumbnail"
                           />
                        </div>
                     </div>
                     <div className="d-flex">
                        <div className="col-6 d-flex justify-content-center align-items-center">
                           <div>
                              {' '}
                              <p>
                                 ACRYLIC
                                 <br />
                                 60-90 min
                              </p>
                              <p className="price">$30 to $80+</p>
                           </div>
                        </div>
                        <div className="col-6">
                           {' '}
                           <img
                              src={require('../asset/picture/acrylic.jpg')}
                              alt=""
                              className="img-thumbnail"
                           />
                        </div>
                     </div>
                  </div>
                  <div className="col-12 col-lg-6">
                     {' '}
                     <div className="d-flex">
                        <div className="col-6 d-flex justify-content-center align-items-center">
                           <div>
                              <p>
                                 WAXING
                                 <br />
                                 10-20 min
                              </p>
                              <p className="price">$8 to $25+</p>
                           </div>
                        </div>
                        <div className="col-6">
                           {' '}
                           <img
                              src={require('../asset/picture/waxing.jpg')}
                              alt=""
                              className="img-thumbnail"
                           />
                        </div>
                     </div>
                     <div className="d-flex">
                        <div className="col-6 d-flex justify-content-center align-items-center">
                           <div>
                              <p>
                                 EYELASH EXT
                                 <br />
                                 1-2 hr
                              </p>
                              <p className="price">$200 to $300+</p>
                           </div>
                        </div>
                        <div className="col-6">
                           {' '}
                           <img
                              src={require('../asset/picture/eyelash.webp')}
                              alt=""
                              className="img-thumbnail"
                           />
                        </div>
                     </div>
                     <div className="d-flex ">
                        <div className="col-6 d-flex justify-content-center align-items-center">
                           <div>
                              {' '}
                              <p>
                                 CHILDREN
                                 <br />
                                 30-45 min
                              </p>
                              <p className="price">$15 to $30+</p>
                           </div>
                        </div>
                        <div className="col-6">
                           {' '}
                           <img
                              src={require('../asset/picture/kidnail.jpeg')}
                              alt=""
                              className="img-thumbnail"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Our Gallery */}

         {/* <div className="gallery">
            <div>Our Galleries</div>

            <div></div>
         </div> */}
      </div>
   );
}
