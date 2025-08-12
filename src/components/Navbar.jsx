import '../styles/Navbar.css'
import { Link } from "react-scroll";


function Navbar() {
  return (
    <>
        <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>Bungur Jaya.</a></div>
            <div className="menu">
                <ul>
                    <li><Link to="home" smooth={true} duration={500} offset={-80}><a href="#home">Home</a></Link></li>
                    <li><Link to="aboutsus" smooth={true} duration={500} offset={-80}><a href="#aboutus">About Us</a></Link></li>
                    <li><Link to="tutors" smooth={true} duration={500} offset={-80}><a href="#machine">Printing Tech</a></Link></li>
                    <li><Link to="trusted" smooth={true} duration={500} offset={-80}><a href="#partners">Trusted By</a></Link></li>
                    <li><Link to="info" smooth={true} duration={500} offset={-80}><a href="#contactus" className="tbl-biru">Contact Us</a></Link></li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
