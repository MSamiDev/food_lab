import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import "../assets/scss/components/nav.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Nav = () => {
  const nav_container = useRef(null);
  const nav_list = useRef(null);
  const nav_item = useRef(null);
  const nav_item_a1 = useRef(null);
  const nav_item_a2 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(nav_item_a1.current, {
      scrollTrigger: {
        trigger: nav_item_a1.current,
        start: "250% 10%",
        end: "600% 10%",
        scrub: 0.5,
        // pin: true,
        // markers: true,
      },
      color: "white",
    });
    gsap.to(nav_item_a2.current, {
      scrollTrigger: {
        trigger: nav_item_a2.current,
        start: "250% 10%",
        end: "600% 10%",
        scrub: 0.5,
        // pin: true,
        // markers: true,
      },
      color: "white",
    });
  }, []);

  return (
    <div className="Nav">
      <div className="nav_container" ref={nav_container}>
        <ul className="nav_list" ref={nav_list}>
          <li className="nav_item item1" ref={nav_item}>
            <Link className="nav_item_a" ref={nav_item_a1} to="/menu">
                Menu
              
            </Link>
          </li>
          <li className="nav_item item2" ref={nav_item}>
            <Link className="nav_item_a" ref={nav_item_a2} to="/contact-us">
                Contact Us
              
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
