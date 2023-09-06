import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
  messagePage: messageReducer,
  profilePage: profileReducer,
  findUsers: UsersReducer,
  authData: authReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;
