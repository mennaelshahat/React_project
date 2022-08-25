import { React } from 'react';

import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Profileimg from './../images/profile.jpg';
import './../styles/Navs.scss';
import ProductsDetails from './ProductDetails';
import { addItem } from '../Redux/reducers';
import {useSelector} from 'react-redux';
const Navs = () => {
  const state =useSelector((state)=>state.addItems);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
    <div className='container'>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <img src={Profileimg} alt="ProfileImage" />
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Product">product</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/cart">    Cart({state.length})</NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
   
    </ul>
   
  </div>
  
</div>
</nav>
    // <Navbar>
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img src={Profileimg} alt="ProfileImage" />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link  href="/">Home</Nav.Link>
    //         <Nav.Link href="/Product">Product</Nav.Link>
    //         <NavLink to= "/cart" className="btn">
    //           Cart({state.length})
    //       </NavLink>
    //         {/* <NavDropdown title="Cart" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown> */}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>


  );

}







export default Navs;