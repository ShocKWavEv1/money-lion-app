import Image from "next/image";
import s from "./avatar.module.scss";
import { AvatarProps } from "./model";
import { handleDynamicBackgroundColor, handleNameAvatar } from "@/utils/utils";

const Avatar: React.FC<AvatarProps> = ({ width, height, image, textData }) => {
  return (
    <div
      className={s.avatar_container}
      style={{
        width: width,
        height: height,
        backgroundColor: handleDynamicBackgroundColor(),
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
        handleNameAvatar(textData.author.first, textData.author.last)
      )}
    </div>
  );
};

export default Avatar;
