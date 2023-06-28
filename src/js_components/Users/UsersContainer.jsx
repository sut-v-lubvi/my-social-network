import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unFollowAC } from "../../redux/UsersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.findUsers.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow(id) {
      dispatch(unFollowAC(id));
    },
    unfollow(id) {
      dispatch(followAC(id));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
