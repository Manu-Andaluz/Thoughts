import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/char_counter.min.js";
import { useState } from "react";
import dynamic from "next/dynamic";
import { createPost } from "../hooks/Post/createPost";
import style from "./PostBody.module.scss";
import FroalaEditorComponent from "react-froala-wysiwyg";

const PostBody = ({ body, setBody }: { body: any; setBody: Function }) => {
  const handleModelChange = (event: any) => {
    setBody(event);
    console.log(event);
    console.log(body);
  };

  return (
    <div className={style.container}>
      <FroalaEditorComponent tag="textarea" onModelChange={handleModelChange} />
    </div>
  );
};

export default PostBody;
