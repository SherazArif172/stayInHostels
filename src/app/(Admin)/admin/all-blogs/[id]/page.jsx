import Image from "next/image";
import React from "react";

const Page = async ({ params }) => {
  const id = params.id;

  try {
    const res = await fetch(`http://localhost:3000/api/blog?id=${id}`);

    // Check for response status
    if (!res.ok) {
      throw new Error("Failed to fetch blog data");
    }

    const blog = await res.json();
    console.log(blog);

    // Check if blog data exists and imgUrl is provided
    if (!blog || !blog.imageUrl) {
      throw new Error("Blog data is incomplete");
    }

    return (
      <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert shadow-custom p-6">
            <div className="aspect-square w-full h-96 relative shadow-lg overflow-hidden rounded-lg">
              <Image
                src={blog.imageUrl}
                alt="Organized desk workspace"
                layout="fill"
                objectFit="cover"
                className="object-cover hover:scale-105 duration-300"
              />
            </div>
            <p className="mb-4 text-3xl font-extrabold leading-tight text-primary lg:mb-6 lg:text-4xl dark:text-white text-center mt-5">
              {blog.title}
            </p>
            <p className="text-center">{blog.content}</p>
          </article>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return <div>Failed to load blog details: {error.message}</div>;
  }
};

export default Page;
