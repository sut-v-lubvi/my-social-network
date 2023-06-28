import {
  texInTextareaActionCreator,
  newPostInStateActionCreator,
} from "../../../redux/profileReducer";
import React from "react";
import MyPost from "./MyPost";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.postsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addTextPost(textPostInTextarea) {
      dispatch(texInTextareaActionCreator(textPostInTextarea));
    },
    addNewPost() {
      dispatch(newPostInStateActionCreator());
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
