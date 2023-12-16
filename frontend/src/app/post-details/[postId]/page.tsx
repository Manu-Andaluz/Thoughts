import PostDetails from "@/components/PostDetails/PostDetails";
import React from "react";

const page = ({ params: { postId } }: { params: { postId: number } }) => {
  return <PostDetails id={postId} />;
};

export default page;
