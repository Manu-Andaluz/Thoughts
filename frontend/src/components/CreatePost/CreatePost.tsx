"use client";
import React from "react";
import PostTitle from "./PostTitle/PostTitle";
import PostBody from "./PostBody/PostBody.module";
import style from "./CreatePost.module.scss";
import PostImage from "./PostImage/PostImage";

const CreatePost = () => {
  return (
    <section className={style.container}>
      <div>
        <h2>Create your new Post</h2>
        <PostImage />
        <PostTitle />
        <PostBody />
      </div>
      {/* <button onClick={() => createPost()}>SEND</button> */}
    </section>
  );
};

export default CreatePost;
