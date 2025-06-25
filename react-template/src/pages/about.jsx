import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Profile_img from '../assets/profile-img.jpg';
import Testimonials1 from '../assets/testimonials/testimonials-1.jpg';
import Testimonials2 from '../assets/testimonials/testimonials-2.jpg';
import Testimonials3 from '../assets/testimonials/testimonials-3.jpg';
import Testimonials4 from '../assets/testimonials/testimonials-4.jpg';
import Testimonials5 from '../assets/testimonials/testimonials-5.jpg';

const About = () => {
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
    {/* About Section */}
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img
              src={Profile_img}
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="col-lg-8 content">
            <h2>UI/UX Designer &amp; Web Developer.</h2>
            <p className="fst-italic py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Birthday:</strong> <span>1 May 1995</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Phone:</strong> <span>+123 456 7890</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                    <span>New York, USA</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                    <span>30</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Degree:</strong> <span>Master</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Email:</strong> <span>email@example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* /About Section */}
    {/* Skills Section */}
    <section id="skills" className="skills section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                <span>HTML</span> <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>CSS</span> <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>JavaScript</span> <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
          </div>
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                <span>PHP</span> <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>WordPress/CMS</span> <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>Photoshop</span> <i className="val">55%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={55}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
          </div>
        </div>
      </div>
    </section>
    {/* /Skills Section */}
    {/* Stats Section */}
    <section id="stats" className="stats section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Facts</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start={0}
                data-purecounter-end={232}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Clients</p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start={0}
                data-purecounter-end={521}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Projects</p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start={0}
                data-purecounter-end={1453}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Hours Of Support</p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start={0}
                data-purecounter-end={32}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Workers</p>
            </div>
          </div>
          {/* End Stats Item */}
        </div>
      </div>
    </section>
    {/* /Stats Section */}
    {/* Testimonials Section */}
     {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="mySwiper"
          >
            {[Testimonials1, Testimonials2, Testimonials3, Testimonials4, Testimonials5].map((img, index) => {
              const testimonials = [
                {
                  name: 'Saul Goodman',
                  role: 'CEO & Founder',
                  text:
                    'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...'
                },
                {
                  name: 'Sara Wilsson',
                  role: 'Designer',
                  text:
                    'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid...'
                },
                {
                  name: 'Jena Karlis',
                  role: 'Store Owner',
                  text:
                    'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem...'
                },
                {
                  name: 'Matt Brandon',
                  role: 'Freelancer',
                  text:
                    'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim...'
                },
                {
                  name: 'John Larson',
                  role: 'Entrepreneur',
                  text:
                    'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor...'
                }
              ];

              return (
                <SwiperSlide key={index}>
                  <div className="testimonial-item">
                    <img src={img} className="testimonial-img" alt={testimonials[index].name} />
                    <h3>{testimonials[index].name}</h3>
                    <h4>{testimonials[index].role}</h4>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill" />
                      ))}
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>{testimonials[index].text}</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    {/* /Testimonials Section */}
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

export default About
