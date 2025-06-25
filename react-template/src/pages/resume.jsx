import React from 'react'

const Resume = () => {
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
    {/* Resume Section */}
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Brandon Johnson</h4>
              <p>
                <em>
                  Innovative and deadline-driven Graphic Designer with 3+ years
                  of experience designing and developing user-centered
                  digital/print marketing material from initial concept to
                  final, polished deliverable.
                </em>
              </p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>
            {/* Edn Resume Item */}
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master of Fine Arts &amp; Graphic Design</h4>
              <h5>2015 - 2016</h5>
              <p>
                <em>Rochester Institute of Technology, Rochester, NY</em>
              </p>
              <p>
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
                iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
                nerada porti sand markend
              </p>
            </div>
            {/* Edn Resume Item */}
            <div className="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p>
                <em>Rochester Institute of Technology, Rochester, NY</em>
              </p>
              <p>
                Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                reiciendis et quis Eius vel ratione eius unde vitae rerum
                voluptates asperiores voluptatem Earum molestiae consequatur
                neque etlon sader mart dila
              </p>
            </div>
            {/* Edn Resume Item */}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior graphic design specialist</h4>
              <h5>2019 - Present</h5>
              <p>
                <em>Experion, New York, NY </em>
              </p>
              <ul>
                <li>
                  Lead in the design, development, and implementation of the
                  graphic, layout, and production communication materials
                </li>
                <li>
                  Delegate tasks to the 7 members of the design team and provide
                  counsel on all aspects of the project.{" "}
                </li>
                <li>
                  Supervise the assessment of all graphic materials in order to
                  ensure quality and accuracy of the design
                </li>
                <li>
                  Oversee the efficient use of production project budgets
                  ranging from $2,000 - $25,000
                </li>
              </ul>
            </div>
            {/* Edn Resume Item */}
            <div className="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p>
                <em>Stepping Stone Advertising, New York, NY</em>
              </p>
              <ul>
                <li>
                  Developed numerous marketing programs (logos,
                  brochures,infographics, presentations, and advertisements).
                </li>
                <li>
                  Managed up to 5 projects or tasks at a given time while under
                  pressure
                </li>
                <li>
                  Recommended and consulted with clients on the most appropriate
                  graphic design
                </li>
                <li>
                  Created 4+ design presentations and proposals a month for
                  clients and account managers
                </li>
              </ul>
            </div>
            {/* Edn Resume Item */}
          </div>
        </div>
      </div>
    </section>
    {/* /Resume Section */}
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

export default Resume
