import React from "react";
import style from "./AuthError.module.scss";
import { WarningIcon } from "./icons";

const AuthError = () => {
  return (
    <div className={style.container}>
      <WarningIcon />
      <h1>You must be a user to post in this blog !!</h1>
    </div>
  );
};

export default AuthError;
