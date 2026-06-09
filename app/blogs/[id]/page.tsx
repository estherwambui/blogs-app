import { likeBlog } from "@/app/actions/blogs";
import { getBlogById } from "@/app/services/blogs";
import { notFound } from "next/navigation";
import React from "react";

async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = getBlogById(Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>By {blog.author}</p>
      <a href={blog.url} target="_blank" rel="noopener noreferrer">
        Read Article
      </a>
      <p>❤️ {blog.likes} likes</p>

      <form action={likeBlog}>
        <input type="hidden" name="id" value={blog.id} />
        <button type="submit">Like</button>
      </form>
    </div>
  );
}

export default BlogPage;
