import React from "react";
import style from "./AuthError.module.scss";
import Image from "next/image";

const AuthError = () => {
  return (
    <div className={style.container}>
      <Image src={"/join.svg"} width={600} height={600} alt="info.svg" />
      <h1>You must be a user to get access to this feature !!</h1>
    </div>
  );
};

export default AuthError;
