import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/char_counter.min.js";
import { useState } from "react";
import dynamic from "next/dynamic";
import { createPost } from "../hooks/Post/createPost";
import style from "./PostBody.module.scss";
import FroalaEditorComponent from "react-froala-wysiwyg";

const PostBody = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const handleTitle = (event: any) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const handleModelChange = (event: any) => {
    setBody(event);
    console.log(event);
  };

  return (
    <div className={style.container}>
      <FroalaEditorComponent tag="textarea" onModelChange={handleModelChange} />
      <button
        className="submit-btn"
        onClick={() => createPost({ title, body })}
      >
        Send
      </button>
    </div>
  );
};

export default PostBody;
