import "../styles/Navbar.css";
import { Link } from "react-scroll";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lockNavbar = useRef(false); // gunakan ref, bukan state
  const lastY = useRef(window.scrollY);

  // Fungsi untuk mengunci navbar selama scroll otomatis
  const handleMenuClick = () => {
    lockNavbar.current = true;
    setTimeout(() => {
      lockNavbar.current = false;
    }, 1500); // timeout lebih lama agar navbar tetap terkunci selama scroll otomatis ke bawah
  };

  useEffect(() => {
    const handleScroll = () => {
      if (lockNavbar.current) return; // baca dari ref, bukan state
      if (window.scrollY <= 0) {
        setShowNavbar(true);
      } else if (window.scrollY - lastY.current > 10) {
        setShowNavbar(false);
      } else if (lastY.current - window.scrollY > 10) {
        setShowNavbar(true);
      }
      lastY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <div className="wrapper">
        <div className="logo">
          <a href="">Bungur Jaya.</a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={handleMenuClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="aboutsus"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={handleMenuClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="tutors"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={handleMenuClick}
              >
                Printing Tech
              </Link>
            </li>
            <li>
              <Link
                to="trusted"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={handleMenuClick}
              >
                Trusted By
              </Link>
            </li>
            <li>
              <Link
                to="info"
                smooth={true}
                duration={500}
                offset={-80}
                className="tbl-biru"
                onClick={handleMenuClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
