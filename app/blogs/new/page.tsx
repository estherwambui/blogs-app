// app/blogs/new/page.tsx

import BlogForm from "@/app/components/BlogForm";

export default function Newblog() {
  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Blog</h1>
      <BlogForm />
    </main>
  );
}
