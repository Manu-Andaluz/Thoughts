"use client";
import React, { useEffect, useRef, useState } from "react";
import PostTitle from "./PostTitle/PostTitle";
import style from "./CreatePost.module.scss";
import PostImage from "./PostImage/PostImage";
import { createPost } from "./hooks/Post/createPost";
import { redirect } from "next/navigation";
import RichEditor from "./RichEditor";

const CreatePost = () => {
  const [editorContent, setEditorContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      redirect("/auth-error");
    }
    setLoading(false);
  }, []);

  return (
    <>
      <section className={style.container}>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <>
            <form id="create-post">
              <h2>Create your new Post</h2>
              <PostImage />
              <PostTitle />
              <RichEditor
                editorContent={editorContent}
                setEditorContent={setEditorContent}
              />
            </form>
            <button
              className="submit-btn"
              onClick={() => {
                createPost({ editorContent });
              }}
            >
              Create
            </button>
          </>
        )}
      </section>
    </>
  );
};

export default CreatePost;
