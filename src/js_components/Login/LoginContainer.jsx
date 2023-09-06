import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import Login from "./Login";
import { Navigate } from "react-router-dom";
import { getUserIdFromUrl } from "../../redux/usersSelectors";
import { getLoginInfo } from "../../redux/authSelectors";

const LoginContainer = (props) => {
  console.log(props);
  if (props.isLogin) {
    // return <Navigate to={`/profile/${props.userId}`} />;
  }
  return <Login isLogin={props.isLogin} login={props.login} />;
};
let mapStateToProps = (state) => {
  return {
    isLogin: getLoginInfo(state),
    userId: getUserIdFromUrl(state),
  };
};
export default connect(mapStateToProps, { login })(LoginContainer);
