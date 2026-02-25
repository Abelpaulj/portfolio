import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Tag from "./Tag";

export interface ProjectCardProps {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    thumbnailSrc: string;
}

export default function ProjectCard({ slug, title, description, tags, thumbnailSrc }: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${slug}`}
            className="group flex flex-col rounded-xl border border-[var(--color-bg-secondary)] bg-[var(--color-bg-primary)] overflow-hidden hover:border-[var(--color-accent)]/50 focus-within:ring-2 focus-within:ring-[var(--color-accent)] transition-all duration-300"
        >
            <div className="relative h-48 sm:h-56 w-full bg-[var(--color-bg-secondary)] overflow-hidden">
                {thumbnailSrc ? (
                    <Image
                        src={thumbnailSrc}
                        alt={`Thumbnail for ${title}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 bg-grid-pattern opacity-20 flex items-center justify-center">
                        <span className="font-mono text-sm text-[var(--color-text-secondary)]">No Evidence Found</span>
                    </div>
                )}
            </div>

            <div className="flex flex-col flex-1 p-5 gap-4">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Tag key={tag} variant="accent">{tag}</Tag>
                    ))}
                </div>

                <div className="space-y-2 flex-1">
                    <h3 className="font-bold text-xl group-hover:text-[var(--color-accent)] transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3">
                        {description}
                    </p>
                </div>

                <div className="pt-4 mt-auto border-t border-[var(--color-bg-secondary)] flex justify-between items-center text-sm font-medium text-[var(--color-accent)]">
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
}
