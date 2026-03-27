// components/blog/PostCard.tsx
import { Post } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <a href={`/blog/${post.slug}`} className="group block">
      <Card className="transition-colors hover:border-foreground/30">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-semibold text-base leading-snug group-hover:underline">
              {post.title}
            </h3>
            <span className="text-xs text-muted-foreground whitespace-nowrap mt-0.5">
              {post.readingTime} mnt baca
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{post.excerpt}</p>
        </CardHeader>
        <CardContent>
          <Separator className="mb-3" />
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5 flex-wrap">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {new Date(post.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
