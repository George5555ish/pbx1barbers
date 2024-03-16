 import React, {useRef,useState,useEffect} from 'react'
 import { motion } from "framer-motion";
 import img from '../../../public/images/catflower.jpg';
 import yesImg from '../../../public/images/dance.gif';
 import noImg from '../../../public/images/catgun.jpg';
 import Image from 'next/image';
 import StyledButton from '../../components/StyledButton/index';
 const flip = {
    hidden: {
      transform: "scale(0) rotateX(-360deg)",
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      transform: " scale(1) rotateX(0deg)",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      transform: "scale(0) rotateX(360deg)",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
 function ValentinesCard({handleClose}) {

    const [response, setResponse] = useState('neutral')
    const [reset, setReset] = useState(false)
    // const [randomTop, setRandomTop] = useState(0)
    // const [randomLeft, setrandomLeft] = useState(10)
    
    const [noCount, setNoCount] = useState(0);
    const noRef = useRef(null)
    const containerRef = useRef(null)
    const showMessage = (response) => {
if (response === 'Yes'){
    setResponse(response)
} else if (response === 'No'){
    if (noCount === 5){
        setReset(true)
        setTimeout(()=> {
            handleClose() 
                if (typeof window !== "undefined") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                } 
        }, 3000)
        return;
    }
    if (noRef.current){
        setResponse(response)
        setNoCount(noCount +1)
        const noButton = noRef.current;
        const maxWidth = containerRef.current.offsetWidth - noButton.offsetWidth;
        const maxHeight = containerRef.current.offsetHeight - noButton.offsetHeight;
        noButton.style.position = "absolute";
        // console.log(noRef.current);

         // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // console.log(noButton.getBoundingClientRect())
    // console.log(containerRef.current.getBoundingClientRect())
    console.log(randomX)
    console.log(randomY)
    // Apply new coordinates to the button
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY+ 'px';
    // setRandomTop(randomY)
    // setrandomLeft(randomX)
    }
}
    }

    useEffect(() => {
    }, [])
   return (
    <motion.div
    onClick={(e) => e.stopPropagation()}   
    className="val-card orange-gradient"
    variants={flip}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
     <div className="container">
        <div className="Mainprompt" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", 
            overflow: "hidden"
        }}>
        <Image className="images" style={{borderRadius: '12px'}}
                                    src={response === 'neutral' ? img: response === 'Yes' ? yesImg : response === 'No' ? noImg: img} 
                                    width={200}
                                    height={250}
                                    alt="image" 
                                />
           {reset ? <div style={{padding: '20px'}}>
            <p className="hh" id="name" style={{color: "#fff", fontWeight: 'bold'}}>Okay You clicked No {noCount} times.</p>
            <p className="hh" id="name" style={{color: "#fff", fontWeight: 'bold'}}>Let's start from the top and see if you change your mind</p>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
           </div> :<div ref={containerRef} style={{padding: 30, position: 'relative', }}>
           {response !== 'Yes' && <h1 className="hh" id="name" style={{color: '#eee'}}>Will you be my Valentine Mish mush?{';)'}</h1>}
 
            {response !== 'Yes' &&  <div className="buttons">
            <div style={{
        width: "160px",
        textAlign: "center", 
      }}>
      <StyledButton     buttonTextInitial={"Yes"}
        buttonTextFinal={"Wait Really? :)"}
        onPress={() => {
            showMessage('Yes')
        }} />
      </div>
      <div  ref={noRef} style={{
        width: "160px",
        textAlign: "center", 
      }}>
      <StyledButton     buttonTextInitial={"No"}
        buttonTextFinal={"Wait Really? :("}
        onPress={() => {
            showMessage('No')
        }} />
      </div>  
            </div> }
            {response === 'No' && <div   id="no-message">
                <p style={{color: '#eee'}}>The no button is just for visuals &#128529;&#128529;  </p>
            </div>}
           {response === 'Yes' && <div   id="yes-message">
           <iframe src="https://giphy.com/embed/S5h4gvxxc1qlG" width="320" height="304" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-dance-S5h4gvxxc1qlG"></a></p>
                <p  style={{color: '#eee', fontWeight: 'bold', fontSize: 22}}>YAY! See you on the 14th, babygirl.😘😘</p>
            </div>}
           </div>}
        </div>
    </div>
  </motion.div>
   )
 }
 
 export default ValentinesCard