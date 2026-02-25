import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--color-bg-secondary)] bg-[var(--color-bg-primary)] mt-auto">
            <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <span className="font-bold text-lg tracking-tight">Abel Paul John</span>
                        <p className="text-sm text-[var(--color-text-secondary)] max-w-sm">
                            Hardware-minded engineer bridging the gap between physical systems and clean software tooling.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/abelpauljohn" target="_blank" rel="noopener noreferrer" className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 rounded-full transition-all">
                            <Github className="w-5 h-5" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/abelpauljohn" target="_blank" rel="noopener noreferrer" className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 rounded-full transition-all">
                            <Linkedin className="w-5 h-5" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:abelpauj@gmail.com" className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 rounded-full transition-all">
                            <Mail className="w-5 h-5" />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[var(--color-bg-secondary)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-text-secondary)]">
                    <p>© {currentYear} Abel Paul John. All rights reserved.</p>
                    <p>
                        Built with Next.js, MDX, and Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
}
