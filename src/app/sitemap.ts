import { MetadataRoute } from "next";
import { getFeaturedProjects } from "@/lib/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://your-portfolio-domain.com"; // Replace with real domain post-deployment

    // Get all dynamic project routes
    const projects = await getFeaturedProjects();
    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    // Static routes
    const routes = ["", "/about", "/projects"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.9,
    }));

    return [...routes, ...projectUrls];
}
