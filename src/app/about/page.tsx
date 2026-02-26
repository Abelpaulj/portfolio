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

            <div className="mt-12 pt-8 border-t border-[var(--color-bg-secondary)]">
                <h2 className="text-xl font-bold mb-4">Let's connect</h2>
                <HomeHeroCTAs />
            </div>
        </div>
    );
}
