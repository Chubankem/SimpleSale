import React from "react";
import {
   BrowserRouter as Router,
   Routes,
   Route
} from "react-router-dom";

import Dit from '../../components/test/Dit';
import Me from '../../components/test/Me';
import May from '../../components/test/May';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';



class Main extends React.Component {

   render() {



      return (
         <div className="App">
            <Router>
               <Navbar />
               <Routes>
                  <Route path="/Dit" element={<Dit />} />
                  <Route path="/me" element={<Me />} />
                  <Route path="/may" element={<May />} />
               </Routes>
            </Router>
         </div>

      )
   }


}
}

export default Main;