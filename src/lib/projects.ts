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
        title: "KiCad PCB Design: LED Chaser System",
        slug: "kicad-pcb-design",
        description: "From Concept to 3D PCB: Designing a manual and automatic LED chaser system using CD4017 and NE555 timers within strict layout constraints.",
        tags: ["Hardware Design", "KiCad", "PCB Routing"],
        thumbnailSrc: "/projects/kicad/image1.png"
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
    },
    {
        title: "Hardware Assembly & Soldering: 3×3×3 LED Cube",
        slug: "soldering-led-cube",
        description: "Precision soldering of both SMD and THT components, mechanical alignment of a 3D LED structure, and system integration with an Arduino Nano.",
        tags: ["Soldering", "Hardware Validation", "PCB Assembly"],
        thumbnailSrc: "/projects/soldering/image1.jpg"
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
