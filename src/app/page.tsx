// app/page.tsx
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/blog/PostCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-3">Just notes. Nothing more.</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          No noise, no distractions, just ideas written down before they fade.
        </p>
      </section>

      <Separator className="mb-10" />

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Latest Posts</h2>
          <Badge variant="secondary">{posts.length} articles</Badge>
        </div>

        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
