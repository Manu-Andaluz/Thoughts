import React, { useEffect, useRef, useState } from "react";
import style from "./PostImage.module.scss";
import Image from "next/image";
import { DefaultAvatarIcon, EditAvatarIcon } from "./icons";

const PostImage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [postImage, setPostImage] = useState("");

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section className={style.container}>
      <div>
        {postImage ? (
          <Image
            className={style.image}
            priority
            width={1000}
            height={1000}
            src={postImage}
            alt="profile_picture"
          />
        ) : (
          <div className={style.default_img}>
            <DefaultAvatarIcon />
          </div>
        )}
        <button onClick={triggerFileInput} className={style.edit}>
          <EditAvatarIcon />
        </button>
      </div>

      <label htmlFor="fileInput">
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={(e: any) => {
            if (e.target.files && e.target.files[0])
              setPostImage(URL.createObjectURL(e.target.files[0]));
          }}
          id="fileInput"
          name="image_cover"
        />
      </label>
    </section>
  );
};

export default PostImage;
