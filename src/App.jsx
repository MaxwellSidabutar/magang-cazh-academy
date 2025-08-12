import './App.css';
import './styles/Home.css';
import parse from 'html-react-parser';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar';
import { aboutusSection } from './data/aboutussection.jsx';
import { machineSection } from './data/machinesection.jsx';
import Machine from './components/Machine.jsx';
import ClientSlider from './components/clientSlider.jsx';
import Contact from './components/contact.jsx';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // durasi animasi
      once: false, // animasi hanya sekali
      offset: 50, // jarak sebelum animasi dimulai
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="wrapper">

        {/* home */}
        <section id="home" data-aos="fade-up">
          <img src="images/logo.png" alt="Home Logo" className='logohome' />
          <div className="kolom">
            <h2 className='beranda'>CV. Bungur Jaya</h2>
            <p className='beranda'>Solusi Percetakan Industri Terpercaya di Indonesia sejak 1977</p>
            <p className='contactus'><a href="" className="tbl-pink">Contact Us</a></p>
          </div>
        </section>

        {/* About Us */}
        <section id="aboutsus">
          <div className="kolom">
            <div className="aboutuscontent" data-aos="fade-right">
              {parse(aboutusSection.contect)}
            </div>
          </div>
          <img src="images/about us.png" className='about-us-image' data-aos="fade-left" />
        </section>

        {/* Printing Tech */}
        <section id="tutors" data-aos="fade-up">
          <div className="tengah">
            <div className="kolom">
              {parse(machineSection.content)}
            </div>
            <Machine />
          </div>
        </section>

        {/* Trusted By */}
        <section id='trusted' data-aos="zoom-in">
          <div className="tengah">
            <div className="kolom">
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
        <section data-aos="zoom-in">
      <Contact />
        </section>
      </div>
      <div>
        <section id='footer' data-aos="fade-up-left">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
