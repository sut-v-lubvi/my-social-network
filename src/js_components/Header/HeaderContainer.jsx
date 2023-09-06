import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logOut } from "../../redux/authReducer";
import { getLoginInfo } from "../../redux/authSelectors";

function HeaderContainer({ logOut, isLogin }) {
  return <Header logOut={logOut} isLogin={isLogin} />;
}
let mapStateToProps = (state) => {
  return {
    isLogin: getLoginInfo(state),
  };
};

export default connect(mapStateToProps, { logOut })(HeaderContainer);
