"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { addBlog, updateLikes } from "../services/blogs";

export const createBlog = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const url = formData.get("url") as string;
  const likes = Number(formData.get("likes") ?? 0);

  addBlog(title, author, url, likes);
  revalidatePath("/blogs");
  redirect("/blogs");
};


export async function likeBlog(formData: FormData) {
  const id = Number(formData.get("id"));

  updateLikes(id);

  revalidatePath("/blogs");
  revalidatePath(`/blogs/${id}`);
}
