// import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dit from '../components/test/Dit';


function App() {
  return (
    <Router>
      <div className="App">

        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to='/' className='navbar-brand'>SimpleSale</Link>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to='/Dit'>Dit</Link></li>
              <li><Link to='/me'>me</Link></li>
              <li><Link to='/may'>may</Link></li>
            </ul>
          </div>
        </nav>


        <Routes>
          <Route path="/Dit" element={<Dit />} />

        </Routes>

      </div>
    </Router>

  );
}

export default App;
