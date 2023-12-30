"use client";
import React, { useEffect, useState } from "react";
import style from "./MyPosts.module.scss";
import { getMyPosts } from "./hooks/getMyPosts";

export const MyPosts = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    getMyPosts().then((res) => setPosts(res));
  }, []);

  return (
    <div className={style.container}>
      {posts?.length ? (
        posts.map((item: Post) => <p key={item.id}>{item.title}</p>)
      ) : (
        <h1>{"You don't have any posts yet"}</h1>
      )}
    </div>
  );
};
