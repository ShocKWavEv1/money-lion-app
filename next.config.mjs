/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  images: {
    domains: ["picsum.photos"],
  },
};

export default withPlaiceholder(nextConfig);
