import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './style.module.scss';

export default function Paragraph({paragraph}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

  const words = paragraph.split(" ")
  return (
    <p 
      ref={container}         
      className={styles.paragraph}
    >
    {
      words.map( (word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return <Word key={i} progress={scrollYProgress} currentWord={word} range={[start, end]}>{word}</Word>
      })
    }
    </p>
  )
}

const Word = ({children, progress, range,currentWord}) => {
  const opacity = useTransform(progress, range, [0, 1])
  return <span className={styles.word}>
    <span className={styles.shadow}>{children}</span>
    <motion.span style={{opacity: opacity, color: currentWord == 'Comfort' || currentWord == 'Professionalism' ? 'rgb(240, 14, 14, 1)': '#fff'}}>{children}</motion.span>
  </span>
}

