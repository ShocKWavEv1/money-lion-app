import Image from "next/image";
import { ModalPostProps } from "./model";
import { FiChevronLeft } from "react-icons/fi";
import s from "./modalPost.module.scss";
import CommentItem from "../commentItem/commentItem";

const ModalPost: React.FC<ModalPostProps> = ({ currentPost, setModal }) => {
  const { title, subTitle, body, imageUri, comments } = currentPost;
  return (
    <div className={s.backdrop} onClick={() => setModal()} aria-hidden="true">
      <div
        aria-hidden="true"
        className={s.modal_card_container}
        onClick={(e: any) => e.stopPropagation()}
      >
        <div
          aria-hidden="true"
          className={s.modal_card_sticky_nav}
          onClick={() => setModal()}
        >
          <div className={s.modal_card_sticky_button}>
            <div className={s.modal_card_icon_container}>
              <FiChevronLeft fontSize={"22px"} />
            </div>
            Back to feed
          </div>
        </div>
        <div className={s.modal_card_image_container}>
          <Image
            className={s.modal_card_image}
            src={imageUri}
            alt="title"
            width={200}
            height={230}
          />
        </div>
        <div className={s.modal_card_body_container}>
          <div className={s.modal_card_title_container}>
            <div className={s.modal_card_title}>{title}</div>
            <div className={s.modal_card_subtitle}>{subTitle}</div>
          </div>
          <div className={s.modal_card_body_text_container}>{body}</div>
          <div className={s.modal_card_comments_container}>
            Comments: {comments.length}
          </div>
          <div className={s.modal_card_comments_list}>
            {comments?.map((item: any, idx: number) => {
              return <CommentItem comment={item} key={item.profilePic} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPost;
