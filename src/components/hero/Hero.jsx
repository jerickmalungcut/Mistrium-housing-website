import HeroImg from "../../assets/hero-img.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container relative">
      <div className="container flex flex-col md:flex-row">
        {/* Hero Heading */}
        <div className="hero-text">
          {/* Heading */}
          <div className="heading">
            <h1>Modern Furniture For Modern Living Style</h1>
          </div>

          {/* Sub Heading */}
          <div className="heading-sub">
            <p>
              In unfeeling existence objection immediate repulsive on he in.
              Imprudence comparison uncommonly me he difficulty diminution
              resolution. Likewise proposal differed scarcely dwelling as on
              raillery.
            </p>

            <p>
              September few dependent extremity own continued and ten prevailed
              attending. Early to weeks we could. Do commanded an shameless we
              disposing do. Indulgence ten remarkably nor are impression out.
              Power is lived means oh every in we quiet.
            </p>
          </div>

          {/* Call To Action */}
          <div className="flex flex-col md:flex-row gap-4">
            <button>Request a Quote</button>

            <button>Watch Video</button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="img-container md:absolute right-0 -z-10">
          <img src={HeroImg} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
