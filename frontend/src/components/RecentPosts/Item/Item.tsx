import React from "react";
import style from "./Item.module.scss";
import Image from "next/image";
import cover_image from "./cover.png";
import Link from "next/link";

const Item = ({
  postId,
  title,
  created,
  image_cover,
}: {
  postId: number;
  title: string;
  created: string;
  image_cover: string;
}) => {
  const createdDate = new Date(created);

  // Format the Date object to the desired string format
  const formattedDate = createdDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className={style.post}>
      <Link href={`post-details/${postId}`}>
        <div className={style.post_details}>
          <h5>{formattedDate} </h5>
          <h4>{title}</h4>
        </div>
        <Image src={image_cover} width={350} height={211} alt="post_cover" />
      </Link>
    </article>
  );
};

export default Item;
