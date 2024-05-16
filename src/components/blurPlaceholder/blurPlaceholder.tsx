import Image from "next/image";
import { base64 } from "./constant";

export default async function DynamicBlur({
  image,
}: {
  readonly image: string;
}) {
  return (
    <Image
      src={image}
      alt={image}
      width={200}
      height={200}
      placeholder="blur"
      blurDataURL={base64}
      priority
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}
