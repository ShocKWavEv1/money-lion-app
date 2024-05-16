"use client";

import { HeartLikeProps } from "./model";
import { useState } from "react";
import { RxHeart, RxHeartFilled } from "react-icons/rx";

const HeartLike: React.FC<HeartLikeProps> = () => {
  const [hasLike, setHasLike] = useState<boolean>(false);

  const handleHeartClick = (e: any) => {
    e.stopPropagation();
    setHasLike(!hasLike);
  };

  return (
    <div onClick={handleHeartClick}>
      {hasLike ? (
        <RxHeartFilled fontSize="20px" color="red" />
      ) : (
        <RxHeart fontSize="20px" color="black" />
      )}
    </div>
  );
};

export default HeartLike;
