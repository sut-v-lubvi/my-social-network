import s from "./MyPost.module.css";
import Post from "./Post/Post";
import React, { useState } from "react";

const MyPost = (props) => {
  const [textPost, setTextPost] = useState("");
  let allPosts = props.posts.map((p) => (
    <Post
      key={p.id}
      messages={p.postText}
      likesCount={p.likesCount}
      profile={props.profile}
    />
  ));

  return (
    <div>
      <div className={s.conteiner__new__post}>
        <div className={s.text__pole}>
          <input
            onChange={(e) => {
              setTextPost(e.target.value);
            }}
            cols="40"
            rows="2"
            value={textPost}
          ></input>
        </div>
        <div className={s.button}>
          <button
            onClick={() => {
              props.addNewPost(textPost);
              setTextPost("");
            }}
          >
            Add Post
          </button>
        </div>
      </div>
      {allPosts}
    </div>
  );
};

export default MyPost;
