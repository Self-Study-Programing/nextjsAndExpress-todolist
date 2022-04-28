import shortId from "shortid";

const userState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  me: null,
  item: [],
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const POST_ADD_SUCCESS = "POST_ADD_SUCCESS";

const postItem = (data) => ({
  id: shortId.generate(),
  title: data.title,
  description: data.description,
  success: false,
});

const reducers = (state = userState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        me: { email: action.data.email, username: action.data.username },
      };
    case POST_ADD_SUCCESS:
      return {
        ...state,
        item: [...state.item, postItem(action.data)],
      };
    default:
      return state;
  }
};

export default reducers;
