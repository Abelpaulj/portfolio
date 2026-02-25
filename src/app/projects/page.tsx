import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects, type ProjectMeta } from "@/lib/projects";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Abel Paul John",
    description: "Explore detailed hardware design, RTL simulation, and testing case studies.",
};

export default async function ProjectsPage() {
    // Pull all projects. normally this reads all MDX files in /content/projects
    const projects = await getFeaturedProjects();

    return (
        <div className="container mx-auto px-4 md:px-8 py-16 max-w-6xl">
            <div className="mb-12 max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Case Studies</h1>
                <p className="text-lg text-[var(--color-text-secondary)]">
                    A comprehensive look at my engineering work, detailing the problem constraints, the design approach, and the hard evidence that proves it works.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project: ProjectMeta) => (
                    <ProjectCard key={project.slug} {...project} />
                ))}
            </div>
        </div>
    );
}
