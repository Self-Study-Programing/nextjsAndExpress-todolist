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
export const ITEM_SUCCESS_TOGGLE = "ITEM_SUCCESS_TOGGLE";
export const ITEM_DELETE = "ITEM_DELETE";

const postItem = (data) => ({
  id: shortId.generate(),
  title: data.title,
  description: data.description,
  success: false,
  date: "2022-02-29",
});

const reducers = (state = userState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        me: {
          email: action.data.email,
          username: action.data.username,
          description: action.data.description,
        },
        item: [...action.data.item],
      };
    case POST_ADD_SUCCESS:
      return {
        ...state,
        item: [...state.item, postItem(action.data)],
      };
    case ITEM_SUCCESS_TOGGLE:
      return {
        ...state,
        item: state.item.map((v) =>
          action.data.id === v.id ? { ...v, success: !v.success } : v
        ),
      };
    case ITEM_DELETE:
      return {
        ...state,
        item: state.item.filter((v) => action.data.id !== v.id),
      };
    default:
      return state;
  }
};

export default reducers;
