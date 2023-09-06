import Twist from "../../../Users/Twist";
import s from "./Post.module.css";
const Post = (props) => {
  if (!props.profile) {
    return <Twist />;
  }
  return (
    <div>
      <div className={s.post}>
        <div className={s.avatar}>
          <img src={props.profile.photos.large}></img>
        </div>
        <div className={s.text}>
          <p>{props.messages}</p>
        </div>
      </div>
      <div className={s.like}>
        <p>Like: {props.likesCount}</p>
      </div>
    </div>
  );
};

export default Post;
