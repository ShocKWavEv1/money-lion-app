"use client";

import Image from "next/image";
import s from "./avatar.module.scss";
import { AvatarProps } from "./model";
import { handleDynamicBackgroundColor, handleNameAvatar } from "@/utils/utils";
import { useState } from "react";

const Avatar: React.FC<AvatarProps> = ({ width, height, image, author }) => {
  const [backgroundColor] = useState<string>(() =>
    handleDynamicBackgroundColor()
  );

  return (
    <div
      className={s.avatar_container}
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
      }}
    >
      {image ? (
        <Image
          src={image}
          alt=""
          width={width}
          height={height}
          style={{ width: "100%", objectFit: "cover", borderRadius: "50em" }}
        />
      ) : (
        handleNameAvatar(author.first, author.last)
      )}
    </div>
  );
};

export default Avatar;
