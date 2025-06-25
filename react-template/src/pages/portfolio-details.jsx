import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import App1 from "../assets/portfolio/app-1.jpg";
import Product1 from "../assets/portfolio/product-1.jpg";
import Branding1 from "../assets/portfolio/branding-1.jpg";
import Books1 from "../assets/portfolio/books-1.jpg";

const Portfolio_details = () => {
  return (
    <>
      <header id="header" className="header d-flex align-items-center light-background sticky-top">
  <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
    <a href="/" className="logo d-flex align-items-center me-auto me-xl-0 text-decoration-none">
      <h1 className="sitename">Kelly</h1>
    </a>

    <nav id="navmenu" className="navmenu">
      <ul>
        <li><a href="/" className="active text-decoration-none">Home</a></li>
        <li><a href="/about.html" className="text-decoration-none">About</a></li>
        <li><a href="/resume.html" className="text-decoration-none">Resume</a></li>
        <li><a href="/services.html" className="text-decoration-none">Services</a></li>
        <li><a href="/portfolio.html" className="text-decoration-none">Portfolio</a></li>

        <li className="dropdown">
          <a href="#" onClick={(e) => e.preventDefault()} className="text-decoration-none">
            <span>Dropdown</span>{" "}
            <i className="bi bi-chevron-down toggle-dropdown" />
          </a>
          <ul>
            <li><a href="#" className="text-decoration-none">Dropdown 1</a></li>

            <li className="dropdown">
              <a href="#" onClick={(e) => e.preventDefault()} className="text-decoration-none">
                <span>Deep Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul>
                <li><a href="#" className="text-decoration-none">Deep Dropdown 1</a></li>
                <li><a href="#" className="text-decoration-none">Deep Dropdown 2</a></li>
                <li><a href="#" className="text-decoration-none">Deep Dropdown 3</a></li>
                <li><a href="#" className="text-decoration-none">Deep Dropdown 4</a></li>
                <li><a href="#" className="text-decoration-none">Deep Dropdown 5</a></li>
              </ul>
            </li>

            <li><a href="#" className="text-decoration-none">Dropdown 2</a></li>
            <li><a href="#" className="text-decoration-none">Dropdown 3</a></li>
            <li><a href="#" className="text-decoration-none">Dropdown 4</a></li>
          </ul>
        </li>

        <li><a href="/contact.html" className="text-decoration-none">Contact</a></li>
      </ul>

      <i className="mobile-nav-toggle d-xl-none bi bi-list" />
    </nav>

    <div className="header-social-links">
      <a href="#" onClick={(e) => e.preventDefault()} className="twitter"><i className="bi bi-twitter-x" /></a>
      <a href="#" onClick={(e) => e.preventDefault()} className="facebook"><i className="bi bi-facebook" /></a>
      <a href="#" onClick={(e) => e.preventDefault()} className="instagram"><i className="bi bi-instagram" /></a>
      <a href="#" onClick={(e) => e.preventDefault()} className="linkedin"><i className="bi bi-linkedin" /></a>
    </div>
  </div>
</header>

      <main className="main">
        {/* Portfolio Details Section */}
        <section id="portfolio-details" className="portfolio-details section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio Details</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-8">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop={true}
                  className="portfolio-details-slider"
                >
                  <SwiperSlide>
                    <img src={App1} alt="App 1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Product1} alt="Product 1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Branding1} alt="Branding 1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Books1} alt="Books 1" />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="col-lg-4">
                <div
                  className="portfolio-info"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: Web design
                    </li>
                    <li>
                      <strong>Client</strong>: ASU Company
                    </li>
                    <li>
                      <strong>Project date</strong>: 01 March, 2020
                    </li>
                    <li>
                      <strong>Project URL</strong>:{" "}
                      <a href="#">www.example.com</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="portfolio-description"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <h2>Exercitationem repudiandae officiis neque suscipit</h2>
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                    itaque inventore commodi labore quia quia. Exercitationem
                    repudiandae officiis neque suscipit non officia eaque itaque
                    enim. Voluptatem officia accusantium nesciunt est omnis
                    tempora consectetur dignissimos. Sequi nulla at esse enim
                    cum deserunt eius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Portfolio Details Section */}
      </main>
      <footer id="footer" className="footer light-background">
        <div className="container">
          <div className="copyright text-center ">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Kelly</strong>{" "}
              <span>
                All Rights Reserved
                <br />
              </span>
            </p>
          </div>
          <div className="social-links d-flex justify-content-center">
            <a href="">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="">
              <i className="bi bi-facebook" />
            </a>
            <a href="">
              <i className="bi bi-instagram" />
            </a>
            <a href="">
              <i className="bi bi-linkedin" />
            </a>
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you've purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
            Distributed by <a href="“https://themewagon.com">ThemeWagon</a>
          </div>
          <a href="“https://themewagon.com"></a>
        </div>
        <a href="“https://themewagon.com"></a>
      </footer>
      <a href="“https://themewagon.com">{/* Scroll Top */}</a>
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Preloader */}
      {/* <div id="preloader" /> */}
      {/* Vendor JS Files */}
      {/* Main JS File */}
    </>
  );
};

export default Portfolio_details;
