import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";
import Tag from "@/components/Tag";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Abel Paul John`,
        description: project.description,
    };
}

export default async function ProjectCaseStudy({ params }: Props) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
            <div className="mb-8">
                <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors mb-6">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Projects
                </Link>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    {project.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-8 border-b border-[var(--color-bg-secondary)] pb-8">
                    {project.tags.map((tag: string) => (
                        <Tag key={tag} variant="outline" className="text-sm px-3 py-1">
                            {tag}
                        </Tag>
                    ))}
                </div>
            </div>

            <div className="prose prose-invert prose-zinc max-w-none 
          prose-headings:text-[var(--color-text-primary)] prose-headings:font-bold prose-headings:tracking-tight
          prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline
          prose-code:text-[var(--color-accent)] prose-code:bg-[var(--color-bg-secondary)] prose-code:px-1 prose-code:rounded
          prose-pre:bg-[var(--color-bg-secondary)] prose-pre:border prose-pre:border-zinc-800
          prose-strong:text-[var(--color-text-primary)]
          prose-th:text-[var(--color-text-primary)] prose-th:border-b prose-th:border-zinc-800
          prose-td:border-b prose-td:border-zinc-800/50">
                <MDXRemote source={project.content} />
            </div>

            <div className="mt-16 pt-8 border-t border-[var(--color-bg-secondary)] flex justify-between items-center">
                <p className="text-[var(--color-text-secondary)] text-sm">
                    End of Case Study.
                </p>
                <Link href="/projects" className="text-sm font-medium text-[var(--color-accent)] flex items-center gap-2 hover:underline">
                    <ArrowLeft className="w-4 h-4" />
                    View all projects
                </Link>
            </div>
        </article>
    );
}
