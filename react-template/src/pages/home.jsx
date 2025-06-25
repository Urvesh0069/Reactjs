import Heroimg from "../assets/hero-bg.jpg";

const Home = () => {
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center light-background sticky-top"
      >
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <a
            href="/"
            className="logo d-flex align-items-center me-auto me-xl-0 text-decoration-none"
          >
            <h1 className="sitename">Kelly</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="/" className="active text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about.html" className="text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/resume.html" className="text-decoration-none">
                  Resume
                </a>
              </li>
              <li>
                <a href="/services.html" className="text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio.html" className="text-decoration-none">
                  Portfolio
                </a>
              </li>

              <li className="dropdown">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-decoration-none"
                >
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Dropdown 1
                    </a>
                  </li>

                  <li className="dropdown">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-decoration-none"
                    >
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li>
                        <a href="#" className="text-decoration-none">
                          Deep Dropdown 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          Deep Dropdown 2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          Deep Dropdown 3
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          Deep Dropdown 4
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          Deep Dropdown 5
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#" className="text-decoration-none">
                      Dropdown 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Dropdown 3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Dropdown 4
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/contact.html" className="text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>

            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>

          <div className="header-social-links">
            <a href="#" onClick={(e) => e.preventDefault()} className="twitter">
              <i className="bi bi-twitter-x" />
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="facebook"
            >
              <i className="bi bi-facebook" />
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="instagram"
            >
              <i className="bi bi-instagram" />
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="linkedin"
            >
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section">
          <img
            src={Heroimg}
            alt="Kelly Adams stands confidently in a bright, welcoming environment"
            data-aos="fade-in"
          />
          <div
            className="container text-center"
            data-aos="zoom-out"
            data-aos-delay={100}
          >
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="kelly">Kelly Adams</h2>
                <p>I'm a professional illustrator from San Francisco</p>
                <a href="/about.html" className="btn-get-started">
                  About Me
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* /Hero Section */}
      </main>

      <footer id="footer" className="footer light-background">
        <div className="container">
          <div className="copyright text-center">
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
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="bi bi-twitter-x" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="bi bi-facebook" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="bi bi-instagram" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="bi bi-linkedin" />
            </a>
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
            Distributed by <a href="https://themewagon.com">ThemeWagon</a>
          </div>
        </div>
      </footer>

      {/* Scroll Top */}
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
};

export default Home;
