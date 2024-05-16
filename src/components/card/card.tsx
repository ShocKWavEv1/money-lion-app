import Image from "next/image";
import { CardProps } from "./model";
import { FiHeart } from "react-icons/fi";
import s from "./card.module.scss";
import Avatar from "../avatar/avatar";
import { handleDate } from "@/utils/utils";

const FeedCard: React.FC<CardProps> = ({
  data,
  handleFullView,
  handleCurrentPost,
}) => {
  const { textData, imageUri, comments, metadata } = data;
  return (
    <div
      key={textData.title}
      className={s.card_container}
      aria-hidden="true"
      onClick={() => {
        handleCurrentPost(data);
        handleFullView();
      }}
    >
      <div className={s.card_header_container}>
        <div className={s.card_header_avatar_container}>
          <Avatar width={30} height={30} textData={textData} />
          <div className={s.card_header_user_container}>
            {textData.author.first} {textData.author.last}
            <div className={s.card_header_date_container}>
              {handleDate(metadata.publishDate)}
            </div>
          </div>
        </div>
        <div className={s.card_header_icon_container}>
          <FiHeart fontSize="18px" />
        </div>
      </div>
      <div className={s.card_image_container}>
        <Image
          src={imageUri}
          alt="title"
          width={200}
          height={250}
          layout="cover"
          className={s.card_image}
        />
      </div>
      <div className={s.card_body_container}>
        <div className={s.card_body_title_container}>
          <div className={s.card_body_title}>
            {textData.title ? textData.title : "-"}
          </div>
          <div className={s.card_body_subtitle}>
            {textData.subTitle ? textData.subTitle : "-"}
          </div>
        </div>
        <div className={s.card_body_text_snippet}>{textData.body}</div>
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
