import React from "react";
import style from "./Item.module.scss";
import Image from "next/image";
import cover_image from "./cover.png";

const Item = ({ title }: { title: string }) => {
  return (
    <article className={style.post}>
      <div className={style.post_details}>
        <h5>August 13, 2021 </h5>
        <h4>
          10 Hilarious Cartoons That Depict Real-Life Problems of Programmers
        </h4>
      </div>
      <Image src={cover_image} width={300} height={211} alt="post_cover" />
    </article>
  );
};

export default Item;
