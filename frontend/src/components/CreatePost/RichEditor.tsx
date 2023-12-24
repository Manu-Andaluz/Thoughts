import React from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichEditor = ({
  editorContent,
  setEditorContent,
}: {
  editorContent: string;
  setEditorContent: Function;
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"], // Remove 'image' to disable image upload
      ["code-block"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "code-block",
  ];

  const handleEditorChange = (content: any) => {
    setEditorContent(content);
  };

  return (
    <ReactQuill
      modules={modules}
      formats={formats}
      placeholder="Write something..."
      style={{ height: "300px", marginBottom: "3rem" }} // Set the initial height here
      onChange={handleEditorChange} // Add the onChange event
      value={editorContent} // Set the editor content from state
    />
  );
};

export default RichEditor;
