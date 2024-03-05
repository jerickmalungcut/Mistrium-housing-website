import { useState } from "react";
import Logo from "../../assets/Logo.png";
import { navIcons, navLinks } from "../../utils/data";
import { Link } from "react-scroll";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import MobileNav from "./MobileNav";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-10 bg-white ">
      {/* To check the responsiveness of website */}
      {isMenuOpen && (
        <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      <nav className="container flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <ul className=" hidden md:flex md:flex-row gap-6">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link to={item.id} smooth spy offset={-80} className="menu-item">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex gap-6">
          {navIcons.map((item) => (
            <div key={item.name} className="cursor-pointer">
              <img src={item.img} alt={item.name} />
            </div>
          ))}
        </div>

        {/* Mobile Navigation Menu */}
        <button
          onClick={toggleMenu}
          className="w-12 h-12 bg-black text-white flex justify-center items-center md:hidden"
        >
          {isMenuOpen ? (
            <IoIosCloseCircle size={25} />
          ) : (
            <HiMenuAlt3 size={25} />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navigation;
