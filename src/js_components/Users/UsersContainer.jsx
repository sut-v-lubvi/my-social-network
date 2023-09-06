import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  unFollow,
  addCurrentPage,
  nextNumberPage,
  prevNumberPage,
  toggleDisable,
  getUsers,
  addNextUsers,
} from "../../redux/UsersReducer";
import {
  getAllUsers,
  getButtonStatus,
  getCurrentNumberOfPage,
  getFullNumberOfPage,
  getPageSize,
  getTwist,
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  addUsersCurrentPage = (p) => {
    this.props.addNextUsers(p, this.props.pageSize);
  };

  render() {
    return (
      <Users
        users={this.props.users}
        fullNumberOfPage={this.props.fullNumberOfPage}
        currentNumberOfPage={this.props.currentNumberOfPage}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        addUsersCurrentPage={this.addUsersCurrentPage}
        nextNumberPage={this.props.nextNumberPage}
        prevNumberPage={this.props.prevNumberPage}
        twist={this.props.twist}
        buttonStatus={this.props.buttonStatus}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getAllUsers(state),
    fullNumberOfPage: getFullNumberOfPage(state),
    currentNumberOfPage: getCurrentNumberOfPage(state),
    pageSize: getPageSize(state),
    twist: getTwist(state),
    buttonStatus: getButtonStatus(state),
  };
};

export default connect(mapStateToProps, {
  follow,
  unFollow,
  addNextUsers,
  addCurrentPage,
  nextNumberPage,
  prevNumberPage,
  toggleDisable,
  getUsers,
})(UsersContainer);
