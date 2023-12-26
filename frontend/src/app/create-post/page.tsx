import React from "react";
import CreatePost from "@/components/CreatePost/CreatePost";
import dynamic from "next/dynamic";

const DynamicCreatePost = dynamic(
  () => import("@/components/CreatePost/CreatePost"),
  {
    ssr: false, // This ensures that the component is only rendered on the client side
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
