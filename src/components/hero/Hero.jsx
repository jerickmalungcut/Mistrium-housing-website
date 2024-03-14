import HeroImg from "../../assets/hero-img.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container relative">
      <div className="container flex flex-col md:flex-row">
        {/* Hero Heading */}
        <div className="hero-text md:w-1/2 mt-14 flex flex-col gap-14">
          {/* Heading */}
          <div className="heading">
            <h1 className="text-4xl md:text-6xl font-bold text-textPrimary">
              Modern Furniture For Modern Living Style
            </h1>
          </div>

          {/* Sub Heading */}
          <div className="heading-sub flex flex-col gap-6 text-textSecondary text-sm md:text-base">
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
          <div className="flex flex-col md:flex-row gap-4 text-sm md:text-base items-center md:w-[80%]">
            <button className="bg-primary text-white py-6 px-8 w-full">
              Request a Quote
            </button>

            <button className="text-primary border border-primary py-6 px-8 w-full">
              Watch Video
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="img-container md:absolute right-0 -z-10 hidden md:block">
          <img src={HeroImg} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
