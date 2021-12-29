import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

// style
import { ToTopContainer } from "./ToTop.style";

export const ToTop = () => {
  const ToTopRef = useRef();
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setY(window.scrollY);
      try {
        if (y > 800) {
          ToTopRef.current.style.display = "flex";
        } else {
          ToTopRef.current.style.display = "none";
        }
      } catch (e) {
        console.log("ToTop Button is not Working");
      }
    });
  }, [y]);

  return (
    <ToTopContainer
      ref={ToTopRef}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <div className="arrow">
        <Image
          src="/icons/down-arrow.png"
          alt="to top button"
          width={20}
          height={15}
        />
      </div>
    </ToTopContainer>
  );
};
