
import './App.css';
import PreNavbar from './component/PreNavbar/preNav.jsx';
import Navbar from './component/Navbar/navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
 <Router>
  <PreNavbar/>
  <Navbar/>
 </Router>
  );
}

export default App;
