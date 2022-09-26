// import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Dit from '../components/test/Dit';
import Me from '../components/test/Me';
import May from '../components/test/May';
import Navbar from './Navbar/Navbar';


function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />

        <Routes>
          <Route path="/Dit" element={<Dit />} />
          <Route path="/me" element={<Me />} />
          <Route path="/may" element={<May />} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
