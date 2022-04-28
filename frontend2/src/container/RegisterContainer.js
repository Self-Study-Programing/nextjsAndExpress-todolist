import React, { useCallback, useEffect, useState } from "react";
import Signup from "../components/signup/Signup";

const RegisterContainer = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [checked, setChecked] = useState(null);

  const onChangeUsername = useCallback(
    (e) => {
      setUsername(e.target.value);
    },
    [username]
  );
  const onChangeEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [email]
  );
  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );
  const onChangePassword2 = useCallback(
    (e) => {
      setPassword2(e.target.value);
    },
    [password2]
  );

  useEffect(() => {
    if (password === password2) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [password, password2]);

  const onSubmitForm = useCallback(() => {
    console.log("회원가입:" + email, username, password, checked);
    if (checked && email && username && checked) {
      console.log("성공");
    }
  }, [email, username, password, checked]);

  return (
    <div>
      <Signup
        username={username}
        email={email}
        password={password}
        password2={password2}
        onChangeEmail={onChangeEmail}
        onChangeUsername={onChangeUsername}
        onChangePassword={onChangePassword}
        onChangePassword2={onChangePassword2}
        onSubmitForm={onSubmitForm}
      />
    </div>
  );
};

export default RegisterContainer;
