import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
      newPostText: "Я хааа",
      postsData: [
        { id: 1, postText: "Саламаленькуй тигры есть жи", likesCount: 387 },
        { id: 2, postText: "Я хааа бляяяя", likesCount: 743 },
      ],
    },
    messagePage: {
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
    },
  },
  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
// window.store = store;
