"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import "./header.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useScrollPosition from "./hooks/useScrollPosition"
import logo from "../../../public/images/pb1xbarbers/pb1x-logo.png";
import Image from "next/image";
import {THEME_COLOR} from "../../theme/index"
function HeaderComp() {
  const menuLinks = [
    { path: "/", label: "Home" },
    // { path: "/about", label: "About" },
    // { path: "/services", label: "Services" },
    { path: "/contact", label: "Book An Appointment" },
  ];

  const container = useRef();
  const tl = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  gsap.registerPlugin(useGSAP);
  const {showBar} = useScrollPosition()  
  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)",

          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );
  useEffect(() => {
 if (isMenuOpen){
    tl.current.play();
 } else {
    tl.current.reverse()
 }
  }, [isMenuOpen]);
  return (
    <nav>
      <div className="menu-container" ref={container}>
        <div className={showBar ? "menu-bar animate":"menu-bar"}>
          <div className="menu-logo">
            <Link href="/">
                <Image src={logo} width={120} />
            </Link>
          </div>
          <div className="phoneNumber">
            <p>Call us at: <strong style={{color:showBar ? '#fff': THEME_COLOR.primary}}>07300892028</strong></p>
          </div>
          <div className="menu-open" onClick={toggleMenu}>
            <p>Menu</p>
          </div>
        </div>
        <div className="menu-overlay">
          <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/">
            <Image src={logo} width={120} />
            </Link>
          </div>
          <div className="menu-open" onClick={toggleMenu}>
            <p>Close</p>
          </div>
          </div>
          <div className="menu-close-icon">
            {/* <p>x</p> */}
          </div>
          <div className="menu-copy">
            <div className="menu-links">
              {menuLinks.map((link, idx) => {
                return (
                  <div className="menu-link-item" key={idx}>
                    <div className="menu-link-item-holder">
                      <Link href={link.path} className="menu-link" onClick={toggleMenu}>
                        {link.label}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="menu-info">
              <div className="menu-info-col">
                {/* <a href="#">X &#8599;</a> */}
                <a href="https://www.google.com/maps/place/Pbx1barbers/@51.4401723,0.3645051,17z/data=!3m1!4b1!4m6!3m5!1s0x47d8b799a924389b:0x696cc1e6b85d8168!8m2!3d51.4401723!4d0.3645051!16s%2Fg%2F11l6ffml1k?entry=ttu" target={"_blank"}>Google &#8599;</a>
                <a href="#">Instagram &#8599;</a>
              </div>
              <div className="menu-info-col">
              <p>35a Darnley Rd, Gravesend DA11 0SD</p>
                <p>info@pb1xbarbers.com</p>
                <p>07300892028</p>
              </div>
            </div>
          </div>
          <div className="menu-preview">
            {/* <p>View Showreel</p> */}
          </div>
        </div>
      </div>
      {/* <nav>
        <div className="logo">
          <a href="#">PB1X BARBERS</a>
        </div> 
        <div className="contact">
          <a href="#">Menu</a>
        </div>
      </nav> */}
    </nav>
  );
}

export default HeaderComp;
