import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const Create = () => {
  const router = useRouter();

  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [content, setContent] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const Submit = async (e) => {
    e.preventDefault();
    try {
      console.log(!title);
      if (!title || !author || !content)
        return alert("Please fill all the fields");

      const post = await axios.post("http://localhost:8000/posts", {
        title: title,
        author: author,
        content: content,
      });
      console.log(post);
      // router.push('/posts')

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.log("error" + error);
    }
  };
  return (
    <>
      <div className="flex w-full justify-center gap-8">
        {/* <Link
          className="px-2 hover:border-b hover:scale-105 duration-300 hover:border-b-green-500 text-2xl py-1"
          href="/posts/create"
        >
          Create Post
        </Link> */}
        <Link
          className="px-2 hover:border-b hover:scale-105 duration-300 hover:border-b-green-500 text-2xl py-1"
          href="/posts"
        >
          View Posts
        </Link>
      </div>
      

      {success && (
        <div className="absolute w-full">
          <div className="mt-5 bg-green-500 text-white mx-auto w-60 text-center p-3">
            <button
              className="absolute ml-[153px] -mt-4"
              onClick={() => setSuccess(false)}
            >
              X
            </button>{" "}
            Post Created
          </div>
        </div>
      )}
      <div className="w-full flex flex-col gap-10 max-w-screen-lg mx-auto min-h-screen h-full justify-center">
        <h1 className="text-4xl text-center font-bold -mt-60">Create Post</h1>
        <form type="submit" onSubmit={Submit} className="flex flex-col gap-3">
          <input
            required="required"
            className="w-3/4 invalid:border-2 required:border-dashed valid:border-solid invalid:border-red-500 valid:border-green-500 valid:border-2  mx-auto p-3 text-xl border-gray-200 border focus:outline-none rounded-md focus:border-blue-500"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            required="required"
            className="w-3/4 invalid:border-2 required:border-dashed valid:border-solid invalid:border-red-500 valid:border-green-500 valid:border-2 mx-auto p-3 text-xl border-gray-200 border focus:outline-none rounded-md focus:border-blue-500"
            type="text"
            placeholder="Author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
          <textarea
            required="required"
            className="w-3/4 invalid:border-2 resize-none required:border-dashed valid:border-solid invalid:border-red-500 valid:border-green-500 valid:border-2 mx-auto p-3 text-xl border-gray-200 border focus:outline-none rounded-md focus:border-blue-500"
            type="text"
            placeholder="Content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            rows="4"
            cols="50"
            
          />
          <button className="w-4/12 mx-auto p-3 text-xl border-gray-500 border hover:border-blue-800 rounded-md bg-gradient-to-r from-blue-800 to-cyan-500 hover:via-blue-500 hover:to-cyan-500">
            Submit
          </button>
        </form>
        
      </div>
    </>
  );
};

export default Create;
