import { useEffect, useRef } from "react";
import "../styles/packaging.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PackagingSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 2000, // durasi animasi
      once: false, // animasi hanya sekali
      offset: 20, // jarak sebelum animasi dimulai
    });
    const el = scrollRef.current;
    let index = 0;

    const autoSlide = setInterval(() => {
      if (!el) return;
      index++;
      if (index >= el.children.length) {
        index = 0;
      }
      el.scrollTo({
        left: index * el.clientWidth, // geser 1 gambar penuh
        behavior: "smooth",
      });
    }, 2000); // ganti tiap 2 detik

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section className="packaging-section">
      <h2 className="packaging-title" data-aos="fade-up">
        Packaging
      </h2>
      <div className="packaging-grid" ref={scrollRef}>
        <div>
          <img src="/packaging/pack1.png" alt="Packaging 1" />
        </div>
        <div>
          <img src="/packaging/pack2.png" alt="Packaging 2" />
        </div>
        <div>
          <img src="/packaging/pack3.png" alt="Packaging 3" />
        </div>
        <div>
          <img src="/packaging/pack4.png" alt="Packaging 4" />
        </div>
      </div>
    </section>
  );
}
