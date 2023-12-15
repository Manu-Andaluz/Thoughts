"use client";
import React, { useEffect, useState } from "react";
import PostTitle from "./PostTitle/PostTitle";
import PostBody from "./PostBody/PostBody.module";
import style from "./CreatePost.module.scss";
import PostImage from "./PostImage/PostImage";
import { createPost } from "./hooks/Post/createPost";

const CreatePost = () => {
  const [body, setBody] = useState<string>("");

  return (
    <section className={style.container}>
      <form id="create-post">
        <h2>Create your new Post</h2>
        <PostImage />
        <PostTitle />
        <PostBody body={body} setBody={setBody} />
      </form>
      <button
        className="submit-btn"
        onClick={() => {
          console.log(body);
          createPost({ body });
        }}
      >
        Create
      </button>
    </section>
  );
};

export default CreatePost;
