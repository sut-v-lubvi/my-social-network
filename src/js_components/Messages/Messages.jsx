import React from "react";
import s from "./Messages.module.css";
import { NavLink } from "react-router-dom";
import Sender from "./Sender/Sender";
import DialogMessage from "./DialogMessage/DialogMessage";

const Messages = (props) => {
  let dialogsNames = props.messagePage.dialogsNamesData.map((dN) => (
    <Sender key={dN.id} name={dN.name} id={dN.id} />
  ));
  let dialogsMessages = props.messagePage.dialogsMessagesData.map((dM) => (
    <DialogMessage key={dM.id} messageText={dM.message} />
  ));

  let goSymbolInMessage = (e) => {
    let symbolInMessagePole = e.target.value;
    props.addSymbolInMessage(symbolInMessagePole);
  };

  let goMessages = () => {
    props.addMessages();
  };
  return (
    <div className={s.dialogs}>
      <div className={s.senders}>{dialogsNames}</div>
      <div className={s.messages}>
        <div className={s.messages__conteiner}>{dialogsMessages}</div>
        <div className={s.new__message__conteiner}>
          <div className={s.textarea}>
            <textarea
              onChange={goSymbolInMessage}
              cols="50"
              rows="3"
              value={props.messagePage.symbolInMessagePole}
            ></textarea>
          </div>
          <div className={s.button}>
            <button onClick={goMessages}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
