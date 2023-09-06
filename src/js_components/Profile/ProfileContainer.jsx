import { connect } from "react-redux";
import Profile from "./Profile";
import React, { useEffect } from "react";
import {
  addProfile,
  getStatus,
  statusUpdate,
} from "../../redux/profileReducer";
import { addCurrentUserIDFromURLAC } from "../../redux/UsersReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getUserIdFromUrl } from "../../redux/usersSelectors";
import { getProfile, getStatusUser } from "../../redux/profileSelectors";
import { getLoginInfo } from "../../redux/authSelectors";

const ProfileContainer = ({ params, addProfile, getStatus, ...props }) => {
  useEffect(() => {
    addProfile(params.userId);
    getStatus(params.userId);
  }, []);

  return <Profile {...props} />;
};

let mapStateToProps = (state) => {
  return {
    profile: getProfile(state),
    userId: getUserIdFromUrl(state),
    isLogin: getLoginInfo(state),
    statusUser: getStatusUser(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    addProfile,
    getStatus,
    statusUpdate,
    addCurrentUserIDFromURLAC,
  }),
  withAuthRedirect
)(ProfileContainer);
