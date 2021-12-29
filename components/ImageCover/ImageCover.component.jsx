import React from "react";
import Image from "next/image";

export const ImageCover = ({ imageClass, imageUrl }) => {
  return (
    <div className={imageClass}>
      <Image
        src={imageUrl}
        alt="latest story"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};
