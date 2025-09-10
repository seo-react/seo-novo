import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-style-1">
        {/* Imagens decorativas */}
        {[
          { className: 'footer-style-1__animation1', src: '/assets/img/footer/dot-line.svg' },
          { className: 'footer-style-1__animation2', src: '/assets/img/footer/angle.svg' },
          { className: 'footer-style-1__animation3', src: '/assets/img/footer/squre.svg' },
          { className: 'footer-style-1__animation4', src: '/assets/img/footer/star.svg' },
          { className: 'footer-style-1__animation5', src: '/assets/img/footer/dot-line-2.svg' },
        ].map((img, index) => (
          <div key={index} className={img.className}>
            <Image src={img.src} alt="shape" width={60} height={60} />
          </div>
        ))}

        <div className="container">
          <div className="footer-top pt-120 pb-55">
            <div className="row">
              {/* Coluna 1: Logo e redes */}
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                <div className="footer__widget footer-col-1 mb-30">
                  <div className="footer-widget__column footer-widget__about">
                    <div className="footer-widget__about-logo">
                      <Link href="/">
                        <Image src="/assets/img/logo/logo.png" alt="Logo" width={140} height={40} />
                      </Link>
                    </div>
                    <p className="footer-widget__about-text">
                      Morbi pharetra, eros sed euismod pellentesque, nulla risus lobortis purus, quis maximus.
                    </p>
                    <div className="social-hvr">
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna 2: Services */}
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-5">
                <div className="footer__widget mb-30">
                  <h3 className="footer-widget__title">Services</h3>
                  <ul>
                    <li><Link href="/">SEO Marketing</Link></li>
                    <li><Link href="/">SEO Services</Link></li>
                    <li><Link href="/">Pay Per Click</Link></li>
                    <li><Link href="/">Social Media</Link></li>
                    <li><Link href="/">SEO Audit</Link></li>
                  </ul>
                </div>
              </div>

              {/* Coluna 3: Community */}
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-5">
                <div className="footer__widget mb-30">
                  <h3 className="footer-widget__title">Community</h3>
                  <ul>
                    <li><Link href="/">Our Product</Link></li>
                    <li><Link href="/">Documentation</Link></li>
                    <li><Link href="/">Our Services</Link></li>
                    <li><Link href="/">Company</Link></li>
                    <li><Link href="/">What We Do?</Link></li>
                  </ul>
                </div>
              </div>

              {/* Coluna 4: Newsletter */}
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                <div className="footer__widget footer-col-4 mb-30">
                  <h3 className="footer-widget__title">Subscribe Newsletter</h3>
                  <div className="footer-subscriber-form">
                    <form action="#">
                      <input type="text" placeholder="Enter your email" />
                      <button type="submit"><i className="fa-light fa-arrow-right"></i></button>
                    </form>
                  </div>
                  <div className="subscriber-agreement">
                    <input type="checkbox" name="agree" id="agree" />
                    <p>I agree to the <Link href="/">Privacy Policy</Link>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rodapé final */}
          <div className="footer-bottom">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="copyright">
                  <p>© 2025 SEO Rocket All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-bottom-menu">
                  <ul>
                    <li><Link href="/">Privacy Policy</Link></li>
                    <li><Link href="/">Term of Service</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
