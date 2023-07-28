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
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
// import './in';
// import './asset/picture/sassyLogo/jpeg';
import './SCSS/App.scss';
import Authen from './component/Authen.js';
import { auth } from './config/firebase';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ServicesScreen from './screens/ServicesScreen';
import { useState } from 'react';
import BookingScreen from './screens/BookingScreen';

function App() {
   const [activeLink, setActiveLink] = useState('Home');

   const navLinkHandler = (link) => {
      setActiveLink(link);
   };

   return (
      <BrowserRouter>
         <div className="App">
            <ToastContainer position="bottom-center" limit={1} />
            <header className="">
               <div className="top-bar">
                  <div>{/* <Authen /> */}</div>
                  <div className="container-fluid location-info">
                     <div className="row text-left">
                        <div className="col-6"></div>
                        <div className="col-3">
                           {console.log(auth.currentUser)}
                           <p>
                              <i class="fas fa-phone"></i>
                              <a href="/">Call us at: 623-225-6933</a>
                           </p>
                           <p>
                              <i class="fa-solid fa-location-dot"></i> :
                              <a href="/">
                                 11435 W Buckeye Rd #102, Avondale, AZ
                              </a>
                           </p>
                           <p>
                              <i class="fas fa-envelope"></i>
                              _____
                              <a href="/">Sassynails2.buckeye@gmail.com</a>
                           </p>
                           <p>
                              <a href="/">zota.zbook.us/sassy11435_booking</a>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <nav className="navbar bg-dark navbar-dark navbar-expand-lg">
                  <div className="container">
                     <a href="/" className="navbar-brand">
                        <img
                           src="https://drive.google.com/uc?export=view&id=197lt3bm6bCGCMGehX0qSSkSRLAt8Oa83"
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
                           <li className="nav-item">
                              <Link
                                 to=""
                                 className={`nav-link ${
                                    activeLink === 'Gallery' ? 'active' : ''
                                 }`}
                                 onClick={() => navLinkHandler('Gallery')}
                              >
                                 Gallery
                              </Link>
                           </li>
                           <li className="nav-item">
                              <Link to="/booking" className="nav-link">
                                 Booking
                              </Link>
                           </li>
                           <li className="nav-item">
                              <Link to="" className="nav-link">
                                 Testimonials
                              </Link>
                           </li>
                           <li className="nav-item">
                              <Link to="" className="nav-link">
                                 Giftcard
                              </Link>
                           </li>
                           <li className="nav-item">
                              <Link to="" className="nav-link">
                                 About Us
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </nav>
            </header>
            <main>
               <Routes>
                  <Route path="/" element={<HomeScreen />}></Route>
                  <Route path="/services" element={<ServicesScreen />}></Route>
                  <Route path="/booking" element={<BookingScreen />}></Route>
               </Routes>
            </main>
         </div>
      </BrowserRouter>
   );
}

export default App;
