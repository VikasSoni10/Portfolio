import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  const clientCountAnimation = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const projectCountAnimation = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Vikas Soni
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Coder", "A Developer", "An Engineer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:sonivikas142@gmail.com">Hire Me</a>
            <a href="#work">
              Projects
              <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +
              {ratio < 2.2 && (
                <motion.span
                  ref={clientCount}
                  whileInView={clientCountAnimation}
                >
                  100
                </motion.span>
              )}
            </p>
            <span>Clients Worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +
                {ratio < 2.2 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={projectCountAnimation}
                  >
                    500
                  </motion.span>
                )}
              </p>
              <span> Projects Done</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>sonivikas142@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="vikas" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
