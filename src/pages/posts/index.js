import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const res = await axios.get("http://localhost:8000/posts");
  const { posts } = await res.data;
  // console.log(posts);
  return {
    props: {
      posts,
    },
  };
}

const Posts = ({ posts }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/posts/${id}`);
  };
  return (
    <>
      <div className="flex w-full justify-center gap-8">
        <Link
          className="px-2 hover:border-b hover:scale-105 duration-300 hover:border-b-green-500 text-2xl py-1"
          href="/posts/create"
        >
          Create Post
        </Link>
        {/* <Link
          className="px-2 hover:border-b hover:scale-105 duration-300 hover:border-b-green-500 text-2xl py-1"
          href="/posts"
        >
          View Posts
        </Link> */}
      </div>
      <div className="mx-auto w-full flex flex-col items-center gap-6">
        {posts &&
          posts.map((post, index) => (
            <div
              className="max-w-screen-md w-full p-2 cursor-pointer hover:shadow-blue-600 hover:shadow-sm duration-300"
              onClick={() => handleClick(post._id)}
              key={index}
            >
              <h1 className="text-2xl font-bold">{post.title}</h1>
              <p className="text-sm">{post.author}</p>
              <p className="mt-2 text-base mr-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                {post.content
                /* {post.content.substr(0, 140)}
                {post.content.length > 140? "...":"" } */}
              
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Posts;
