"use client";
import React, { useEffect, useState } from "react";
import style from "./MyPosts.module.scss";
import Link from "next/link";
import { BinIcon } from "./icons";
import { getMyPosts } from "./hooks/GET/getMyPosts";
import { deletePost } from "./hooks/DELETE/deletePost";

export const MyPosts = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    getMyPosts().then((res) => setPosts(res));
  }, []);

  return (
    <ul className={style.container}>
      {posts?.length ? (
        posts.map((item: Post) => (
          <li key={item.id}>
            <Link href={`/post-details/${item.id}`}>{item.title}</Link>
            <button onClick={() => deletePost(item.id)}>
              <BinIcon />
            </button>
          </li>
        ))
      ) : (
        <h1>{"You don't have any posts yet"}</h1>
      )}
    </ul>
  );
};
