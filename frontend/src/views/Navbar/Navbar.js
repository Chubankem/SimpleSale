import React from 'react';
import {
   Link,
   NavLink
} from "react-router-dom";

class Navbar extends React.Component {
   render() {
      return (
         <div>
            <nav className="navbar navbar-inverse">
               <div className="container-fluid">
                  <div className="navbar-header">
                     <Link to='/' className='navbar-brand'>SimpleSale</Link>
                  </div>
                  <ul className="nav navbar-nav">
                     <li><NavLink to='/Dit'>Dit</NavLink></li>
                     <li><NavLink to='/Con'>Con</NavLink></li>
                     <li><NavLink to='/Me'>Me</NavLink></li>
                  </ul>
               </div>
            </nav>
         </div>


      )
   }
}

export default Navbar;