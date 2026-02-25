import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_PATH = path.join(process.cwd(), "src/content/projects");

export interface ProjectMeta {
    title: string;
    description: string;
    slug: string;
    tags: string[];
    thumbnailSrc: string;
}

export interface ProjectData extends ProjectMeta {
    content: string;
}

// Temporary dummy data until MDX files are parsed
export const FEATURED_PROJECTS: ProjectMeta[] = [
    {
        title: "KiCad PCB: Design → 3D Render → Soldered Prototype",
        slug: "kicad-pcb-design",
        description: "Designed a multi-layer PCB from schematic capture to routing. Generated 3D renders and hand-soldered the final functional prototype.",
        tags: ["Hardware Design", "KiCad", "Soldering"],
        thumbnailSrc: ""
    },
    {
        title: "VHDL Module with Simulation Evidence",
        slug: "vhdl-pwm-controller",
        description: "Developed a reliable PWM/FSM controller using VHDL. Verified edge cases and reset behavior through comprehensive simulation waveforms.",
        tags: ["FPGA / RTL", "VHDL", "Simulation"],
        thumbnailSrc: ""
    },
    {
        title: "Precision Analog Design: Op-Amp Circuits in Falstad",
        slug: "falstad-simulation",
        description: "Designed and simulated precision analog circuits using operational amplifiers and resistor networks, focusing on differential measurement and stability.",
        tags: ["Simulation", "Falstad", "Analog Design"],
        thumbnailSrc: "/projects/falstad/bridge.png"
    },
    {
        title: "Hardware Measurement: Transistors & Oscilloscope",
        slug: "oscilloscope-measurement",
        description: "Hands-on lab verification of Transistor setups using digital oscilloscopes, function generators, and proper documentation.",
        tags: ["Hardware Validation", "Oscilloscope", "Lab Work"],
        thumbnailSrc: ""
    }
];
export async function getFeaturedProjects(): Promise<ProjectMeta[]> {
    if (!fs.existsSync(PROJECTS_PATH)) return [];

    const files = fs.readdirSync(PROJECTS_PATH);

    const projects = files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const source = fs.readFileSync(path.join(PROJECTS_PATH, file), "utf8");
            const { data } = matter(source);

            return {
                slug: file.replace(".mdx", ""),
                title: data.title || "Untitled",
                description: data.description || "",
                tags: data.tags || [],
                thumbnailSrc: data.thumbnailSrc || "",
            };
        });

    return projects;
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
    const filePath = path.join(PROJECTS_PATH, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);

    return {
        slug,
        title: data.title || "Untitled",
        description: data.description || "",
        tags: data.tags || [],
        thumbnailSrc: data.thumbnailSrc || "",
        content,
    };
}
