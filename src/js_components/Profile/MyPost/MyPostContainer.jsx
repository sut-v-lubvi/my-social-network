import { newPostInStateActionCreator } from "../../../redux/profileReducer";
import {
  getNewPostText,
  getPosts,
  getProfile,
} from "../../../redux/profileSelectors";
import MyPost from "./MyPost";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: getNewPostText(state),
    posts: getPosts(state),
    profile: getProfile(state),
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost(textPost) {
      dispatch(newPostInStateActionCreator(textPost));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
