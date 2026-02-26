import { HomeHeroCTAs } from "@/components/CTAButtons";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Abel Paul John",
    description: "Learn more about my background, multi-lingual capabilities, and engineering philosophy.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 py-16 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-8">About Me</h1>

            <div className="prose prose-invert prose-zinc max-w-none text-lg text-[var(--color-text-secondary)] space-y-6">
                <p className="leading-relaxed">
                    I’m <strong className="text-[var(--color-text-primary)]">Abel Paul John</strong>, an engineering student from India currently based in Schorndorf, Germany. I’m studying B.Sc. Electrical Engineering and Information Technology at Ravensburg-Weingarten University of Applied Sciences (RWU), where I focus on electronics, measurement technology, and digital systems.
                </p>
                <p className="leading-relaxed">
                    I enjoy working at the intersection of hardware and software. In university labs, I build and test circuits on breadboards, measure AC signals using oscilloscopes and function generators, and apply metrology methods for accurate measurement and calibration. I also design and simulate circuits in KiCad, practice THT/SMD soldering, and develop digital designs in VHDL, including logic functions and finite state machines.
                </p>
                <p className="leading-relaxed">
                    Alongside my studies, I gained industry experience as a Software Developer Intern, where I tested websites, fixed issues, and contributed to a full-stack TypeScript application while building responsive web interfaces with JavaScript. I speak English (C1) and German (B2), and I’m comfortable working in international environments.
                </p>

                <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-bg-secondary)] p-6 rounded-lg my-10 not-prose">
                    <h3 className="font-bold text-xl text-[var(--color-text-primary)] mb-2">Looking Forward</h3>
                    <p className="text-[var(--color-accent)] font-medium text-base">
                        I’m currently looking for internships or working student roles in Embedded Systems, FPGA/RTL, Electronics, or Hardware Testing/Validation in Germany, and I’m open to relocating for the right opportunity.
                    </p>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6 border-b border-[var(--color-bg-secondary)] pb-2 tracking-tight">Experience</h2>

                <div className="relative border-l border-[var(--color-bg-secondary)] pl-6 ml-3 space-y-8">
                    <div className="relative">
                        <div className="absolute w-3 h-3 bg-[var(--color-accent)] rounded-full -left-[1.95rem] top-1.5 border-4 border-[var(--color-bg-primary)]"></div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Software Developer Intern</h3>
                            <span className="text-sm font-mono text-[var(--color-text-secondary)] mt-1 sm:mt-0 bg-[var(--color-bg-secondary)] px-2 py-1 rounded">Oct 2024 – Mar 2025</span>
                        </div>
                        <p className="text-[var(--color-accent)] font-medium mb-4 text-sm uppercase tracking-wider">VIA SOFTWARE GMBH & CO. KG <span className="text-[var(--color-text-secondary)] normal-case tracking-normal">— Dreieich, Germany</span></p>
                        <ul className="list-disc list-outside ml-4 space-y-2 text-[var(--color-text-secondary)] text-base">
                            <li>Conducted comprehensive website testing to identify and resolve functional and UX issues, improving overall system reliability and user experience.</li>
                            <li>Developed a full-stack web application using TypeScript, implementing efficient frontend and backend components.</li>
                            <li>Built dynamic and responsive web interfaces with JavaScript, focusing on performance optimization and interactive user experiences.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--color-bg-secondary)]">
                <h2 className="text-xl font-bold mb-4">Let's connect</h2>
                <HomeHeroCTAs />
            </div>
        </div>
    );
}
