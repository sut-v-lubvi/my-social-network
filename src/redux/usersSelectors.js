export const getUserIdFromUrl = (state) => {
  return state.findUsers.currentUserIDFromURL;
};

export const getAllUsers = (state) => {
  return state.findUsers.users;
};

export const getFullNumberOfPage = (state) => {
  return state.findUsers.fullNumberOfPage;
};
export const getCurrentNumberOfPage = (state) => {
  return state.findUsers.currentNumberOfPage;
};

export const getTwist = (state) => {
  return state.findUsers.twist;
};

export const getPageSize = (state) => {
  return state.findUsers.pageSize;
};

export const getButtonStatus = (state) => {
  return state.findUsers.buttonStatus;
};
