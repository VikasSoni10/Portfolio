import React from "react";
import {AiFillLinkedin, AiFillGithub, AiFillTwitterCircle, AiOutlineArrowUp} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/49004464?v=4"}
          alt="Founder"
        />
        <h2>Vikas Soni</h2>   
        <p>Motivation is temporary, Discipline lasts forever</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
            <a href="https://linkedin.com/in/vikas-soni142" target="blank">
            <AiFillLinkedin />
            </a>

            <a href="https://github.com/VikasSoni10" target="blank">
            <AiFillGithub />
            </a>

            <a href="https://twitter.com" target="blank">
            <AiFillTwitterCircle />
            </a>
            
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
