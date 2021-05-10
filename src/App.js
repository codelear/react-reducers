import "./App.css";
import Navigation from "./Navigation";
import { useReducer } from "react";
import LoginForm from "./Forms/LoginForm";

const LOGIN_ACTIONS = {
  LOGIN_CLICKED: 0,
  LOGOUT_CLICKED: 1,
  LOGIN_CLOSED: 2,
};

function loginHandler(loginState, action) {
  switch (action.type) {
    case LOGIN_ACTIONS.LOGIN_CLICKED:
      loginState = { ...loginState, isLoginRequired: true };
      break;

    case LOGIN_ACTIONS.LOGOUT_CLICKED:
      loginState = { ...loginState, isLoggedIn: false };
      localStorage.removeItem("isLoggedIn");
      break;

    case LOGIN_ACTIONS.LOGIN_CLOSED:
      action.payload.loginStatus === "Success" &&
        (loginState = {
          ...loginState,
          isLoggedIn: true,
          isLoginRequired: false,
        }) && localStorage.setItem("isLoggedIn", "true");
      action.payload.loginStatus === "Failure" &&
        (loginState = { ...loginState, isLoginRequired: false });
      break;

    default:
      break;
  }
  return loginState;
}

function App() {
  const [loginState, loginDispatch] = useReducer(loginHandler, {
    isLoggedIn: localStorage.getItem("isLoggedIn")==="true" ? true : false,
    isLoginRequired: false,
  });

  function loginClickHandler() {
    loginDispatch({ type: LOGIN_ACTIONS.LOGIN_CLICKED });
  }

  function logoutClickHandler() {
    loginDispatch({ type: LOGIN_ACTIONS.LOGOUT_CLICKED });
  }

  function loginCloseHandler(loginStatus) {
    loginDispatch({
      type: LOGIN_ACTIONS.LOGIN_CLOSED,
      payload: { loginStatus: loginStatus },
    });
  }

  return (
    <div className="App">
      <Navigation
        loggedIn={loginState.isLoggedIn}
        onLoginClick={loginClickHandler}
        onLogoutClick={logoutClickHandler}
      ></Navigation>

      {loginState.isLoginRequired && (
        <LoginForm onClose={loginCloseHandler}></LoginForm>
      )}

    </div>
  );
}

export default App;
