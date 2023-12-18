"use client";
import React, { useRef, useState } from "react";
import PostTitle from "./PostTitle/PostTitle";
import style from "./CreatePost.module.scss";
import PostImage from "./PostImage/PostImage";
import { createPost } from "./hooks/Post/createPost";
import { Editor } from "@tinymce/tinymce-react";

const CreatePost = () => {
  const [body, setBody] = useState<string>("");
  const editorRef = useRef(null) as any;

  return (
    <section className={style.container}>
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
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
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
    </section>
  );
};

export default CreatePost;
