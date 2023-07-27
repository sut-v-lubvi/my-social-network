const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const ADD_USERS = "ADD_USERS";
const ADD_NUMBER_OF_PAGE = "ADD_NUMBER_OF_PAGE";
const ADD_CURRENT_PAGE = "ADD_CURRENT_PAGE";
const NEXT_NUMBER_OF_PAGE = "NEXT_NUMBER_OF_PAGE";
const TOGGLE_TWIST = "TOGGLE_TWIST";
const PREVIOUS_NUMBER_OF_PAGE = "PREVIOUS_NUMBER_OF_PAGE";
const ADD_CURRENT_USER_ID_FROM_URL = "ADD_CURRENT_USER_ID_FROM_URL";

export const addCurrentUserIDFromURLAC = (userId) => {
  return {
    type: ADD_CURRENT_USER_ID_FROM_URL,
    userId,
  };
};

export const follow = (userId) => {
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
  currentUserIDFromURL: 2,
  users: [],
  pageSize: 100,
  fullNumberOfPage: [5],
  numberPage: [],
  currentNumberOfPage: [],
  currentPage: 1,
  twist: false,
};

let UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((e) => {
          if (action.userId === e.id) {
            return { ...e, condition: true };
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
            return { ...e, condition: false };
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
