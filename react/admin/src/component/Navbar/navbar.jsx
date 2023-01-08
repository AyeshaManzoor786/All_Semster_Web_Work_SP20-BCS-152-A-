import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import './12.png';
// import {logo} from "../../data/data.json";
const Navbar = () => {
    // const logo="12.png";
    return ( 
        <div className='Navbar'>
        {/* <div className="logo">
        <Link to='/home'>
         <img src={logo} alt="logo " />
        </Link>
        </div> */}
    <div>
        <Link to="/Mi Phones" className="navlink">Mi Phones</Link>
        <Link to="/Redmi Phones" className="navlink">Redmi Phones</Link>
        <Link to="/TV" className="navlink">TV</Link>
        <Link to="/Laptops" className="navlink">Laptops</Link>
        <Link to="/Fitness & LifeStyle" className="navlink">Fitness & LifeStyle</Link>
        <Link to="/Home" className="navlink">Home</Link>
        <Link to="/Radio" className="navlink">Radio</Link>
        <Link to="/Accessories" className="navlink">Accessories</Link>
     </div>

     <div className="search">
        <input type="text" name='search' placeholder='Search Products' />
     </div>
        
     </div>
     );
}
 
export default Navbar;