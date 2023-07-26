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

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <ToastContainer position="bottom-center" limit={1} />
            <header className="">
               <div className="top-bar">
                  <div>
                     <Authen />
                  </div>
                  <div className="container-fluid location-info">
                     <div className="row text-left">
                        <div className="col-6"></div>
                        <div className="col-3">
                           {console.log(auth.currentUser)}
                           <p>
                              <a href="/">Call us at: 623-225-6933</a>
                           </p>
                           <p>
                              <a href="/">
                                 11435 W Buckeye Rd #102, Avondale, AZ
                              </a>
                           </p>
                           <p>
                              <a href="/">Sassynails2.buckeye@gmail.com</a>
                           </p>
                           <p>
                              <a href="/">zota.zbook.us/sassy11435_booking</a>
                           </p>
                        </div>
                        <div className="col-3">
                           <p>
                              <a href="/">Call us at: 623-225-6933</a>
                           </p>
                           <p>
                              <a href="/">
                                 11435 W Buckeye Rd #102, Avondale, AZ
                              </a>
                           </p>
                           <p>
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
                              <a href="" className="nav-link active">
                                 Home
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="" className="nav-link">
                                 Services
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="" className="nav-link">
                                 Gallery
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="" className="nav-link">
                                 Booking
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="" className="nav-link">
                                 Testimonials
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="" className="nav-link">
                                 Giftcard
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="" className="nav-link">
                                 About Us
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </nav>

               {/* <Navbar bg="dark" variant="dark" expand="sm">
                  <Container fluid="lg">
                     <LinkContainer to="/">
                        <Navbar.Brand>SASSY Nail and Spa</Navbar.Brand>
                     </LinkContainer>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />

                     <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" justify-content-center">
                           <Link className="nav-link" to="/">
                              Home
                           </Link>
                           <Link className="nav-link" to="/">
                              Menu
                           </Link>
                           <Link className="nav-link" to="/">
                              Gallery
                           </Link>
                           <Link className="nav-link" to="/">
                              Booking
                           </Link>
                           <Link className="nav-link" to="/">
                              Testimonials
                           </Link>
                           <Link className="nav-link" to="/">
                              Giftcard
                           </Link>
                           <Link className="nav-link" to="/">
                              FAQ
                           </Link>
                           <Link className="nav-link" to="/">
                              About Us
                           </Link>

                           <NavDropdown
                              title="Dropdown"
                              id="basic-nav-dropdown"
                           >
                              <NavDropdown.Item href="#action/3.1">
                                 Action
                              </NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">
                                 Another action
                              </NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">
                                 Something
                              </NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.4">
                                 Separated link
                              </NavDropdown.Item>
                           </NavDropdown>
                        </Nav>
                     </Navbar.Collapse>
                  </Container>
               </Navbar> */}
            </header>
            <main>
               <Routes>
                  <Route path="/" element={<HomeScreen />}></Route>
               </Routes>
            </main>
         </div>
      </BrowserRouter>
   );
}

export default App;
