import React, { useRef,useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {useNavigationHook} from "../../hooks/useNavigationHook";
import Picture1 from "../../../public/images/pb1xbarbers/123.webp";
import Picture2 from "../../../public/images/pb1xbarbers/662.webp";
import Picture3 from "../../../public/images/pb1xbarbers/1225.webp";
import Picture4 from "../../../public/images/pb1xbarbers/2111.webp";
import Picture5 from "../../../public/images/pb1xbarbers/5222.webp";
import Picture6 from "../../../public/images/pb1xbarbers/5595.webp";
import Picture7 from "../../../public/images/pb1xbarbers/6652.webp";
import Picture8 from "../../../public/images/pb1xbarbers/552198.webp";
import HeaderComp from "../Header/index"
import { useRouter } from 'next/navigation';
function TopPageContent() {
  gsap.registerPlugin(useGSAP);

  const container = useRef();
  const router = useRouter()
  useEffect(() => {
    // gsap code here...
    gsap.set("nav", { y: -100 });
    gsap.set(".letter-wrapper", { y: 300 });
    gsap.set(".item-copy-wrapper p", { y: 70 });
    gsap.set("nav",  {opacity:  1})
    gsap.set(".header-item-1",  {opacity:  1})
    gsap.set(".header-item-2",  {opacity:  1})
    gsap.set(".item-copy-wrapper",  {opacity:  1})
    gsap.set(".letter",  {opacity:  1})
    gsap.defaults({ duration: 1, ease: "power3.out" });
    const tl = gsap.timeline({
      delay: 0.5,
    });
    tl.to(".letter-wrapper", { y: 0, stagger: 0.1 })
      .to(".header-item-1", {
        left: "14vw",
      })
      .to(
        ".header-item-2",
        {
          right: "10vw",
        },
        "<"
      )
      .to(
        ".item-main .item-img img",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
       
        },
        "<"
      )
      .to(".header-item-1", {
        left: 0,
        scale: 1,
      })
      .to(
        ".header-item-2",
        {
          right: 0,
          scale: 1,
        },
        "<"
      )
      .to(
        ".item-main .item-img img",
        {
          scale: 1,
        },
        "<"
      )
      .to(
        ".item-side .item-img",
        { 
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          stagger: 0.1,
        },
        "<"
      )
      .to(
        ".header",
        {
          bottom: "-.5em",
        },
        "<"
      )
      .to(
        ".item-copy-wrapper p",
        {
          y: 0,
          stagger: 0.05,
        },
        "<"
      ).to("nav", { y: 0 }, "<").to(".lower-content",{
        display:"block"
      }).to(".lobster-class",{
        y: 40,
        opacity:  0,
      }).to(".lobster-class",{
        fontFamily:  "Lobster",  
        y: 0,opacity: 1, color: "#f00e0e"
      }).to(".header", {
        boxShadow: "10px 10px 63px 0px rgba(224, 42, 18, 1)"
      }, "<")
      ;
  }, []); // <-- scope is for selector text (optional)
  function useNavigationHook (routeToGo){ 
router.push(routeToGo, { scroll: false }); 
}
  return (
    <div
      style={{
        //   justifyContent: "center",
        // display: "flex",
        // height: "100vh",
      }}
    >
    
      {/* <HeaderComp /> */}
      <div className="top_content_container">
        <div className="items">
          <div className="items-col">
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p   style={{  }}>Clean Shave</p>
                </div>
                <div className="item-copy-wrapper">
                  <p style={{ }}>30 minutes</p>
                </div>
              </div>
              <div className="item-img">
                <Image src={Picture3} alt="image" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Hair Colouring</p>
                </div>
                <div className="item-copy-wrapper">
                <p style={{ }}>30 minutes</p>

                </div>
              </div>
              <div className="item-img">
                <Image src={Picture2} alt="image" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Fade cut</p>
                </div>
                <div className="item-copy-wrapper">
                <p style={{ }}>30 minutes</p>

                </div>
              </div>
              <div className="item-img">
                <Image src={Picture6} alt="image" />
              </div>
            </div>
          </div>
          <div className="items-col">
            <div className="item item-main"> 
              <div className="item-copy">
                <div className="item-copy-wrapper" onClick={() => useNavigationHook("/contact")}>
                  <p>Book an Appointment</p>
                </div>
                <div className="item-copy-wrapper">
                {/* <p style={{ }}>30 minutes</p> */}
           
                </div>
              </div>
              <div className="item-img">
                <Image src={Picture1} alt="image" />
              </div>
            </div>
          </div>
          <div className="items-col lower-item-col">
            <div className="item item-side"> 
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Buzz Cut</p>
                </div>
                <div className="item-copy-wrapper">
                <p style={{ }}>30 minutes</p>

                </div>
              </div>
              <div className="item-img">
                <Image src={Picture5} alt="image" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Hot towel Shave</p>
                </div>
                <div className="item-copy-wrapper">
                <p style={{ }}>30 minutes</p>

                </div>
              </div>
              <div className="item-img">
                <Image src={Picture7} alt="image" />
              </div>
            </div>
            <div className="item item-side"> 
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Hair shape-up</p>
                </div>
                <div className="item-copy-wrapper">
                <p style={{ }}>30 minutes</p>

                </div>
              </div>
              <div className="item-img">
                <Image src={Picture8} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header-item header-item-1">
          <div className="letter">
            <div className="letter-wrapper">P</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">B</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper lobster-class">X</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">1</div>
          </div>
        </div>

        <div className="header-item header-item-2">
          <div className="letter">
            <div className="letter-wrapper">B</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">AR</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">BE</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">RS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPageContent;
