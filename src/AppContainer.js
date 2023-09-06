import React, { useEffect } from "react";
import App from "./App";
import { connect } from "react-redux";
import { addAuthData, initializationTC } from "./redux/authReducer";

function AppContainer({ initializationTC, initialization }) {
  useEffect(() => {
    initializationTC();
  }, []);

  return <App initialization={initialization} />;
}
let mapStateToProps = (state) => {
  return {
    initialization: state.authData.initialization,
  };
};

export default connect(mapStateToProps, { initializationTC })(AppContainer);
