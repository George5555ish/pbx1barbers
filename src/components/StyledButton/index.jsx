import { THEME_COLOR } from "../../theme";
import React, { useState } from "react";
 
function Button({ buttonTextInitial, buttonTextFinal, onPress }  ) {
  const singleButtonHeight = 45;
  const buttonPadding = 35;
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
    onClick={onPress}
      style={{
        background: THEME_COLOR.dark,
        // paddingTop: `${buttonPadding / 2}px`,

        borderRadius: 15,
        height: `${singleButtonHeight}px`,
        fontFamily: "fantasy",
        fontSize: "16px",
        margin: 0,
        padding: `0 ${buttonPadding}px`,  
        
        transition: '.45s ease-in-out',
        border: `2px solid ${THEME_COLOR.primary}` ,
        boxShadow: isHovered ?'4px -5px 30px -6px rgba(148,179,247,1)': 'none',
        overflowY: 'hidden',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div
        style={{
          height: `${singleButtonHeight}px`,
          color: THEME_COLOR.primary, 
          transition: '.45s ease-in-out',
          transform: isHovered ?`translateY(-${singleButtonHeight}px)`: `translateY(0px)`
          // padding: buttonPadding
        }}
      >
        <div
          style={{
            height: `${singleButtonHeight}px`,
            color: THEME_COLOR.primary,
            // border: "1px solid green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            // paddingTop:`${buttonPadding}px`,
            margin: 0,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          {buttonTextInitial}
        </div>
        <div
          style={{
            height: `${singleButtonHeight}px`,
            color: THEME_COLOR.primary,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            // border: "1px solid green",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          {buttonTextFinal}
        </div>
      </div>
    </div>
  );
}

export default Button;
