"use client";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/char_counter.min.js";
import { useState } from "react";
import { createPost } from "../hooks/Post/createPost";
import axios from "axios";
import dynamic from "next/dynamic";

const FroalaEditorComponent = dynamic(() => import("react-froala-wysiwyg"), {
  ssr: false,
});

const PostBody = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [image, setImage] = useState<any>();

  const handleTitle = (event: any) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const handleModelChange = (event: any) => {
    setBody(event);
    console.log(event);
  };

  const handleImageUpload = async (e: any, editor: any, response: any) => {
    console.log("e: ", e);
    const uploadedImageLink = response.link;
    console.log(uploadedImageLink);
  };

  const editorConfig = {
    // imageUploadURL: "http://localhost:8000/post/image/",
    events: {
      "image.beforeUpload": function (images: any) {
        // Do something here.
        // this is the editor instance.
        console.log(this);
      },
      "image.inserted": function ($img: any, response: any) {
        // Do something here.
        // this is the editor instance.
        console.log("a", $img, response);
        console.log(this);
      },
      "image.loaded": function ($img: any) {
        // Do something here.
        // this is the editor instance.
        console.log("a", $img);
        console.log(this);
      },
      "image.uploaded": function (response: any) {
        // Do something here.
        // this is the editor instance.
        console.log("a", response);
        console.log(this);
      },
    },
  };

  return (
    <div>
      <input type="text" value={title} onChange={handleTitle} />
      <FroalaEditorComponent
        tag="textarea"
        onModelChange={handleModelChange}
        config={{
          events: {
            imageUploadURL: "http://localhost:8000/post/image/",
            "image.beforeUpload": async function (images: any) {
              // const fileObject = images[0];
              // const formData = new FormData();
              // formData.append("file", fileObject);
              // const res = await axios.post(
              //   "http://localhost:8000/post/image/",
              //   formData
              // );
              // console.log(res.data.file);
              // setImage((data: any) => res.data.file);
              // console.log(images);
            },
            "image.inserted": function ($img: any, response: any) {
              // Do something here.
              // this is the editor instance.
              console.log("a", $img, response);
              console.log(this);
            },
            "file.uploadedToS3": function (link: any, key: any, response: any) {
              // Do something here.
              // this is the editor instance.
              console.log(link, key, response);
              console.log(this);
            },
          },
        }}
      />
      <button onClick={() => createPost({ title, body })}>Send</button>
    </div>
  );
};

export default PostBody;
