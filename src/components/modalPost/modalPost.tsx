import Image from "next/image";
import { ModalPostProps } from "./model";
import { FiChevronLeft } from "react-icons/fi";
import s from "./modalPost.module.scss";
import CommentItem from "../commentItem/commentItem";

const ModalPost: React.FC<ModalPostProps> = ({ currentPost, setModal }) => {
  return (
    <div className={s.backdrop} onClick={() => setModal()} aria-hidden="true">
      <div className={s.modal_card_container}>
        <div className={s.modal_card_sticky_nav}>
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
            src={currentPost?.imageUri}
            alt="title"
            width={200}
            height={230}
            layout="cover"
          />
        </div>
        <div className={s.modal_card_body_container}>
          <div className={s.modal_card_title_container}>
            <div className={s.modal_card_title}>
              {currentPost?.textData.title}
            </div>
            <div className={s.modal_card_subtitle}>
              {currentPost?.textData.subTitle}
            </div>
          </div>
          <div className={s.modal_card_body_text_container}>
            {currentPost?.textData.body}
          </div>
          <div className={s.modal_card_comments_container}>
            Comments: {currentPost?.comments.length}
          </div>
          <div className={s.modal_card_comments_list}>
            {currentPost.comments.map((item: any, idx: number) => {
              return <CommentItem comment={item} key={item.profilePic} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPost;
