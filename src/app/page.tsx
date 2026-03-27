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
        <h1 className="text-3xl font-bold mb-3">Halo, saya Osamu Dazai 👋</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Ini adalah catatan belajar saya. Saya tulis apa yang saya pelajari
          supaya tidak lupa — dan semoga berguna untuk orang lain juga.
        </p>
      </section>

      <Separator className="mb-10" />

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Tulisan terbaru</h2>
          <Badge variant="secondary">{posts.length} artikel</Badge>
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
