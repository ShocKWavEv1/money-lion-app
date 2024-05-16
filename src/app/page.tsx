import { Suspense } from "react";
import FeedPosts from "@/components/feedPosts/feedPosts";
import getData from "./api/getData/getData";

export default async function Home() {
  const contentCards = await getData();

  return (
    <div className="main-container">
      <Suspense fallback="loading...">
        <FeedPosts contentCards={contentCards} />
      </Suspense>
    </div>
  );
}
