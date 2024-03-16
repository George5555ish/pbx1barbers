import styles from './styles.module.scss';
import Picture1 from "../../../public/images/pb1xbarbers/123.webp";
import Picture2 from "../../../public/images/pb1xbarbers/662.webp";
import Picture3 from "../../../public/images/pb1xbarbers/1225.webp";
import Picture4 from "../../../public/images/pb1xbarbers/2111.webp";
import Picture5 from "../../../public/images/pb1xbarbers/5222.webp";
import Picture6 from "../../../public/images/pb1xbarbers/5595.webp";
import Picture7 from "../../../public/images/pb1xbarbers/6652.webp";
import Picture8 from "../../../public/images/pb1xbarbers/552198.webp";
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture6,
            scale: scale5
        },
        {
            src: Picture5,
            scale: scale6
        },
        {
            src: Picture7,
            scale: scale8
        },
        {
            src: Picture8,
            scale: scale9
        }
    ]

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map( ({src, scale}, index) => {
                        return <motion.div key={index} style={{scale}} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={src}
                                    // style={{
                                    //     transformOrigin:
                                    // }}
                                    fill 
                                    alt="image"
                                    // placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
