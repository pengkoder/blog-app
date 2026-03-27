import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/blog/PostCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Semua tulisan dan catatan belajar",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Notes</h1>
        <p className="text-muted-foreground">
          {posts.length} entries — a collection of ideas, learnings, and things
          worth remembering.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
