import React, { useState } from 'react';
import NavMenu from './NavMenu';
import Sidebar from './sidebar';
import Link from 'next/link';
import Image from 'next/image';

const HeaderOne = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header>
        <div className="header-top-border"></div>
        <div id="header-sticky" className="header-1">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-12 col-xl-12 col-lg-12">
                <div className="header__main-content-wrapper header-padding d-flex align-items-center justify-content-between p-relative">
                  {/* Logo */}
                  <div className="header__main-left">
                    <div className="header__logo">
                      <Link href="/" className="logo-dark">
                        <Image
                          src="/assets/img/logo/logo.png"
                          alt="Logo da empresa"
                          width={140}
                          height={40}
                          priority
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Menu principal */}
                  <div className="main-menu d-none d-xl-block">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>

                  {/* Ações à direita */}
                  <div className="header__main-right">
                    <div className="user-login d-md-block d-none">
                      <i className="fa-regular fa-user"></i>
                      <Link href="/login">Login</Link>
                    </div>
                    <Link
                      href="/contact"
                      className="header-btn-1 rr-btn-style-1 d-md-block d-none"
                    >
                      Get in Touch
                    </Link>
                    <button
                      onClick={() => setIsActive(true)}
                      className="side-toggle d-lg-block d-xl-none"
                      aria-label="Abrir menu lateral"
                      role="button"
                    >
                      <span className="menu__bar">
                        <span className="bar-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      <div className="body-overlay"></div>
    </>
  );
};

export default HeaderOne;
