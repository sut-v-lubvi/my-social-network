import { authAPI } from "../api/authAPI";

const ADD_AUTH_DATA = "ADD_AUTH_DATA";
const INITALIZATION = "INITALIZATION";

export const addAuthDataAC = (data) => {
  return { type: ADD_AUTH_DATA, data };
};

export const initializationAC = (data) => {
  return { type: INITALIZATION, data };
};

export const addAuthData = () => async (dispatch) => {
  const data = await authAPI.getAuthData();
  console.log(data.data);
  dispatch(addAuthDataAC(data.data));
};

export const initializationTC = () => (dispatch) => {
  let authResult = dispatch(addAuthData());
  authResult.then(() => {
    dispatch(initializationAC());
  });
};

export const login = (data) => async (dispatch) => {
  const response = await authAPI.login(data);
  console.log(response);
  if (response.data.resultCode === 0) dispatch(addAuthData());
};
export const logOut = () => async (dispatch) => {
  const response = await authAPI.unLogin();
  if (response.resultCode === 0) {
    dispatch(addAuthDataAC({}));
  }
};

let initialState = {
  initialization: false,
  messages: [],
  isLogin: false,
  data: {
    id: null,
    email: null,
    login: null,
  },
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUTH_DATA: {
      console.log(action.data);
      if (!Object.keys(action.data).length)
        return {
          ...state,
          isLogin: false,
        };
      else {
        return {
          ...state,
          isLogin: true,
          data: { ...state.data, ...action.data },
        };
      }
    }
    case INITALIZATION:
      return {
        ...state,
        initialization: true,
      };
    default:
      return state;
  }
};

export default authReducer;
