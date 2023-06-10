import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
     <nav>
      <NavContent setMenuOpen={setMenuOpen} />
    </nav>
    <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
    <AiOutlineMenu />
  </button>
    </>
   
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({setMenuOpen}) => (
  <>
    <h2>Vikas.</h2>
    <div>
      <a href="#home"  onClick={() => setMenuOpen(false)}>Home</a>
      <a href="#work"  onClick={() => setMenuOpen(false)}>Work</a>
      <a href="#timeline"  onClick={() => setMenuOpen(false)}>Experience</a>
      <a href="#services"  onClick={() => setMenuOpen(false)}>Services</a>
      <a href="#testimonial"  onClick={() => setMenuOpen(false)}>Testimonial</a>
      <a href="#contact"  onClick={() => setMenuOpen(false)}>Contact</a>
    </div>
    <a href="mailto:sonivikas142@gmail.com"  onClick={() => setMenuOpen(false)}>
      <button>Email</button>  
    </a>
  </>
);
export default Header;
