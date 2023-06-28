const TEXT_IN_TEXTAREA = "TEXT_IN_TEXTAREA";
const NEV_POST_IN_STATE = "NEV_POST_IN_STATE";

export const texInTextareaActionCreator = (textPostInTextarea) => {
  return { type: TEXT_IN_TEXTAREA, textPostInTextarea: textPostInTextarea };
};

export const newPostInStateActionCreator = (text) => {
  return { type: NEV_POST_IN_STATE, postText: text };
};

let initialState = {
  newPostText: "Я хааа",
  postsData: [
    { id: 1, postText: "Саламаленькуй тигры есть жи", likesCount: 387 },
    { id: 2, postText: "Я хааа бляяяя", likesCount: 743 },
  ],
};

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEXT_IN_TEXTAREA:
      return {
        ...state,
        newPostText: action.textPostInTextarea,
      };
    case NEV_POST_IN_STATE:
      let newPost = state.newPostText;
      let lengthArray = state.postsData.length;
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: lengthArray + 1, postText: newPost, likesCount: 0 },
        ],
        newPostText: "",
      };
    default:
      return state;
  }
};

export default profileReducer;
