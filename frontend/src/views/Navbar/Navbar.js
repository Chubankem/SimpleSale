import React from 'react';
import {
   Link,
   NavLink
} from "react-router-dom";

import './Navbar.scss';
import login from '../Login/Login'



class Navbar extends React.Component {

   state = {
      isLog: false
   }

   handleClickSignin = () => {
      this.setState({
         isLog: true
      });
   }


   render() {



      return (
         <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
               <div className="container">

                  <Link className="navbar-brand" to='/'>SimpleSale</Link>
                  <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
                     <li className="nav-item">
                        <NavLink className="nav-link " to="/Dit">Dit</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/Me">Me</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/May">May</NavLink>
                     </li>
                  </ul>
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <i className="nav-link fa-solid fa-magnifying-glass fa-2x" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></i>
                     </li>
                     <li className='nav-item'>
                        <i className="nav-link fa-solid fa-bars fa-2x" id="dropdownMenuClickableOutside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"></i>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                           <li><Link className="dropdown-item" onClick={() => { this.handleClickSignin() }}>SignIn</Link></li>
                           <li><Link className="dropdown-item" to="">SignUp</Link></li>
                        </ul>
                     </li>
                     {/* <li className="nav-item">
                        <div className="dropdown">
                           <i className="nav-link fa-solid fa-bars fa-2x" id="dropdownMenuClickableOutside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"></i>
                           <div className="dropdown-menu dropdown-menu-end " aria-labelledby="dropdownMenuClickableOutside" >
                              <Login />
                           </div>
                        </div>
                     </li> */}
                     {/* <li className="nav-item">
                        <div className="dropdown" >
                           <i className="nav-link fa-solid fa-bars fa-2x"></i>
                           <div className="dropdown-content">
                              <Login />
                           </div>
                        </div>
                     </li> */}

                  </ul>

               </div>

            </nav>
            <div className="collapse" id="collapseExample">
               <div className=" container">
                  <form className="d-flex">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                     <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
               </div>
            </div>
         </div>
      )
   }
}

export default Navbar;