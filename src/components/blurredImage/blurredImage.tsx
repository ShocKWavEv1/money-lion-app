"use server";
import Image from "next/image";
import { BlurredImageProps } from "./model";
import getBase64 from "@/app/api/getBase64";

const BlurredImage: React.FC<BlurredImageProps> = async ({ image }) => {
  const base64: any = await getBase64(image);

  return (
    <Image
      src={image}
      alt="title"
      width={200}
      height={250}
      placeholder="blur"
      blurDataURL={base64}
    />
  );
};

export default BlurredImage;
