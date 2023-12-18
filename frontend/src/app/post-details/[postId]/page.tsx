import PostDetails from "@/components/PostDetails/PostDetails";
import React from "react";

const Page = ({ params: { postId } }: { params: { postId: number } }) => {
  return <PostDetails id={postId} />;
};

export default Page;
