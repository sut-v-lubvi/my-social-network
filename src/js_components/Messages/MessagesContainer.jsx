import React from "react";
import {
  newMessageCreator,
  symbolInMessageCreator,
} from "../../redux/messageReducer";
import Messages from "./Messages";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addSymbolInMessage(symbolInMessagePole) {
      dispatch(symbolInMessageCreator(symbolInMessagePole));
    },
    addMessages() {
      dispatch(newMessageCreator());
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
