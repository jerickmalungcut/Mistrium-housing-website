import PropTypes from "prop-types";
import Logo from "../../assets/Logo.png";
import { navLinks } from "../../utils/data";

const MobileNav = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleScroll = (sectionId) => {
    if (isMenuOpen) setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 w-screen ">
      <div className="w-1/2 h-screen flex flex-col gap-8 p-8 bg-white">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="w-40" />

        {/* Mobile Links */}
        <ul className="flex flex-col gap-6">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a onClick={() => handleScroll(item.id)} className="menu-item">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay Background */}
      <div
        onClick={() => {
          setIsMenuOpen(false);
        }}
        className="w-screen h-screen bg-black/70 fixed inset-0 -z-10"
      ></div>
    </div>
  );
};

MobileNav.propTypes = {
  isMenuOpen: PropTypes.bool,
  setIsMenuOpen: PropTypes.func,
};

export default MobileNav;
