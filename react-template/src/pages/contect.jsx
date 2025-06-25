import React from 'react'

const Contect = () => {
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
    {/* Contact Section */}
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <i className="bi bi-geo-alt flex-shrink-0" />
                <div>
                  <h3>Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              {/* End Info Item */}
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <i className="bi bi-telephone flex-shrink-0" />
                <div>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
              {/* End Info Item */}
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                </div>
              </div>
              {/* End Info Item */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                frameBorder={0}
                style={{ border: 0, width: "100%", height: 270 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-field"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject-field"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    id="message-field"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
    {/* /Contact Section */}
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

export default Contect;
