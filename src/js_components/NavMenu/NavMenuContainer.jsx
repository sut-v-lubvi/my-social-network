import React from "react";
import { connect } from "react-redux";
import NavMenu from "./NavMenu";
import { getUserIdFromUrl } from "../../redux/usersSelectors";

export const NavMenuContainer = (props) => {
  return <NavMenu userId={props.userId} />;
};

const mapStateToProps = (state) => ({
  userId: getUserIdFromUrl(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuContainer);
