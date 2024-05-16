"use client";

import { useEffect, useState } from "react";
import FeedCard from "../card/card";
import { FeedPostsProps } from "./model";
import EmptyState from "../emptyState/emptyState";
import ModalPost from "../modalPost/modalPost";
import s from "./feedPosts.module.scss";
import Filters from "../filters/filters";

const FeedPosts: React.FC<FeedPostsProps> = ({ contentCards }) => {
  const [filteredPosts, setFilteredPosts] = useState<any>(contentCards);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [currentPost, setCurrentPost] = useState<any>();
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    if (searchValue.length >= 3) {
      const filtered: any = contentCards?.filter((post: any) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(contentCards);
    }
  }, [searchValue]);

  useEffect(() => {
    console.log(filteredPosts);
  }, [filteredPosts]);

  return (
    <div className={s.feed_posts_container}>
      <Filters
        isSticky
        searchValue={searchValue}
        setSearchValue={(val: string) => setSearchValue(val)}
      />
      {filteredPosts?.length !== 0 && (
        <div className={s.grid_feed_container}>
          {filteredPosts?.map((item: any, idx: number) => {
            return (
              <FeedCard
                data={item}
                key={item.title}
                handleFullView={() => setIsModal(!isModal)}
                handleCurrentPost={(post: any) => setCurrentPost(post)}
              />
            );
          })}
        </div>
      )}
      {filteredPosts.length === 0 && (
        <EmptyState
          title="Houston we have a problem!"
          description="It seems like theres is no data to display"
        />
      )}
      {isModal && currentPost && (
        <ModalPost
          currentPost={currentPost}
          setModal={() => setIsModal(!isModal)}
        />
      )}
    </div>
  );
};

export default FeedPosts;
