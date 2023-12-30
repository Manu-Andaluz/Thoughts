import React from "react";
import dynamic from "next/dynamic";

const DynamicCreatePost = dynamic(
  () => import("@/components/CreatePost/CreatePost"),
  {
    ssr: false, // render only in client side
  },
);

const Page = () => {
  return (
    <div style={{ padding: "15vh 0 1rem 0" }}>
      <DynamicCreatePost />
    </div>
  );
};

export default Page;
