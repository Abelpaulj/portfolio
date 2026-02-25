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
                <p>
                    I'm an engineering student with a deep passion for the space where hardware meets software. Based in Germany, originally from India, my journey is driven by a curiosity to understand systems from the bare metal up to the interface.
                </p>

                <p>
                    My approach to engineering is inherently hands-on. Whether I'm designing a multi-layer PCB in KiCad, writing Synthesizable VHDL, or debugging circuits with an oscilloscope, I believe in one rule: <strong>It doesn't work until it's measured and documented.</strong>
                </p>

                <p>
                    I've actively cultivated bilingual and multi-lingual capabilities to thrive in international environments, with strong proficiency in English and German.
                </p>

                <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-bg-secondary)] p-6 rounded-lg my-10 not-prose">
                    <h3 className="font-bold text-xl text-[var(--color-text-primary)] mb-2">The Documentation Mindset</h3>
                    <p className="text-[var(--color-text-secondary)] text-base">
                        Good hardware is useless if nobody knows how to use it or how it was tested. I treat documentation, clear schematics, and clean simulation waveforms as first-class citizens in my workflow.
                    </p>
                </div>

                <p>
                    Currently, I am looking for <strong>Internships or Working Student</strong> roles in Embedded Systems, FPGA, or Hardware Validation, primarily in Germany. I am open to relocating for the right opportunity.
                </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--color-bg-secondary)]">
                <h2 className="text-xl font-bold mb-4">Let's connect</h2>
                <HomeHeroCTAs />
            </div>
        </div>
    );
}
