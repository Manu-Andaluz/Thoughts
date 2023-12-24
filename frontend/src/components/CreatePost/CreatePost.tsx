"use client";
import React, { useEffect, useRef, useState } from "react";
import PostTitle from "./PostTitle/PostTitle";
import style from "./CreatePost.module.scss";
import PostImage from "./PostImage/PostImage";
import { createPost } from "./hooks/Post/createPost";
import { Editor } from "@tinymce/tinymce-react";
import { redirect } from "next/navigation";

const CreatePost = () => {
  const [body, setBody] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const editorRef = useRef(null) as any;

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
              <Editor
                apiKey="1mqm862svrhv96rve6jmzg6wvzk5351ok0j0y7cnfl603zhg"
                onInit={(evt, editor) => (editorRef.current = editor)}
                onEditorChange={(content, editor) => setBody(content)}
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | " +
                    "bullist numlist outdent indent | link image | print preview media fullscreen | " +
                    "forecolor backcolor emoticons | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px, }",
                }}
              />
            </form>
            <button
              className="submit-btn"
              onClick={() => {
                createPost({ body });
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
