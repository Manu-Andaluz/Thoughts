"use client";
import React, { useEffect, useState } from "react";
import style from "./PostDetails.module.scss";
import { getPostDetail } from "./hooks/GET/getPostDetail";

const PostDetails = ({ id }: { id: number }) => {
  const [post, setPost] = useState<PostDetails>();

  useEffect(() => {
    const getData = async () => {
      const data = await getPostDetail(id);
      setPost(data);
      converToHtml(data?.body);
    };
    getData();
  }, [id]);

  const converToHtml = (htmlString: string) => {
    const body = document.getElementById("post-body");
    if (body) body.innerHTML = htmlString;
  };

  return (
    <section className={style.container}>
      <h1 className="post-details-title">{post?.title}</h1>
      <h4>Writteng by: {post?.author_username}</h4>
      <article id="post-body"></article>
    </section>
  );
};

export default PostDetails;
