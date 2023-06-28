const FOLLOW = "FOLLOW";
const UN__FOLLOW = "UN__FOLLOW";
const ADD_USERS = "ADD_USERS";

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unFollowAC = (userId) => {
  return {
    type: UN__FOLLOW,
    userId,
  };
};

export const addUsersAC = (users) => {
  return {
    type: ADD_USERS,
    users,
  };
};

let initialState = {
  users: [
    {
      id: 1,
      avatarUrl:
        "https://kadet39.ru/wp-content/uploads/c/6/9/c69850b2c9c89b905f23ddfb48efb323.jpeg",
      condition: true,
      name: "Sasha",
      userStatus: "I am machine",
      location: { country: "Russia", city: "Rzhev" },
    },
    {
      id: 2,
      avatarUrl:
        "https://kadet39.ru/wp-content/uploads/c/6/9/c69850b2c9c89b905f23ddfb48efb323.jpeg",
      condition: false,
      name: "Dima",
      userStatus: "I am machine",
      location: { country: "Russia", city: "Moscow" },
    },
    {
      id: 3,
      avatarUrl:
        "https://kadet39.ru/wp-content/uploads/c/6/9/c69850b2c9c89b905f23ddfb48efb323.jpeg",
      condition: true,
      name: "Tonya",
      userStatus: "I am machine",
      location: { country: "Russia", city: "Voronez" },
    },
    {
      id: 4,
      avatarUrl:
        "https://kadet39.ru/wp-content/uploads/c/6/9/c69850b2c9c89b905f23ddfb48efb323.jpeg",
      condition: false,
      name: "Kiril",
      userStatus: "I am machine",
      location: { country: "Russia", city: "Tula" },
    },
  ],
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
    case UN__FOLLOW:
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

    default:
      return state;
  }
};

export default UsersReducer;
