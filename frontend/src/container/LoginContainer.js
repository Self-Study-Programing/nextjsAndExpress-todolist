import React, { useCallback } from "react";
import LoginForm from "../components/login";
import useInput from "../hooks/useInput";

const LoginContainer = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log(email, password);
    },
    [email, password]
  );

  return (
    <div>
      <LoginForm
        email={email}
        onChangeEmail={onChangeEmail}
        password={password}
        onChangePassword={onChangePassword}
        onSubmitForm={onSubmitForm}
      />
    </div>
  );
};

export default LoginContainer;
