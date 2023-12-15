import React from "react";
import style from "./PostTitle.module.scss";

const PostTitle = () => {
  return (
    <div className={style.container}>
      <div className={style.input_container}>
        <input type="text" id="post-title" name="title" required />
        <label htmlFor="post-title">Post Title</label>
      </div>
    </div>
  );
};

export default PostTitle;
