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
        console.log("To Top Button Is Not Working...");
      }
    });
  }, [y]);

  return (
    <ToTopContainer
      ref={ToTopRef}
      onClick={(e) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        e.target.classList.add("hide");
      }}
    >
      <Image
        src="/icons/down-arrow.png"
        alt="to top button"
        width={20}
        height={15}
      />
    </ToTopContainer>
  );
};
