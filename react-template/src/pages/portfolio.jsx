import Masonry1 from '../assets/masonry-portfolio/masonry-portfolio-1.jpg';
import Masonry2 from '../assets/masonry-portfolio/masonry-portfolio-2.jpg';
import Masonry3 from '../assets/masonry-portfolio/masonry-portfolio-3.jpg';
import Masonry4 from '../assets/masonry-portfolio/masonry-portfolio-4.jpg';
import Masonry5 from '../assets/masonry-portfolio/masonry-portfolio-5.jpg';
import Masonry6 from '../assets/masonry-portfolio/masonry-portfolio-6.jpg';
import Masonry7 from '../assets/masonry-portfolio/masonry-portfolio-7.jpg';
import Masonry8 from '../assets/masonry-portfolio/masonry-portfolio-8.jpg';
import Masonry9 from '../assets/masonry-portfolio/masonry-portfolio-9.jpg';

const Portfolio = () => {
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
    {/* Portfolio Section */}
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Card</li>
            <li data-filter=".filter-branding">Web</li>
          </ul>
          {/* End Portfolio Filters */}
          <div
            className="row gy-4 isotope-container aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img
                src={Masonry1}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
                  title="App 1"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img
                src={Masonry2}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
                  title="Product 1"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img
                src={Masonry3}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
                  title="Branding 1"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img
                src={Masonry4}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                  title="App 2"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img
                src={Masonry5}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Product 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                  title="Product 2"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img
                src={Masonry6}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Branding 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                  title="Branding 2"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img
                src={Masonry7}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                  title="App 3"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img
                src={Masonry8}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Product 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                  title="Product 3"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img
                src={Masonry9}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Branding 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                  title="Branding 2"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}
          </div>
          {/* End Portfolio Container */}
        </div>
      </div>
    </section>
    {/* /Portfolio Section */}
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

  )
}

export default Portfolio;
