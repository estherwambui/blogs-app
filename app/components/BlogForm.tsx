"use client";

import { createBlog } from "../actions/blogs";

export default function BlogForm() {
  return (
    <form action={createBlog} className="flex flex-col">
      <input
        name="title"
        placeholder="Title"
        required
      />

      <input
        name="author"
        placeholder="Author"
        required
      />

      <input
        name="url"
        type="url"
        placeholder="URL"
        required
      />

      <input
        name="likes"
        type="number"
        min="0"
        placeholder="Likes"
        defaultValue={0}
      />

      <button type="submit">Create</button>
    </form>
  );
}