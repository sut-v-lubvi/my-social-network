import { profileAPI } from "../api/profileAPI";

export const NEV_POST_IN_STATE = "NEV_POST_IN_STATE";
const ADD_PROFILE = "ADD_PROFILE";
const SET_STATUS = "SET_STATUS";
const STATUS_UPDATE = "STATUS_UPDATE";

export const setStatusAC = (status) => {
  return { type: SET_STATUS, status };
};

export const statusUpdateAC = (status) => {
  return { type: STATUS_UPDATE, status };
};
export const addProfileAC = (profile) => {
  return { type: ADD_PROFILE, profile };
};

export const newPostInStateActionCreator = (textPost) => {
  return { type: NEV_POST_IN_STATE, postText: textPost };
};

export const addProfile = (userId) => {
  return async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(addProfileAC(data));
  };
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatusAC(response.data));
  };
};

export const statusUpdate = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  };
};

let initialState = {
  profile: null,
  postsData: [
    { id: 1, postText: "Саламаленькуй тигры есть жи", likesCount: 387 },
    { id: 2, postText: "Я хааа бляяяя", likesCount: 743 },
  ],
  statusUser: "",
};

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        statusUser: action.status,
      };
    case NEV_POST_IN_STATE:
      let lengthArray = state.postsData.length;
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: lengthArray + 1, postText: action.postText, likesCount: 0 },
        ],
        newPostText: "",
      };
    default:
      return state;
  }
};

export default profileReducer;
