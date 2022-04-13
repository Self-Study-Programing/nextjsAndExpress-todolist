export const LOGIN = "login/LOGIN";
export const LOGOUT = "login/LOGOUT";

export const login = () => ({
  type: LOGIN,
});
export const logout = () => ({
  type: LOGOUT,
});

export const loginInitialState = {
  login: false,
  user: null,
};

export default (state = loginInitialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { login: true, user: action.user };
    case LOGOUT:
      return { login: false, user: null };
    default:
      return state;
  }
};
