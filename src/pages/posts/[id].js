import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { id } = context.params;
  console.log(id);
  const res = await axios.get(`http://localhost:8000/posts/${id}`);
  const post = await res.data;
  // console.log(post);
  return {
    props: {
      post,
    },
  };
}

const Id = ({ post }) => {
  return (
    <>
      <div className="flex w-full justify-center gap-8">
        <Link
          className="px-2 hover:border-b hover:scale-105 duration-300 hover:border-b-green-500 text-2xl py-1"
          href="/posts/create"
        >
          Create Post
        </Link>
        <Link
          className="px-2 hover:border-b hover:scale-105 duration-300 hover:border-b-green-500 text-2xl py-1"
          href="/posts"
        >
          View Posts
        </Link>
      </div>

      <div>
        <h1>{post.title}</h1>
        <p>{post.author}</p>
        <p>{post.content}</p>
      </div>
    </>
  );
};

export default Id;
