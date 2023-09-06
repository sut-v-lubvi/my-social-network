import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsRedirect = (state) => {
  return {
    isLogin: state.authData.isLogin,
  };
};

export const withAuthRedirect = (Component) => {
  class RedirectedComponent extends React.Component {
    render() {
      if (!this.props.isLogin) {
        return <Navigate to={"/login"} />;
      }
      return <Component {...this.props} />;
    }
  }
  let ConnectedAuthRedirectedComponents = connect(mapStateToPropsRedirect)(
    RedirectedComponent
  );
  return ConnectedAuthRedirectedComponents;
};
