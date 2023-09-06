import { newMessageCreator } from "../../redux/messageReducer";
import Messages from "./Messages";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getMessage } from "../../redux/messagesSelectors";

let mapStateToProps = (state) => {
  return {
    messagePage: getMessage(state),
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessages(newMessage) {
      dispatch(newMessageCreator(newMessage));
    },
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Messages);
