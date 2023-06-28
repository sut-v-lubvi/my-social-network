import { combineReducers, legacy_createStore } from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
  messagePage: messageReducer,
  profilePage: profileReducer,
  findUsers: UsersReducer,
});

let store = legacy_createStore(reducers);

window.store = store;
export default store;
