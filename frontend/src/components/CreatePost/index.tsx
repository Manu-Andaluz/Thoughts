"use client";
import React from "react";
import PostTitle from "./PostTitle";
import { createPost } from "./hooks/Post/createPost";
import PostBody from "./PostBody";

const CreatePost = () => {
  return (
    <div>
      {/* <PostTitle /> */}
      <PostBody />
      {/* <button onClick={() => createPost()}>SEND</button> */}
    </div>
  );
};

export default CreatePost;
