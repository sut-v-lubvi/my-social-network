const NEW_MESSAGE = "NEW_MESSAGE";

export const newMessageCreator = (newMessage) => {
  return { type: NEW_MESSAGE, newMessage };
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
};

let messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      let newMessage = action.newMessage;
      let lengthArray = state.dialogsMessagesData.length;
      return {
        ...state,
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
