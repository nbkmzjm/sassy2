import React, { useContext, useEffect } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Image from '../component/Image';
import { Store } from '../Store';
import { Link, useNavigate } from 'react-router-dom';
// import data from '../data';

export default function HomeScreenB() {
  const navigate = useNavigate();
  navigate('/home');
  return <div>home screen</div>;
}
