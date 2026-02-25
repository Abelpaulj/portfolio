import { HomeHeroCTAs } from "@/components/CTAButtons";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects, type ProjectMeta } from "@/lib/projects";
import { Cpu, Terminal, ShieldCheck, Microscope, Code } from "lucide-react";

export default async function Home() {
    const featuredProjects = await getFeaturedProjects();

    return (
        <div className="flex flex-col gap-24 py-16 md:py-24">
            {/* 1. Hero Section */}
            <section className="container mx-auto px-4 md:px-8 flex flex-col items-start gap-6 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--color-text-primary)] leading-tight">
                    Embedded & FPGA-focused engineer who can design the hardware, verify it in simulation, and ship clean software tooling around it.
                </h1>
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)]">
                    Targeting <strong className="text-[var(--color-accent)] font-mono font-medium">Embedded Systems</strong>, <strong className="text-[var(--color-accent)] font-mono font-medium">FPGA / RTL</strong>, and <strong className="text-[var(--color-accent)] font-mono font-medium">Hardware Validation</strong> roles.
                </p>
                <HomeHeroCTAs />
            </section>

            {/* 3. Proof Strip */}
            <section className="border-y border-[var(--color-bg-secondary)] bg-[var(--color-bg-primary)] py-6 overflow-hidden hidden md:block">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex items-center justify-center gap-8 md:gap-16 font-mono text-sm font-medium text-[var(--color-text-secondary)] whitespace-nowrap opacity-60">
                        <span className="flex items-center gap-2"><Cpu className="w-4 h-4" /> KiCad 3D Renders</span>
                        <span>•</span>
                        <span className="flex items-center gap-2"><Terminal className="w-4 h-4" /> VHDL Waveforms</span>
                        <span>•</span>
                        <span className="flex items-center gap-2"><Microscope className="w-4 h-4" /> Oscilloscope Screen Caps</span>
                        <span>•</span>
                        <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Falstad Validation</span>
                    </div>
                </div>
            </section>

            {/* 2. Featured Projects */}
            <section className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="mb-8 flex flex-col gap-2">
                    <h2 className="text-2xl font-bold flex items-center gap-2 tracking-tight">
                        <div className="w-2 h-6 bg-[var(--color-accent)] rounded-sm"></div>
                        Featured Proof of Work
                    </h2>
                    <p className="text-[var(--color-text-secondary)]">Documented case studies spanning design, simulation, and real-world testing.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                    {featuredProjects.map((project: ProjectMeta) => (
                        <ProjectCard key={project.slug} {...project} />
                    ))}
                </div>
            </section>

            {/* 4. Skills Section */}
            <section className="container mx-auto px-4 md:px-8 max-w-4xl border border-[var(--color-bg-secondary)] bg-[var(--color-bg-primary)]/50 rounded-2xl p-6 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <h2 className="text-2xl font-bold mb-8">Technical Competencies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-mono text-sm text-[var(--color-accent)] mb-3 border-b border-[var(--color-bg-secondary)] pb-2 uppercase tracking-wider">Hardware Design</h3>
                        <ul className="space-y-2 text-[var(--color-text-secondary)] text-sm">
                            <li>KiCad Schematic & PCB Design</li>
                            <li>Soldering (THT & SMD)</li>
                            <li>Circuit Analysis & Component Selection</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-mono text-sm text-[var(--color-accent)] mb-3 border-b border-[var(--color-bg-secondary)] pb-2 uppercase tracking-wider">FPGA / RTL</h3>
                        <ul className="space-y-2 text-[var(--color-text-secondary)] text-sm">
                            <li>VHDL Digital Logic Design</li>
                            <li>FSMs & Timing Analysis</li>
                            <li>Simulation Waveform Verification</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-mono text-sm text-[var(--color-accent)] mb-3 border-b border-[var(--color-bg-secondary)] pb-2 uppercase tracking-wider">Test & Validation</h3>
                        <ul className="space-y-2 text-[var(--color-text-secondary)] text-sm">
                            <li>Oscilloscopes & Function Generators</li>
                            <li>Falstad Circuit Simulation</li>
                            <li>Measurement Correlation (Expected vs Measured)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-mono text-sm text-[var(--color-accent)] mb-3 border-b border-[var(--color-bg-secondary)] pb-2 uppercase tracking-wider">Software Tooling</h3>
                        <ul className="space-y-2 text-[var(--color-text-secondary)] text-sm">
                            <li>TypeScript, React, Next.js</li>
                            <li>Data Visualization (Web)</li>
                            <li>Git & Version Control Workflow</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. Mini About */}
            <section className="container mx-auto px-4 md:px-8 max-w-4xl text-center flex flex-col items-center gap-6">
                <Code className="w-10 h-10 text-[var(--color-bg-secondary)]" />
                <p className="text-lg md:text-xl text-[var(--color-text-primary)] max-w-2xl leading-relaxed">
                    I bring a unique bridge of international experience—hailing from India and now engineering in Germany. Through extensive lab work and hands-on projects, I approach hardware with a documentation-first mindset and build testing software to prove my designs work predictably.
                </p>
            </section>
        </div>
    );
}
