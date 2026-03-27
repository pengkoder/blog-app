// components/blog/PostHeader.tsx
import { Post } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";

interface PostHeaderProps {
  post: Post;
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <div className="not-prose mb-8">
      <a
        href="/blog"
        className="text-sm text-muted-foreground hover:text-foreground
                   transition-colors inline-flex items-center gap-1 mb-6"
      >
        ← Semua tulisan
      </a>

      <div className="flex gap-2 flex-wrap mb-4">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className="text-3xl font-bold leading-tight mb-3">{post.title}</h1>

      <p className="text-muted-foreground text-lg leading-relaxed mb-5">
        {post.excerpt}
      </p>

      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        <span>·</span>
        <span>{post.readingTime} menit baca</span>
      </div>
    </div>
  );
}
