"use client";
import { useState } from "react";
import FeedCard from "../card/card";
import { FeedPostsProps } from "./model";
import EmptyState from "../emptyState/emptyState";
import ModalPost from "../modalPost/modalPost";
import s from "./feedPosts.module.scss";

const FeedPosts: React.FC<FeedPostsProps> = ({ contentCards }) => {
  const [isModal, setModal] = useState<boolean>(false);
  const [currentPost, setCurrentPost] = useState<any>();

  return (
    <div className={s.feed_posts_container}>
      <div className={s.grid_feed_container}>
        {contentCards?.map((item: any, idx: number) => {
          return (
            <FeedCard
              data={item}
              key={item.title}
              handleFullView={() => setModal(!isModal)}
              handleCurrentPost={(post: any) => setCurrentPost(post)}
            />
          );
        })}
      </div>
      {contentCards.length === 0 && (
        <EmptyState
          title="Houston we have a problem!"
          description="It seems like theres is no data to display"
        />
      )}
      {isModal && currentPost && (
        <ModalPost
          currentPost={currentPost}
          setModal={() => setModal(!isModal)}
        />
      )}
    </div>
  );
};

export default FeedPosts;
