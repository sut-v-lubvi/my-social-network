import s from "./Profile.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfilePhotoDescription from "./ProfilePhotoDescription/ProfilePhotoDescription";
import React from "react";

const Profile = (props) => {
  return (
    <div className={s.Content_block}>
      <ProfilePhotoDescription />
      <MyPostContainer />
    </div>
  );
};
export default Profile;
