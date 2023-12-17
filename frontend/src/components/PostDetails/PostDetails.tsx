"use client";
import React, { useEffect, useState } from "react";
import style from "./PostDetails.module.scss";
import { getPostDetail } from "./hooks/GET/getPostDetail";

const PostDetails = ({ id }: { id: number }) => {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const getData = async () => {
      const data = await getPostDetail(id);
      setPost(data);
      converToHtml(data?.body);
    };
    getData();
  }, []);

  const converToHtml = (htmlString: string) => {
    const body = document.getElementById("post-body");
    if (body) body.innerHTML = htmlString;
  };

  return (
    <section className={style.container}>
      <h1>{post?.title}</h1>
      <article id="post-body">Post title : {post?.title && post.title}</article>
    </section>
  );
};

export default PostDetails;
