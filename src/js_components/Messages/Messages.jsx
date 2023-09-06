import React from "react";
import s from "./Messages.module.css";
import { NavLink, Navigate } from "react-router-dom";
import Sender from "./Sender/Sender";
import DialogMessage from "./DialogMessage/DialogMessage";
import { useForm } from "react-hook-form";

const Messages = (props) => {
  if (!props.isLogin) {
    return <Navigate to={"/login"} />;
  }

  let dialogsNames = props.messagePage.dialogsNamesData.map((dN) => (
    <Sender key={dN.id} name={dN.name} id={dN.id} />
  ));
  let dialogsMessages = props.messagePage.dialogsMessagesData.map((dM) => (
    <DialogMessage key={dM.id} messageText={dM.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.senders}>{dialogsNames}</div>
      <div className={s.messages}>
        <div className={s.messages__conteiner}>{dialogsMessages}</div>

        <MessageForm
          addSymbolInMessage={props.addSymbolInMessage}
          symbolInMessagePole={props.messagePage.symbolInMessagePole}
          addMessages={props.addMessages}
        />
      </div>
    </div>
  );
};

const MessageForm = (props) => {
  const submit = (data) => {
    console.log(data);
    props.addMessages(data.message);
  };
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className={s.new__message__conteiner}>
        <div className={s.textarea}>
          <input cols="50" rows="3" name="message" {...register("message")} />
        </div>
        <div className={s.button}>
          <button onClick={props.goMessages}>Add message</button>
        </div>
      </div>
    </form>
  );
};

export default Messages;
