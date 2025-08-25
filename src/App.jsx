import "./App.css";
import "./styles/Home.css";
import parse from "html-react-parser";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar";
import { machineSection } from "./data/machinesection.jsx";
import Machine from "./components/Machine.jsx";
import ClientSlider from "./components/clientSlider.jsx";
import Contact from "./components/contact.jsx";
import Packaging from "./components/packaging.jsx";
import Aboutus from "./components/aboutus.jsx";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // durasi animasi
      once: false, // animasi hanya sekali
      offset: 200, // jarak sebelum animasi dimulai
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <div className="wrapper">
          {/* home */}
          <section id="home" data-aos="fade-up">
            <img src="images/logo.png" alt="Home Logo" className="logohome" />
            <div className="kolom">
              <h2 className="beranda">CV. BUNGUR JAYA</h2>
              <p className="beranda">
                Solusi Percetakan Industri Terpercaya di Indonesia sejak 1977
              </p>
              <p className="contactus">
                <a href="#contact" className="tbl-pink">
                  Contact Us
                </a>
              </p>
            </div>
          </section>

          {/* About Us */}
          <section id="aboutsus">
            <Aboutus />
          </section>

          {/* Packaging */}
          <section id="packaging" data-aos="fade-up">
            <Packaging />
          </section>

          {/* Printing Tech */}
          <section id="tutors" data-aos="fade-up">
            <div className="tengah">
              <div className="kolom">{parse(machineSection.content)}</div>
              <Machine />
            </div>
          </section>

          {/* Trusted By */}
          <section id="trusted" data-aos="fade-up">
            <div className="tengah">
              <div className="kolomclient">
                <p className="deskripsi">Our Top Partners</p>
                <h2>Partners</h2>
                <hr />
                <p>Our Valued Partners</p>
              </div>
              <div>
                <ClientSlider />
              </div>
            </div>
          </section>
        </div>
        <div>
          <section data-aos="zoom-in" id="contact">
            <Contact />
          </section>
        </div>
        <div>
          <section id="footer" data-aos="fade-up">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
