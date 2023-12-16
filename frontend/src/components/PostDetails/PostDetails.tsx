import React from "react";
import style from "./PostDetails.module.scss";

const PostDetails = ({ id }: { id: number }) => {
  return <div className={style.container}>Post id : {id}</div>;
};

export default PostDetails;
