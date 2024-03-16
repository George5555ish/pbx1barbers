"use client";
import Paragraph from "./Paragraph";
import Word from "./Word";
import Character from "./Character";
import BarbingServices from "../BarbingServices"
import Picture from "../../../public/images/pb1xbarbers/123.webp";
import Image from "next/image";
import "./style.module.scss"
const paragraph =
  "Of all the flowers in the garden, I managed to find one I actually like";
const paragraph2 = "Comfort and Professionalism to suit your hair needs";
const paragraph3 =
  "Just incase you need a reminder of how great you are, here's a few shots.";

export default function TextOpacity() {
  const words = paragraph.split(" ");
  return (
    <main>
      {/* <div style={{height: "80vh"}}></div>
        <Paragraph paragraph={paragraph}/> */}
      <div
        style={{
          // height: "55vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // width: "40vw",
          padding: 30, 
          // paddingTop: 50,  
        }}
      >
        {/* <Image src={Picture} alt="image" /> */}
        <Word paragraph={paragraph2} />
        
      </div>

      <BarbingServices /> 
    </main>
  );
}
