import React from 'react';
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
   return (
      <div>
         <div
            id="carousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
         >
            <div className="carousel-inner">
               {carouselData1.map((item) => (
                  <div className="carousel-item active">
                     {console.log(item.src)}
                     <img
                        src={item.src}
                        alt={item.alt}
                        className="d-block w-100"
                     />
                  </div>
               ))}

               {/* <div className="carousel-item">
                  <img
                     src={require('../asset/picture/summer10.jpg')}
                     alt="slide2"
                     className="d-block w-100"
                  />
               </div>
               <div className="carousel-item">
                  <img
                     src={require('../asset/picture/design1.jpg')}
                     alt="slide3"
                     className="d-block w-100"
                  />
               </div>
               <div className="carousel-item">
                  <img
                     src={require('../asset/picture/design2.jpg')}
                     alt="slide4"
                     className="d-block w-100"
                  />
               </div> */}
               <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide="prev"
               >
                  <span
                     class="carousel-control-prev-icon"
                     aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
               </button>
               <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide="next"
               >
                  <span
                     class="carousel-control-next-icon"
                     aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
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
               <div className="row">
                  <div className="col">
                     <div className="d-flex">
                        <div className="col-6 d-flex align-items-center">
                           <div>
                              <p>PEDICURE ...........60 min</p>
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
                        <div className="col-6 d-flex align-items-center ">
                           <div className="justify-content-center">
                              <p>MANICURE...........30 min</p>
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
                        <div className="col-6 d-flex align-items-center">
                           <div>
                              {' '}
                              <p>ACRYLIC ..........90 min</p>
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
                  <div className="col">
                     {' '}
                     <div className="d-flex">
                        <div className="col-6 d-flex align-items-center">
                           <div>
                              <p>WAXING.............15 min</p>
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
                        <div className="col-6 d-flex align-items-center">
                           <div>
                              <p>EYELASH EXT...........3 hr</p>
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
                     <div className="d-flex d-flex align-items-center">
                        <div className="col-6">
                           <div>
                              {' '}
                              <p>CHILDREN..........30 min</p>
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

         <div className="gallery">
            <div>Our Galleries</div>

            <div></div>
         </div>
      </div>
   );
}
/* <section style={{ height: '10px' }}>
            <h3>Welcome to Sassy Nails & Spa</h3>
            <p>
               your destination for luxurious nail care and stunning nail art.
               Step into our relaxing salon and indulge in a pampering
               experience that will leave you feeling rejuvenated and glamorous
            </p>
         </section>
         <section>
            <Carousel style={{ maxHeight: '100px' }}>

               
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src="https://m.media-amazon.com/images/I/B1DBWbloIpS._CLa%7C2140%2C2000%7C91y%2B4ymrM4L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png"
                     alt="First slide"
                  />
                  <Carousel.Caption>
                     <h3>First slide label</h3>
                     <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                     </p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src="https://i5.walmartimages.com/asr/0ec1b72b-a123-48ff-bf98-6da928961de7.18a7b7de3003eeecd8db166e91532cae.jpeg"
                     alt="Second slide"
                  />

                  <Carousel.Caption>
                     <h3>Second slide label</h3>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     </p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src="https://m.media-amazon.com/images/I/B1pDnrUmaHS._CLa%7C2140%2C2000%7C91qSQl4VrZL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png"
                     alt="Third slide"
                  />

                  <Carousel.Caption>
                     <h3>Third slide label</h3>
                     <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                     </p>
                  </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
         </section> */

/* <Row>
            <Col md={12}>
               <p style={{ fontSize: '1.5rem' }}>
                  Welcome to Sassy Nails & Spa
               </p>{' '}
               your destination for luxurious nail care and stunning nail art.
               Step into our relaxing salon and indulge in a pampering
               experience that will leave you feeling rejuvenated and
               glamorous."
            </Col>
         </Row>
         <Row>
            <Col>
               <div class="p-3 mb-2 bg-secondary text-white"></div>
            </Col>
         </Row>

         <Row>
            <Col>
               <p style={{ fontSize: '1.5rem' }}>Services</p>
               <p>
                  At Sassy Nails & Spa, we offer a wide range of nail services
                  tailored to your individual needs. From classic manicures and
                  pedicures to intricate nail art designs, our talented nail
                  technicians will create the perfect look for any occasion
               </p>
            </Col>
         </Row> */
