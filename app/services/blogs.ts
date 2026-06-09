import { Blog } from "../types/blog";

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    author: "Esther Irungu",
    url: "https://example.com/getting-started-nextjs",
    likes: 245,
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    author: "John Doe",
    url: "https://example.com/mastering-react-hooks",
    likes: 389,
  },
  {
    id: 3,
    title: "State Management with Redux Toolkit",
    author: "Jane Smith",
    url: "https://example.com/redux-toolkit-guide",
    likes: 172,
  },
  {
    id: 4,
    title: "Building APIs with Next.js",
    author: "Michael Brown",
    url: "https://example.com/nextjs-api-routes",
    likes: 298,
  },
  {
    id: 5,
    title: "Optimizing Performance in React",
    author: "Sarah Wilson",
    url: "https://example.com/react-performance",
    likes: 421,
  },
];

// services/blog.service.ts

export const getBlogs = (search?: string) => {
  let result = [...blogs];

  if (search) {
    result = result.filter(
      (blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.author.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return result.sort((a, b) => b.likes - a.likes);
};

let nextId = 6;

export const addBlog = (
  title: string,
  author: string,
  url: string,
  likes: number = 0,
): Blog => {
  const blog: Blog = {
    id: nextId++,
    title,
    author,
    url,
    likes,
  };
  blogs.push(blog);
  console.log(blog);

  return blog;
};

export const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id === id);
};

export const updateLikes = (id: number) => {
  const blog = blogs.find((blog) => blog.id === id);
  if (!blog) {
    return;
  }

  if (blog) {
    blog.likes += 1;
  }

  return blog;
};
