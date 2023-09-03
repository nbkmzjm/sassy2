import logo from './logo.svg';
import './App.css';

import {
   Button,
   Container,
   Nav,
   NavDropdown,
   Form,
   FormControl,
} from 'react-bootstrap';
import {
   BrowserRouter,
   Link,
   Route,
   Routes,
   useNavigate,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
// import './in';
// import './asset/picture/sassyLogo/jpeg';
import './SCSS/App.scss';
import Authen from './component/Authen.js';
import { auth } from './configReact/firebase';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ServicesScreen from './screens/ServicesScreen';
import { useContext, useState } from 'react';
import BookingScreen from './screens/BookingScreen';
import { Store } from './Store';
import AdminSreen from './screens/AdminSreen';
import MyModal from './component/Modal';
import HomeScreenB from './screens/HomeScreenB';
import SocialIcons from './component/SocialIcons';

function App() {
   const { state } = useContext(Store);
   const { userInfo } = state;
   const [activeLink, setActiveLink] = useState('Home');
   // const navigate = useNavigate();
   const address = '11435 W Buckeye Rd #101, Avondale, AZ';
   const phoneNumber = '623-478-1950';
   const navLinkHandler = (link) => {
      setActiveLink(link);
   };

   return (
      <BrowserRouter>
         <div className="App">
            <ToastContainer position="bottom-center" limit={1} />
            <header className="">
               <div className="top-bar">
                  <div className="mt-5">
                     <Authen />
                  </div>
                  <div className="container-fluid  location-info mt-5">
                     <div className="d-flex justify-content-end flex-column flex-lg-row">
                        <div className="d-flex justify-content-center me-3 col-12 col-lg-6">
                           <iframe
                              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13318.360018234867!2d-112.3046247!3d33.4339319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b3ee68c84ba73%3A0x9d460226542a5aa8!2sSassy%20Nails%20%26%20Spa%20-%20MC85!5e0!3m2!1sen!2sus!4v1690570678760!5m2!1sen!2sus"
                              width="400"
                              height="200"
                              // style="border:0;"
                              // allowfullscreen=""
                              loading="lazy"
                              // referrerpolicy="no-referrer-when-downgrade"
                           ></iframe>
                           {/* <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.032799823551!2d-112.3102534848007!3d33.44845198077452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b3f1ed4815781%3A0xc26dfd277105f0ff!2sSassy%20Nails%20%26%20Spa%20-%20Avondale!5e0!3m2!1sen!2sus!4v1690570264167!5m2!1sen!2sus"
                              width="300"
                              height="200"
                              // style="border:0;"
                              allowfullscreen=""
                              loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"
                           ></iframe> */}
                        </div>

                        <div className="d-flex justify-content-center col-12 col-lg-6 contact-topbar  ">
                           <div>
                              <p>
                                 <i className="fas fa-phone"></i>&nbsp;&nbsp;
                                 <a href="/"> Call us NOW: (623) 478-1950</a>
                              </p>
                              <p>
                                 <i className="fa-solid fa-location-dot"></i>
                                 <a
                                    href="https://goo.gl/maps/5Gbh7edioygNQaeP7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Locate next to
                                    Starbuck and Fry's at: <br />
                                    &nbsp;&nbsp; 11435 W Buckeye Rd #101,
                                    Avondale, AZ
                                 </a>
                              </p>
                              <p>
                                 <i className="fas fa-envelope"></i>&nbsp;&nbsp;
                                 <a href="/"> Sassynails2.buckeye@gmail.com</a>
                              </p>
                           </div>

                           <div
                              style={{
                                 position: 'fixed',
                                 top: '100px',
                                 right: '-2.5rem',
                                 zIndex: '3',
                                 opacity: '70%',
                                 // translateX: '50%',
                              }}
                              className="d-flex justify-content-center flex-column floating-buttons"
                           >
                              <div className="mt-4 me-1 ps-2">
                                 <Link to="/booking" className="">
                                    <button
                                       type="button"
                                       className="btn btn-dark  btn-md mb-5 rotated"
                                    >
                                       Book Now
                                    </button>
                                 </Link>
                              </div>
                              <div className="mt-3 me-3 ps-3">
                                 <Link to={`tel:${phoneNumber}`} className="">
                                    <button
                                       type="button"
                                       className="btn btn-dark  btn-md mb-5 rotated"
                                    >
                                       Call Now
                                    </button>
                                 </Link>
                              </div>
                              <div className="mt-3 me-1 ps--4">
                                 <Link
                                    to="https://goo.gl/maps/5Gbh7edioygNQaeP7"
                                    className=""
                                 >
                                    <button
                                       type="button"
                                       className="btn btn-dark  btn-md mt-3 rotated "
                                    >
                                       Get Direction
                                    </button>
                                 </Link>
                              </div>
                              <SocialIcons></SocialIcons>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <nav className="navbar bg-dark navbar-dark navbar-expand-lg">
                  <div className="container">
                     <a href="/" className="navbar-brand">
                        <img
                           src="https://firebasestorage.googleapis.com/v0/b/sassymc85.appspot.com/o/images%2FsassyLogo.jpeg?alt=media&token=571d12f3-54fa-44eb-9cc3-4ae77f188e74"
                           alt="sassy"
                        />
                     </a>

                     <button
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResp"
                        type="button"
                     >
                        <span className="navbar-toggler-icon"></span>
                     </button>

                     <div className="collapse navbar-collapse" id="navbarResp">
                        <ul className="navbar-nav lm-auto">
                           <li className="nav-item">
                              <Link
                                 to="/"
                                 className={`nav-link ${
                                    activeLink === 'Home' ? 'active' : ''
                                 }`}
                                 onClick={() => navLinkHandler('Home')}
                              >
                                 Home
                              </Link>
                           </li>
                           <li className="nav-item">
                              <Link
                                 to="/services"
                                 className={`nav-link ${
                                    activeLink === 'Services' ? 'active' : ''
                                 }`}
                                 onClick={() => navLinkHandler('Services')}
                              >
                                 Services
                              </Link>
                           </li>
                           {/* <li className="nav-item">
                              <Link
                                 to=""
                                 className={`nav-link ${
                                    activeLink === 'Gallery' ? 'active' : ''
                                 }`}
                                 onClick={() => navLinkHandler('Gallery')}
                              >
                                 Gallery
                              </Link>
                           </li> */}
                           <li className="nav-item">
                              <Link to="/booking" className="nav-link">
                                 Booking
                              </Link>
                           </li>
                           {/* <li className="nav-item">
                              <Link to="" className="nav-link">
                                 Testimonials
                              </Link>
                           </li> */}
                           {/* <li className="nav-item">
                              <Link to="" className="nav-link">
                                 Giftcard
                              </Link>
                           </li> */}
                           {/* <li className="nav-item">
                              <Link to="" className="nav-link">
                                 About Us
                              </Link>
                           </li> */}
                           {userInfo ? (
                              <li className="nav-item">
                                 <Link to="/admin" className="nav-link">
                                    Admin
                                 </Link>
                              </li>
                           ) : (
                              ''
                           )}
                        </ul>
                     </div>
                  </div>
               </nav>
            </header>
            <main>
               <div>{userInfo && <MyModal />}</div>
               <Routes>
                  {/* <Route path="/" element={<HomeScreenB />}></Route> */}
                  <Route path="/" element={<HomeScreen />}></Route>
                  <Route path="/services" element={<ServicesScreen />}></Route>
                  <Route path="/booking" element={<BookingScreen />}></Route>
                  <Route path="/admin" element={<AdminSreen />}></Route>
               </Routes>
            </main>
         </div>
      </BrowserRouter>
   );
}

export default App;
