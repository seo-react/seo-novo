import React from "react";
import Link from "next/link";
import Image from "next/image";
import BackgroundOne from "../../../public/assets/img/hero/hero-bg-1.png";
import Rocket from "../../../public/assets/img/hero/rocket.png";
import Ranking from "../../../public/assets/img/hero/ranking.png";
import GoogleIcon from "../../../public/assets/img/icon/google.svg";
import FacebookIcon from "../../../public/assets/img/icon/facebook-two.svg";
import TwitterIcon from "../../../public/assets/img/icon/twitter.svg";

const HeroOne = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de busca aqui
  };

  return (
    <div className="hero-one position-relative">
      {/* Imagem de fundo otimizada */}
      <Image
        src={BackgroundOne}
        alt="Plano de fundo do herói"
        fill
        priority
        className="object-cover z-0"
        style={{ position: "absolute", top: 0, left: 0 }}
      />

      <div className="hero-one__wrapper position-relative z-1">
        <div className="hero-one__animation-1">
          <Image src={Rocket} alt="Foguete animado" width={100} height={100} />
        </div>
        <div className="hero-one__animation-2">
          <Image src={Ranking} alt="Gráfico de ranking" width={623} height={694} />
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-12 col-xl-7 col-lg-12 col-md-12 col-sm-12">
              <div className="hero-one__content wow fadeInLeft" data-wow-delay=".3s">
                <h2>
                  Discover{" "}
                  <span className="hero-highlighter-1">
                    Your Business
                    {/* SVG mantido como está */}
                    {/* ... */}
                  </span>
                  <br /> SEO Solution.
                </h2>
                <p>
                  Maecenas egret risks qualm Cohabiter diapaus magna egret vehicular <br />
                  pellentesque lobortis iaculis felis viverra sit amet.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="hero__input">
                    <i className="fa-regular fa-magnifying-glass"></i>
                    <input type="text" placeholder="Analyze any website or app" aria-label="Search input" />
                    <button type="submit" className="hero-btn-1 rr-btn-style-1" aria-label="Search">
                      Search
                    </button>
                  </div>
                </form>

                <div className="hero-popular-search">
                  <span>Popular:</span>
                  <ul>
                    <li>
                      <Link href="#">
                        <Image src={GoogleIcon} alt="Ícone do Google" width={20} height={20} /> Google.com
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Image src={FacebookIcon} alt="Ícone do Facebook" width={20} height={20} /> Facebook.com
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <Image src={TwitterIcon} alt="Ícone do Twitter" width={20} height={20} /> Twitter.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
