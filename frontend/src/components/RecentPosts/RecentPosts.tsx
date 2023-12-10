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

  return (
    <section className={style.recent_posts}>
      <div>
        <h2>Daily Digest</h2>
        <button className={style.see_more_btn}>View all</button>
      </div>

      <section>
        {posts?.map((item: Post) => (
          <Item title={item.title} />
        ))}
      </section>
    </section>
  );
};

export default RecentPosts;
