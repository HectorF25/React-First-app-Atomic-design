import React from 'react';
import { Navbar } from "react-bootstrap";
import logo from '../../../logo.svg';

const BrandTitle = ({title}) => {
    return ( 
        <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {title}
        </Navbar.Brand>
     );
  };
  
export default BrandTitle;
  