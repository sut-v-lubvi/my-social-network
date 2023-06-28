import s from "./MyPost.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPost = (props) => {
  let allPosts = props.posts.map((p) => (
    <Post key={p.id} messages={p.postText} likesCount={p.likesCount} />
  ));

  let goTextPost = (e) => {
    let textPostInTextarea = e.target.value;
    props.addTextPost(textPostInTextarea);
  };

  let goNewPost = () => {
    props.addNewPost();
  };
  return (
    <div>
      <div className={s.conteiner__new__post}>
        <div className={s.text__pole}>
          <textarea
            onChange={goTextPost}
            cols="40"
            rows="2"
            value={props.newPostText}
          ></textarea>
        </div>
        <div className={s.button}>
          <button onClick={goNewPost}>Add Post</button>
        </div>
      </div>
      {allPosts}
    </div>
  );
};

export default MyPost;
