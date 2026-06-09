import React from "react";
import { getBlogs } from "../services/blogs";
import Link from "next/link";
import Search from "../components/Search";

// data/blogs.ts

export interface Blog {
  id: number;
  title: string;
  author: string;
  url: string;
  likes: number;
}

async function Blogs({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;
  const blogs = getBlogs(search);
  return (
    <div>
      <h1>Blogs</h1>
      <Search />

      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              {" "}
              {blog.title}{" "}
            </Link>

            <p>By {blog.author}</p>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              Read Article
            </a>
            <p>❤️ {blog.likes} likes</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blogs;
