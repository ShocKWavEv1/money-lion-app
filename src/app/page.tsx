import Filters from "@/components/filters/filters";
import { Suspense } from "react";
import getData from "./api/getData";
import FeedPosts from "@/components/feedPosts/feedPosts";

export default async function Home() {
  const contentCards = await getData();

  return (
    <div className="main-container">
      <Filters isSticky />
      <Suspense fallback="loading...">
        <FeedPosts contentCards={contentCards} />
      </Suspense>
    </div>
  );
}
