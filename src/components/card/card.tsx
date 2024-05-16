import React from "react";
import Image from "next/image";
import { CardProps } from "./model";
import s from "./card.module.scss";
import Avatar from "../avatar/avatar";
import { handleDate } from "@/utils/utils";
import HeartLike from "../heartLike/heartLike";

const FeedCard: React.FC<CardProps> = ({
  data,
  handleFullView,
  handleCurrentPost,
}) => {
  const { title, subTitle, body, imageUri, comments, publishDate, author } =
    data;

  return (
    <div
      key={title}
      className={s.card_container}
      aria-hidden="true"
      onClick={(e: any) => {
        handleCurrentPost(data);
        handleFullView();
      }}
    >
      <div className={s.card_header_container}>
        <div className={s.card_header_avatar_container}>
          <Avatar width={30} height={30} author={author} />
          <div className={s.card_header_user_container}>
            {author.first} {author.last}
            <div className={s.card_header_date_container}>
              {handleDate(publishDate)}
            </div>
          </div>
        </div>
        <div className={s.card_header_icon_container}>
          <div className={s.card_header_icon}>
            <HeartLike />
          </div>
        </div>
      </div>
      <div className={s.card_image_container}>
        <Image
          src={imageUri}
          alt="title"
          width={200}
          height={250}
          className={s.card_image}
        />
      </div>
      <div className={s.card_body_container}>
        <div className={s.card_body_title_container}>
          <div className={s.card_body_title}>{title ? title : "-"}</div>
          <div className={s.card_body_subtitle}>
            {subTitle ? subTitle : "-"}
          </div>
        </div>
        <div className={s.card_body_text_snippet}>{body}</div>
      </div>
      <div className={s.card_footer_container}>
        <div>{comments.length} Comments</div>
        <div className={s.card_footer_likes_container}>
          {comments.length} Likes
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
