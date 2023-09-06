import s from "./Profile.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfilePhotoDescription from "./ProfilePhotoDescription/ProfilePhotoDescription";
import React from "react";
import Twist from "../Users/Twist";
import { useParams } from "react-router-dom";

const Profile = ({
  statusUpdate,
  statusUser,
  profile,
  addCurrentUserIDFromURLAC,
}) => {
  const params = useParams();
  addCurrentUserIDFromURLAC(params);

  if (!profile) {
    return <Twist />;
  }
  return (
    <div className={s.Content_block}>
      <ProfilePhotoDescription
        statusUpdate={statusUpdate}
        statusUser={statusUser}
        profile={profile}
      />
      <MyPostContainer />
    </div>
  );
};
export default Profile;
