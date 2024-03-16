"use client";
import styles from "./page.module.scss";
import ZoomParallax from "../components/ZoomParallax/index";
import Card from "../components/Card/index";
import TextOpacity from "../components/TextOpacity/index";
import TopPageContent from "../components/TopPageContent/index";
import Footer from "../components/Footer/index";
import Paragraph from "../components/TextOpacity/Paragraph";
import StyledButton from "../components/StyledButton/index";
import { Inter, Roboto_Mono } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { projects } from "../data";
import { useScroll } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import ValentinesCard from "../components/Modal";
import { ArrowLeft } from "react-feather";
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});
const log = console.log;
export const framerLogger = (label) =>
  log(`%c${label}: animation complete`, "color: red");
export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => {
    setModalOpen(false);
    console.log("closed");
  };
  const open = () => {
    setModalOpen(true);
    console.log("open");
  };
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const paragraph =
    "You was probs wondering why i asked for the pics. Well this is it. :)";
  const paragraph2 =
    "With all these being said, there's somet I been tryna ask for a while tho";

  return (
    <main className={styles.main}>
 
      <TopPageContent />
     <div className="lower-content">
     <div style={{ height: "20vh" }}></div>
     <ZoomParallax />
      <TextOpacity /> 
     </div>
    </main>
  );
}

const ModalContainer = ({ children, label }) => (
  // Enables the animation of components that have been removed from the tree
  <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    wait={true}
  >
    {children}
  </AnimatePresence>
);

function CardsContainer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main ref={container} className={styles.main}>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
