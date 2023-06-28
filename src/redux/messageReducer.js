const SYMBOL_IN_MESSAGE_POLE = "SYMBOL_IN_MESSAGE_POLE";
const NEW_MESSAGE = "NEW_MESSAGE";

export const newMessageCreator = () => {
  return { type: NEW_MESSAGE };
};

export const symbolInMessageCreator = (symbolInMessagePole) => {
  return {
    type: SYMBOL_IN_MESSAGE_POLE,
    symbolInMessagePole: symbolInMessagePole,
  };
};

let initialState = {
  dialogsNamesData: [
    { id: 1, name: "Sasha" },
    { id: 2, name: "Masha" },
    { id: 3, name: "Fedya" },
    { id: 4, name: "Iliya" },
    ,
    { id: 5, name: "Ivan" },
  ],
  dialogsMessagesData: [
    { id: 1, message: "Hi bro" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Let`s paint)" },
  ],
  symbolInMessagePole: "",
};

let messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SYMBOL_IN_MESSAGE_POLE:
      return {
        ...state,
        symbolInMessagePole: action.symbolInMessagePole,
      };
    case NEW_MESSAGE:
      let newMessage = state.symbolInMessagePole;
      let lengthArray = state.dialogsMessagesData.length;
      return {
        ...state,
        symbolInMessagePole: "",
        dialogsMessagesData: [
          ...state.dialogsMessagesData,
          {
            id: lengthArray + 1,
            message: newMessage,
          },
        ],
      };
    default:
      return state;
  }
};

export default messageReducer;
