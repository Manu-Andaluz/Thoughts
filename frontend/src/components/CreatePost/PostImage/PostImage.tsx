import React, { useEffect, useRef, useState } from "react";
import style from "./PostImage.module.scss";
import Image from "next/image";
import { DefaultAvatarIcon, EditAvatarIcon } from "./icons";

const PostImage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [avatar, setAvatar] = useState("");

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section className={style.container}>
      <div>
        {avatar ? (
          <Image
            className={style.image}
            priority
            width={1000}
            height={1000}
            src={avatar}
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
              setAvatar(URL.createObjectURL(e.target.files[0]));
          }}
          id="fileInput"
          name="user_image"
        />
      </label>
    </section>
  );
};

export default PostImage;
