/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  images: {
    domains: ["picsum.photos", "images.unsplash.com"],
  },
};

export default withPlaiceholder(nextConfig);
