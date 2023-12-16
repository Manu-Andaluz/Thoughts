"use client";
import React, { useEffect, useState } from "react";
import style from "./RecentPosts.module.scss";
import { getRecentPosts } from "./hooks/GET/getRecentsPosts";
import Item from "./Item/Item";

const RecentPosts = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const getData = async () => {
      const data = await getRecentPosts();
      setPosts(data);
    };
    getData();
  }, []);

  console.log(posts);

  return (
    <section className={style.recent_posts}>
      <div className={style.top}>
        <h2>Daily Digest</h2>
        <button className={style.see_more_btn}>View all</button>
      </div>

      <div className={style.post_container}>
        {posts?.map((item: Post, i: number) => (
          <Item
            title={item.title}
            created={item.created}
            image_cover={item.image_cover}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
