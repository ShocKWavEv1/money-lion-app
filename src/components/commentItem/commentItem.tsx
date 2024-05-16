import { CommentItemProps } from "./model";
import { formatLikes } from "@/utils/utils";
import Avatar from "../avatar/avatar";
import s from "./commentItem.module.scss";

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <div className={s.comment_container_list}>
      <div className={s.comment_list_header_container}>
        <Avatar width={35} height={35} image={comment.profilePic} />
        {comment.author}
      </div>
      <div className={s.comment_list_body}>{comment.text}</div>
      <div className={s.comment_list_likes_container}>
        {formatLikes(comment.likes)}
      </div>
    </div>
  );
};

export default CommentItem;
