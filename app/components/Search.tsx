// app/blogs/Search.tsx

"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }

    router.push(`/blogs?${params.toString()}`);
  };

  return (
    <input
      type="text"
      placeholder="Search blogs..."
      defaultValue={searchParams.get("search") ?? ""}
      onChange={handleChange}
    />
  );
}