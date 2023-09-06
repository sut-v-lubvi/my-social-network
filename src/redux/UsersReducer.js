import { usersAPI } from "../api/usersAPI";

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const ADD_USERS = "ADD_USERS";
const ADD_NUMBER_OF_PAGE = "ADD_NUMBER_OF_PAGE";
const ADD_CURRENT_PAGE = "ADD_CURRENT_PAGE";
const NEXT_NUMBER_OF_PAGE = "NEXT_NUMBER_OF_PAGE";
const TOGGLE_TWIST = "TOGGLE_TWIST";
const PREVIOUS_NUMBER_OF_PAGE = "PREVIOUS_NUMBER_OF_PAGE";
const ADD_CURRENT_USER_ID_FROM_URL = "ADD_CURRENT_USER_ID_FROM_URL";
const TOGGLE_DISABLE = "TOGGLE_DISABLE";

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleTwist());
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(addUsers(data.items));
    dispatch(addNumberPage(data.totalCount));
    dispatch(toggleTwist());
  };
};
export const addNextUsers = (p, pageSize) => {
  return async (dispatch) => {
    dispatch(addCurrentPage(p));
    const data = await usersAPI.getUsers(p, pageSize);
    dispatch(addUsers(data.items));
  };
};
export const unFollow = (id) => {
  return async (dispatch) => {
    {
      dispatch(toggleDisable(true, id));
      const data = await usersAPI.unFollow(id);
      console.log(data.resultCode);
      if (data.resultCode === 0) {
        dispatch(unfollow(id));
      }
      dispatch(toggleDisable(false, id));
    }
  };
};
export const follow = (id) => {
  return async (dispatch) => {
    dispatch(toggleDisable(true, id));
    const data = await usersAPI.follow(id);
    console.log(data.resultCode);
    if (data.resultCode === 0) {
      dispatch(followAC(id));
    }
    dispatch(toggleDisable(false, id));
  };
};

export const toggleDisable = (isFetching, userId) => {
  return {
    type: TOGGLE_DISABLE,
    isFetching,
    userId,
  };
};

export const addCurrentUserIDFromURLAC = (userId) => {
  return {
    type: ADD_CURRENT_USER_ID_FROM_URL,
    userId,
  };
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollow = (userId) => {
  return {
    type: UN_FOLLOW,
    userId,
  };
};

export const addUsers = (users) => {
  return {
    type: ADD_USERS,
    users,
  };
};
export const addNumberPage = (quantityOfPage) => {
  return {
    type: ADD_NUMBER_OF_PAGE,
    quantityOfPage,
  };
};
export const addCurrentPage = (currentPage) => {
  return {
    type: ADD_CURRENT_PAGE,
    currentPage,
  };
};
export const nextNumberPage = () => {
  return {
    type: NEXT_NUMBER_OF_PAGE,
  };
};
export const prevNumberPage = () => {
  return {
    type: PREVIOUS_NUMBER_OF_PAGE,
  };
};
export const toggleTwist = () => {
  return {
    type: TOGGLE_TWIST,
  };
};

let initialState = {
  currentUserIDFromURL: 28987,
  users: [],
  pageSize: 100,
  fullNumberOfPage: [5],
  numberPage: [],
  currentNumberOfPage: [],
  currentPage: 1,
  twist: false,
  isFetching: false,
  buttonStatus: [],
};

let UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DISABLE:
      return {
        ...state,
        buttonStatus: action.isFetching
          ? [...state.buttonStatus, action.userId]
          : state.buttonStatus.filter((e) => e !== action.userId),
      };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((e) => {
          if (action.userId === e.id) {
            return { ...e, followed: true };
          }
          return e;
        }),
      };
    case ADD_CURRENT_USER_ID_FROM_URL:
      return {
        ...state,
        currentUserIDFromURL: action.userId.userId,
      };
    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map((e) => {
          if (action.userId === e.id) {
            return { ...e, followed: false };
          }
          return e;
        }),
      };
    case ADD_USERS:
      return {
        ...state,
        users: action.users,
      };
    case ADD_NUMBER_OF_PAGE: {
      let fullNumberOfPageArray = [];
      for (let i = 1; i <= action.quantityOfPage; i++) {
        fullNumberOfPageArray.push(i);
      }
      let numberPageArray = fullNumberOfPageArray;

      numberPageArray.length = Math.ceil(
        numberPageArray.length / state.pageSize
      );
      let currentNumberOfPageArray = numberPageArray.splice(0, 5);
      return {
        ...state,
        numberPage: numberPageArray,
        currentNumberOfPage: currentNumberOfPageArray,
      };
    }
    case ADD_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case NEXT_NUMBER_OF_PAGE: {
      let numberOfPageArray = [...state.numberPage];
      let currentNumberOfPageArray = numberOfPageArray.splice(0, 5);

      return {
        ...state,
        numberPage: numberOfPageArray,
        currentNumberOfPage: currentNumberOfPageArray,
      };
    }
    case PREVIOUS_NUMBER_OF_PAGE:
      if (state.currentNumberOfPage[0] === 1) {
        return state;
      }
      let numberOfPageArray = [...state.numberPage];
      let currentNumberOfPageArray = [...state.currentNumberOfPage];
      currentNumberOfPageArray.reverse();
      for (let i = 0; i < currentNumberOfPageArray.length; i++) {
        numberOfPageArray.unshift(currentNumberOfPageArray[i]);
      }
      console.log(numberOfPageArray);
      currentNumberOfPageArray.reverse();
      let nevCurrentNumberOfPageArray = currentNumberOfPageArray.map(
        (e) => e - 5
      );

      return {
        ...state,
        numberPage: numberOfPageArray,
        currentNumberOfPage: nevCurrentNumberOfPageArray,
      };
    case TOGGLE_TWIST:
      if (state.twist) {
        return {
          ...state,
          twist: false,
        };
      } else {
        return {
          ...state,
          twist: true,
        };
      }
    default:
      return state;
  }
};

export default UsersReducer;
