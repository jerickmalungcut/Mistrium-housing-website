import { MdOutlineArrowRightAlt } from "react-icons/md";
import Amora from "../../assets/amora.png";
import Facebook from "../../assets/facebook.png";
import Youtube from "../../assets/youtube.png";
import Instagram from "../../assets/instagram.png";
import Logo from "../../assets/Logo.png";

const Contact = () => {
  return (
    <div id="contact" name="contact">
      <div className="container flex justify-between items-center">
        {/* Text */}
        <div className="flex flex-col gap-12">
          <div className="text-orange-500 border border-orange-500 rounded-full text-center w-40 text-sm py-1 font-bold">
            Mistrium Interior
          </div>
          <h2 className="text-2xl md:text-5xl max-w-[600px] font-bold text-textPrimary">
            Signup to receive updates about new products
          </h2>
          {/* Input Email Address */}
          <form className="flex justify-between items-center max-w-[500px] border border-primary bg-tertiary rounded-full pl-6">
            <input
              type="text"
              placeholder="Your business email.."
              className="bg-transparent"
            />
            <button
              type="submit"
              className="flex justify-center items-center gap-4 text-white bg-primary py-4 px-6 rounded-full"
            >
              Get Started <MdOutlineArrowRightAlt color="" />
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="hidden md:block">
          <img src={Amora} alt="Amora Chair" className="object-contain" />
        </div>
      </div>

      {/* Footer */}
      <div className="container flex justify-between border-b border-textTertiary mb-12">
        {/* Social Icons */}
        <div className="flex gap-6 items-center">
          <img src={Facebook} alt="Facebook icon" />
          <img src={Youtube} alt="Youtube icon" />
          <img src={Instagram} alt="Instagram icon" />
        </div>

        {/* Links */}
        <ul className="hidden md:flex justify-center items-center gap-6 font-semibold">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Faqs</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      <div className="container text-center text-sm text-textSecondary">
        Copyright &copy; 2024. All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;
